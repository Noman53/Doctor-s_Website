// src/components/Features.jsx
import React from 'react'
import { Microscope, Clock, HeartHandshake } from 'lucide-react'

const Features = () => {
  return (
    <section id="features" className="site-bg relative" aria-labelledby="features-heading">
      {/* teal blur behind content — matches Services section for consistent site palette */}
      <div className="absolute inset-0 bg-linear-to-br from-teal-50/60 via-teal-100/35 to-teal-200/20 backdrop-blur-md pointer-events-none z-0" />
      <div className="section scroll-mt-20 py-12 md:py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="features-heading" className="text-4xl font-extrabold text-slate-900 mb-4">
              Why Choose Dr. Muhsin?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Modern surgical care with advanced techniques and patient‑centric approach.
            </p>
          </div>

          {/* responsive grid — stacks on mobile; increase columns at md and up */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {/*
              TODO: add/remove feature cards here as required (keeps same structure)
            */}
            {[
              { icon: <Microscope />, title: 'Advanced Surgery', desc: 'Specialized in Hepatobiliary surgery for complex liver and bile duct disorders.' },
              { icon: <Clock />, title: 'Minimally Invasive', desc: 'Laparoscopic techniques ensuring smaller incisions, less pain, and quicker recovery.' },
              { icon: <HeartHandshake />, title: 'Patient-Centric', desc: 'Providing compassionate consultations at Surgiscope Hospital, Chattogram.' },
            ].map((f, i) => (
              <div
                key={i}
                className="glass-card rounded-3xl p-10 cursor-pointer group border border-white/60 bg-white/30 backdrop-blur-sm shadow-sm transform translate-y-1 hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
              >
                <div className="w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors duration-500 shadow-sm" aria-hidden="true">
                  {React.cloneElement(f.icon, { className: "h-8 w-8 text-teal-600 group-hover:text-white transition-colors duration-300" })}
                </div>
                <h3 className="font-bold text-gradient text-2xl mb-4">{f.title}</h3>
                <p className="text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
