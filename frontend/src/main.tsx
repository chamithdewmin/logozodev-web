import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { SiteAlertProvider } from '@/components/site-alert-provider'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <SiteAlertProvider>
      <App />
    </SiteAlertProvider>
  </BrowserRouter>,
)
