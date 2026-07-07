import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MenuIcon, CloseIcon } from '@/icons'

const navLinks = [
  { label: 'Social Reels', href: '#reels' },
  { label: 'Campaigns', href: '#campaigns' },
  { label: 'Photos', href: '#photos' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="border-b border-fg/5 bg-bg/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#" className="font-display text-xl font-bold tracking-wide text-fg md:text-2xl">
            HR <span className="text-teal">Visuals</span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-semibold tracking-wide text-fg-muted transition-colors duration-200 hover:text-teal"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="inline-block rounded-full bg-tangerine px-5 py-2 text-sm font-bold text-white transition-colors duration-200 hover:bg-tangerine-hover"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            className="text-fg md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[65px] z-40 bg-bg/98 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col items-center gap-8 pt-16">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-display text-2xl font-semibold tracking-wide text-fg transition-colors hover:text-teal"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="inline-block rounded-full bg-tangerine px-8 py-3 font-display text-lg font-bold text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
