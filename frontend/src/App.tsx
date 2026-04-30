import { useEffect, useMemo, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { SiteFooter } from '@/components/site-footer'
import { Spotlight } from '@/components/ui/spotlight'
import { cn } from '@/lib/utils'
import HomePage from '@/pages/home'
import ServicesPage from '@/pages/services'
import AboutPage from '@/pages/about'
import CareersPage from '@/pages/careers'
import WorkPage from '@/pages/work'
import ContactUsPage from '@/pages/contact-us'
import FAQPage from '@/pages/faq'
import TermsOfServicePage from '@/pages/terms-of-service'
import PrivacyPolicyPage from '@/pages/privacy-policy'
import ComingSoonPage from '@/pages/coming-soon'

function App() {
  const location = useLocation()
  const reduceMotion = useReducedMotion()
  const [curtainOpen, setCurtainOpen] = useState(false)
  const [appReady, setAppReady] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const overlayNavbar = useMemo(() => location.pathname === '/', [location.pathname])
  const showInnerGlow = useMemo(() => {
    const pathWithoutTrailingSlash = location.pathname.replace(/\/+$/, '') || '/'
    const routesWithoutGlow = new Set([
      '/services',
      '/about',
      '/careers',
      '/work',
      '/contact-us',
      '/privacy-policy',
      '/terms-of-service',
      '/faq',
    ])
    return pathWithoutTrailingSlash !== '/' && !routesWithoutGlow.has(pathWithoutTrailingSlash)
  }, [location.pathname])

  useEffect(() => {
    if (reduceMotion) {
      setCurtainOpen(true)
      setAppReady(true)
      setLoadingProgress(100)
      return
    }

    const progressTimer = window.setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 92) return prev
        return prev + 8
      })
    }, 70)

    const curtainTimer = window.setTimeout(() => {
      setLoadingProgress(100)
      setCurtainOpen(true)
    }, 220)

    const readyTimer = window.setTimeout(() => {
      setAppReady(true)
    }, 1150)

    return () => {
      window.clearInterval(progressTimer)
      window.clearTimeout(curtainTimer)
      window.clearTimeout(readyTimer)
    }
  }, [reduceMotion])

  return (
    <div className="flex min-h-screen flex-col" data-motion-root>
      <AnimatePresence>
        {!appReady ? (
          <motion.div
            key="preloader"
            className="fixed inset-0 z-[10000] flex items-end justify-center bg-[#0a0a0a] pb-14"
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
          >
            <div className="w-full max-w-md px-6">
              <div className="mb-3 text-center text-xs tracking-[0.2em] text-zinc-500">LOGOZODEV LOADING</div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div className="h-full rounded-full bg-white" animate={{ width: `${loadingProgress}%` }} />
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      {!reduceMotion ? (
        <>
          <div className={cn('pointer-events-none fixed inset-x-0 top-0 z-[9999] h-1/2 bg-[#0a0a0a]', curtainOpen ? 'animate-curtain-up' : '')} />
          <div className={cn('pointer-events-none fixed inset-x-0 bottom-0 z-[9999] h-1/2 bg-[#0a0a0a]', curtainOpen ? 'animate-curtain-down' : '')} />
        </>
      ) : null}
      <Navbar overlay={overlayNavbar} />
      <main className="relative flex-1 overflow-hidden">
        {showInnerGlow ? (
          <>
            <Spotlight className="-top-36 left-0 md:left-48 md:-top-16" fill="white" />
          </>
        ) : null}
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            className="relative z-10"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? {} : { opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/contact-us" element={<ContactUsPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/terms-of-service" element={<TermsOfServicePage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/coming-soon" element={<ComingSoonPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
