// src/components/Navbar.jsx
import React, { useEffect, useState } from 'react'
import { Activity, Menu } from 'lucide-react'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [shrunk, setShrunk] = useState(false)

  useEffect(() => {
    const onScroll = () => setShrunk(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header>
      <nav
        className={`fixed w-full z-50 glass-nav transition-all duration-300 ${
          shrunk
            ? 'shadow-sm bg-linear-to-r from-[#e6fff8]/30 via-[#d0fff0]/18 to-[#c5f7ef]/08 backdrop-blur-sm border-b border-slate-200/6'
            : 'bg-linear-to-r from-[#e6fff8]/22 via-[#d0fff0]/12 to-[#c5f7ef]/06 backdrop-blur-sm border-b border-transparent'
        }`}
        aria-label="Primary"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-300 ${shrunk ? 'h-16' : 'h-20'}`}>
            {/* Logo */}
            <a href="#home" className="flex items-center group" aria-label="Go to home">
              <div className="bg-teal-600/90 p-2 rounded-lg shadow-lg group-hover:bg-teal-700 transition-colors">
                <Activity className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div className="ml-3">
                <span className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-teal-700 transition-colors">
                  Dr. Syed Md. Muhsin
                </span>
                <p className="text-[10px] text-teal-800 font-bold tracking-widest uppercase mt-1">
                  General, Laparoscopic & Hepatobiliary Surgeon
                </p>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-2" aria-label="Primary navigation">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Specialties', href: '#services' }, // matches Services id
                { label: 'Chamber', href: '#locations' }
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="px-5 py-2 text-sm font-medium text-slate-800 hover:text-teal-700 rounded-full hover:bg-white/40 transition-colors"
                >
                  {item.label}
                </a>
              ))}
             <a
               href="#booking"
               className="ml-4 bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition shadow-lg shadow-teal-600/20 transform hover:-translate-y-0.5"
             >
               Book Appointment
             </a>
           </nav>

            {/* Mobile button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-slate-700 hover:text-teal-700 hover:bg-white/40 rounded-lg transition-colors"
              aria-label="Toggle menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div
            id="mobile-menu"
            className="md:hidden glass-nav w-full shadow-xl bg-linear-to-r from-[#e6fff8]/55 via-[#d0fff0]/40 to-[#c5f7ef]/30 border-t border-slate-200/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-1" role="menu" aria-label="Mobile navigation">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Specialties', href: '#services' },
                { label: 'Chamber', href: '#locations' }
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block w-full text-left px-4 py-3 text-slate-800 font-medium hover:bg-white/60 rounded-lg transition-colors"
                  role="menuitem"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 px-2">
                <a
                  href="#booking"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center px-4 py-3 bg-teal-600 text-white font-bold rounded-lg shadow-md hover:bg-teal-700 transition-colors"
                  role="menuitem"
                >
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
