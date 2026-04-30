import { useMemo } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { SiteFooter } from '@/components/site-footer'
import { Spotlight } from '@/components/ui/spotlight'
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

  return (
    <div className="flex min-h-screen flex-col" data-motion-root>
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
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? {} : { opacity: 0, y: -6 }}
            transition={{ duration: 0.24, ease: [0.25, 0.46, 0.45, 0.94] }}
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
