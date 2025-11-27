// src/components/Features.jsx
// Purpose: Refined Features section with hover lift, gradient titles, and smoother transitions.
// Notes:
// - Each card uses .glass-card utility.
// - Added hover translate + shadow for premium feel.
// - Titles use text-gradient for emphasis.

import React from 'react'
import { Microscope, Clock, HeartHandshake } from 'lucide-react'

const Features = () => {
  return (
    <section className="py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Feature 1: Advanced Surgery */}
          <div className="glass-card p-10 rounded-3xl shadow-sm cursor-default group border border-white/40 
                          hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
            <div className="w-16 h-16 bg-white/70 rounded-2xl flex items-center justify-center mb-6 
                            group-hover:bg-teal-600 transition-colors duration-500 shadow-sm">
              <Microscope className="text-teal-700 h-8 w-8 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="font-bold text-gradient text-2xl mb-4">Advanced Surgery</h3>
            <p className="text-slate-600 leading-relaxed">
              Specialized in Hepatobiliary surgery for complex liver and bile duct disorders.
            </p>
          </div>

          {/* Feature 2: Minimally Invasive */}
          <div className="glass-card p-10 rounded-3xl shadow-sm cursor-default group border border-white/40 
                          hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
            <div className="w-16 h-16 bg-white/70 rounded-2xl flex items-center justify-center mb-6 
                            group-hover:bg-teal-600 transition-colors duration-500 shadow-sm">
              <Clock className="text-teal-700 h-8 w-8 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="font-bold text-gradient text-2xl mb-4">Minimally Invasive</h3>
            <p className="text-slate-600 leading-relaxed">
              Laparoscopic techniques ensuring smaller incisions, less pain, and quicker recovery.
            </p>
          </div>

          {/* Feature 3: Patient-Centric */}
          <div className="glass-card p-10 rounded-3xl shadow-sm cursor-default group border border-white/40 
                          hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
            <div className="w-16 h-16 bg-white/70 rounded-2xl flex items-center justify-center mb-6 
                            group-hover:bg-teal-600 transition-colors duration-500 shadow-sm">
              <HeartHandshake className="text-teal-700 h-8 w-8 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="font-bold text-gradient text-2xl mb-4">Patient-Centric</h3>
            <p className="text-slate-600 leading-relaxed">
              Providing compassionate consultations at Surgiscope Hospital, Chattogram.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Features