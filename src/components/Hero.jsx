// src/components/Hero.jsx
// Purpose: Refined Hero section with balanced spacing, shadows, and smoother hover.
// Notes:
// - Circular image with natural spacing before name tag.
// - Name tag card centered below image with drop shadow.
// - Buttons and trust indicators polished for consistency.

import React from 'react'
import doctorImg from '../assets/Dr-Syed-Md-Muhsin.jpg'
import { Award, ShieldCheck, Activity, Stethoscope } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden min-h-[92vh] flex items-center scroll-mt-20">
      {/* Decorative Gradient Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[10%] -left-[5%] w-[50%] h-[50%] bg-teal-300/30 rounded-full blur-[120px]"></div>
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] bg-emerald-300/30 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-6 text-center lg:text-left pt-10 lg:pt-0 animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-panel mb-8 shadow-sm border border-white/60">
              <span className="w-2 h-2 rounded-full bg-teal-600 mr-2 animate-pulse"></span>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-wide">Associate Professor of Surgery</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 drop-shadow-sm leading-tight">
              Expert Care for <br />
              <span className="text-gradient">Liver & Abdominal Health</span>
            </h1>
            
            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              Dr. Syed Md. Muhsin provides specialized care in General, Laparoscopic, and Hepatobiliary surgery.
              Treating complex conditions of the gallbladder, liver, and pancreas with precision.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#booking" className="flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-teal-600 hover:bg-teal-700 shadow-xl hover:shadow-teal-600/40 transition-all duration-300 transform hover:-translate-y-1">
                Book Consultation
              </a>
              <a href="#services" className="flex items-center justify-center px-8 py-4 border border-teal-200/50 text-base font-bold rounded-full text-teal-800 glass-card hover:bg-white transition-all duration-300">
                View Specialties
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-teal-200/30 flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-10 opacity-90">
              <div className="flex items-center space-x-2 text-slate-700 font-medium">
                <div className="p-2 bg-white/50 rounded-lg"><Award className="h-5 w-5 text-teal-700" /></div>
                <span>FRCS (Hon.)</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-700 font-medium">
                <div className="p-2 bg-white/50 rounded-lg"><ShieldCheck className="h-5 w-5 text-teal-700" /></div>
                <span>FACS (Hon.)</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-700 font-medium">
                <div className="p-2 bg-white/50 rounded-lg"><Activity className="h-5 w-5 text-teal-700" /></div>
                <span>Hepatobiliary Specialist</span>
              </div>
            </div>
          </div>

          {/* Profile Image + Name Tag */}
           <div className="lg:col-span-6 mt-12 lg:mt-0 relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-full overflow-hidden shadow-2xl border-8 border-white/30 max-w-xs mx-auto transform hover:scale-105 transition-transform duration-700">
              <img
                className="w-full h-full object-cover"
                src={doctorImg}
                alt="Dr. Syed Md. Muhsin"
                onError={(e) => { e.target.src = 'https://placehold.co/300x300/e2e8f0/1e293b?text=Dr+Muhsin' }}
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-teal-900/40 to-transparent z-10"></div>
              
            </div>
            {/* Floating Card */}
              <div className="absolute -bottom-7 left-[52%] -translate-x-1/2 glass-panel p-4 rounded-2xl shadow-lg z-20 flex items-center justify-between border border-white/40 w-[40%]">
                <div>
                  <p className="text-sm font-bold text-slate-900">Dr. Syed Md. Muhsin</p>
                  <p className="text-xs text-teal-700 font-semibold">Associate Professor of Surgery</p>
                  <p className="text-xs text-teal-700 font-semibold">Chittagong Medical College</p>
                </div>
                <div className="h-12 w-12 bg-teal-600 rounded-full flex items-center justify-center text-white shadow-lg">
                  <Stethoscope className="h-6 w-6" />
                </div>
              </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
