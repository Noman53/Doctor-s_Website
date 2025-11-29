import React from 'react'
import { ChevronRight, MapPin, Phone, Activity } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="relative overflow-hidden -mt-8 md:-mt-12">
      {/* modern upper border — thin gradient separator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-2 w-full rounded-t-2xl bg-linear-to-r from-[#7ee8fa] via-[#98c1ff] to-[#c77dff] shadow-sm -mb-3" />
      </div>

      {/* footer background matched to attachment — mint -> teal slide gradient */}
      <div className="relative overflow-hidden shadow-xl site-bg">
        <div className="absolute inset-0 section-overlay-light z-0"></div>
        {/* subtle top border (same style as copyright) to visually separate content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full border-t border-slate-800/20 -mt-2 mb-6" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 relative z-10">
          {/* Identity */}
          <div className="col-span-1 md:col-span-2 text-center md:text-left">
            <div className="flex items-center mb-4">
              <div className="bg-teal-600/90 p-2 rounded-lg shadow-lg mr-3 flex items-center justify-center" aria-hidden="true" title="Site logo">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-slate-900 text-lg font-bold tracking-tight">Dr. Syed Md. Muhsin</div>
                <p className="text-[10px] text-teal-800 font-bold tracking-widest uppercase mt-0.5">
                  General, Laparoscopic & Hepatobiliary Surgeon
                </p>
              </div>
            </div>
            <p className="text-slate-700 max-w-sm leading-relaxed font-medium">
              Associate Professor of Surgery at Chittagong Medical College & Hospital.
              Expert in General, Laparoscopic & Hepatobiliary Surgery.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-medical-900 font-extrabold mb-4 uppercase tracking-wider text-[12px]">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Specialties', href: '#services' },
                { label: 'Chamber', href: '#locations' },
                { label: 'Book Appointment', href: '#booking' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-slate-700 hover:text-medical-800 transition flex items-center group font-medium"
                  >
                    <ChevronRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-medical-900 font-extrabold mb-4 uppercase tracking-wider text-[12px]">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start text-slate-700 font-medium">
                <MapPin className="h-5 w-5 mr-3 text-medical-700 mt-0.5 shrink-0" />
                <span>Surgiscope Hospital, Unit 2<br />Katalgonj, Chawkbazar, Chattogram</span>
              </li>
              <li className="flex items-center text-slate-700 font-medium">
                <Phone className="h-5 w-5 mr-3 text-medical-700 shrink-0" />
                <span>+880 1711-946412</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom note */}
        <div className="max-w-7xl mx-auto px-4 pt-4 pb-6 sm:pt-6 sm:pb-8 border-t border-slate-800/20 text-center text-xs text-slate-800 relative z-10">
          © {new Date().getFullYear()} Dr. Syed Md. Muhsin. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
