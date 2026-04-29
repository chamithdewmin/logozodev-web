import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { spawnSync } from "node:child_process";

const lockPath = path.join(process.cwd(), ".next", "dev", "lock");

function isProcessRunning(pid) {
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}

function readLock(lockFilePath) {
  try {
    const raw = fs.readFileSync(lockFilePath, "utf8");
    return JSON.parse(raw);
  } catch (error) {
    return { parseError: error };
  }
}

function terminateProcess(pid) {
  if (process.platform === "win32") {
    const result = spawnSync("taskkill", ["/PID", String(pid), "/F"], {
      encoding: "utf8",
    });
    return {
      ok: result.status === 0,
      detail: (result.stdout || result.stderr || "").trim(),
    };
  }

  try {
    process.kill(pid, "SIGTERM");
  } catch (error) {
    return { ok: false, detail: String(error?.message || error) };
  }

  for (let i = 0; i < 10; i += 1) {
    if (!isProcessRunning(pid)) {
      return { ok: true, detail: "Process terminated with SIGTERM." };
    }
  }

  try {
    process.kill(pid, "SIGKILL");
    return { ok: true, detail: "Process terminated with SIGKILL." };
  } catch (error) {
    return { ok: false, detail: String(error?.message || error) };
  }
}

if (!fs.existsSync(lockPath)) {
  process.exit(0);
}

const lockData = readLock(lockPath);
const pid = Number(lockData?.pid);

if (!Number.isInteger(pid) || pid <= 0) {
  fs.rmSync(lockPath, { force: true });
  console.warn("[dev-lock] Removed invalid .next/dev/lock file.");
  process.exit(0);
}

if (!isProcessRunning(pid)) {
  fs.rmSync(lockPath, { force: true });
  console.warn(`[dev-lock] Removed stale lock from dead PID ${pid}.`);
  process.exit(0);
}

console.warn(`[dev-lock] Found running Next dev server (PID ${pid}). Attempting restart...`);
const killResult = terminateProcess(pid);

if (!killResult.ok) {
  console.error(`[dev-lock] Failed to terminate PID ${pid}.`);
  if (killResult.detail) {
    console.error(`[dev-lock] ${killResult.detail}`);
  }
  console.error(`[dev-lock] Fallback: taskkill /PID ${pid} /F`);
  process.exit(1);
}

fs.rmSync(lockPath, { force: true });
console.warn(`[dev-lock] Stopped PID ${pid} and removed lock. Starting fresh dev server...`);
