import React, { useEffect, useRef, useState } from 'react'
import { Activity, Menu } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [shrunk, setShrunk] = useState(false)
  const navRef = useRef(null)
  const menuButtonRef = useRef(null)
  const { t, i18n } = useTranslation()
  const isBn = i18n.language === 'bn'

  useEffect(() => {
    const onScroll = () => setShrunk(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return undefined

    const closeOnOutsidePointer = (event) => {
      if (!navRef.current?.contains(event.target)) setOpen(false)
    }
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    const closeOnDesktopResize = (event) => {
      if (event.matches) setOpen(false)
    }
    const desktopQuery = window.matchMedia('(min-width: 768px)')

    document.addEventListener('pointerdown', closeOnOutsidePointer)
    document.addEventListener('keydown', closeOnEscape)
    desktopQuery.addEventListener('change', closeOnDesktopResize)

    return () => {
      document.removeEventListener('pointerdown', closeOnOutsidePointer)
      document.removeEventListener('keydown', closeOnEscape)
      desktopQuery.removeEventListener('change', closeOnDesktopResize)
    }
  }, [open])

  const toggleLanguage = () => {
    const next = isBn ? 'en' : 'bn'
    i18n.changeLanguage(next)
    localStorage.setItem('lang', next)
    document.documentElement.lang = next
  }

  const navItems = [
    { label: t('navbar.home'), href: '#home' },
    { label: t('navbar.about'), href: '#about' },
    { label: t('navbar.services'), href: '#services' },
    { label: t('navbar.chamber'), href: '#locations' }
  ]

  return (
    <header>
      <nav
        ref={navRef}
        className={`fixed w-full z-50 glass-nav transition-all duration-300 ${
          shrunk
            ? 'shadow-sm bg-linear-to-r from-[#e6fff8]/30 via-[#d0fff0]/18 to-[#c5f7ef]/08 backdrop-blur-sm border-b border-slate-200/6'
            : 'bg-linear-to-r from-[#e6fff8]/22 via-[#d0fff0]/12 to-[#c5f7ef]/06 backdrop-blur-sm border-b border-transparent'
        }`}
        aria-label="Primary"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-300 ${shrunk ? 'h-16' : 'h-20 md:h-16 xl:h-20'}`}>
            {/* Logo */}
            <a href="#home" onClick={() => setOpen(false)} className="flex min-w-0 flex-1 items-center group" aria-label="Go to home">
              <div className="shrink-0 bg-teal-600/90 p-2 rounded-lg shadow-lg group-hover:bg-teal-700 transition-colors">
                <Activity className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div className="ml-3 min-w-0">
                <span className="block text-base sm:text-lg leading-tight font-bold text-slate-900 tracking-tight group-hover:text-teal-700 transition-colors">
                  {t('identity.name')}
                </span>
                <p className="mt-1 text-[9px] sm:text-[10px] leading-tight text-teal-800 font-bold tracking-[0.12em] uppercase whitespace-normal">
                  {t('identity.subtitle')}
                </p>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden xl:flex shrink-0 items-center space-x-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="whitespace-nowrap px-4 py-2 text-sm font-medium text-slate-800 hover:text-teal-700 rounded-full hover:bg-white/40 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#booking"
                className="ml-2 whitespace-nowrap bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition shadow-lg shadow-teal-600/20 transform hover:-translate-y-0.5"
              >
                {t('navbar.booking')}
              </a>

              {/* Language Switch Button */}
              <button
                onClick={toggleLanguage}
                className="ml-2 whitespace-nowrap px-4 py-2 rounded-full bg-white/60 text-slate-800 border border-white/50 hover:bg-white cursor-pointer transition font-semibold shadow-sm hover:shadow-md"
              >
                {isBn ? 'English' : 'বাংলা'} {/* 🔁 Bangla translation toggle */}
              </button>
            </div>

            {/* Mobile button */}
            <button
              ref={menuButtonRef}
              onClick={() => setOpen((isOpen) => !isOpen)}
              className="md:hidden p-2 text-slate-700 hover:text-teal-700 hover:bg-white/40 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
          <nav className="hidden md:flex xl:hidden items-center justify-between gap-1 pb-2" aria-label="Tablet navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="whitespace-nowrap px-2 py-2 text-[clamp(0.75rem,1.7vw,0.875rem)] font-medium text-slate-800 hover:text-teal-700 rounded-full hover:bg-white/40 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#booking"
              className="whitespace-nowrap rounded-full bg-teal-600 px-3 py-2 text-[clamp(0.75rem,1.7vw,0.875rem)] font-semibold text-white shadow-md transition hover:bg-teal-700"
            >
              {t('navbar.booking')}
            </a>
            <button
              onClick={toggleLanguage}
              className="whitespace-nowrap rounded-full border border-white/50 bg-white/60 px-3 py-2 text-[clamp(0.75rem,1.7vw,0.875rem)] font-semibold text-slate-800 transition hover:bg-white"
            >
              {isBn ? 'English' : 'বাংলা'}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div
            id="mobile-menu"
            className="md:hidden glass-nav w-full shadow-xl bg-linear-to-r from-[#e6fff8]/55 via-[#d0fff0]/40 to-[#c5f7ef]/30 border-t border-slate-200/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-1" role="menu" aria-label="Mobile navigation">
              {[
                { label: t('navbar.home'), href: '#home' },
                { label: t('navbar.about'), href: '#about' },
                { label: t('navbar.services'), href: '#services' },
                { label: t('navbar.chamber'), href: '#locations' }
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block w-full text-left px-4 py-3 text-slate-800 font-medium hover:bg-white/60 rounded-lg transition-colors cursor-pointer"
                  role="menuitem"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 px-2 flex gap-2">
                <a
                  href="#booking"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center px-4 py-3 bg-teal-600 text-white font-bold rounded-lg shadow-md hover:bg-teal-700 transition-colors cursor-pointer"
                  role="menuitem"
                >
                  {t('navbar.booking')}
                </a>
                <button
                  onClick={() => { toggleLanguage(); setOpen(false) }}
                  role="menuitem"
                  className="px-4 py-3 bg-white/70 text-slate-800 font-bold rounded-lg border border-white/40 hover:bg-white transition-colors w-28 cursor-pointer"
                >
                  {isBn ? 'English' : 'বাংলা'} {/* 🔁 Bangla translation toggle */}
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
