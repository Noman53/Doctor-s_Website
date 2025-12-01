// src/components/Hero.jsx
// Refined: semantic landmarks, mobile-first spacing, accessible labels, consistent overlays

import React from 'react'
import doctorImg from '../assets/Dr-Syed-Md-Muhsin.jpg'
import { Award, ShieldCheck, Activity, Stethoscope } from 'lucide-react'
import { useTranslation } from 'react-i18next' // 🔁 language switch

const Hero = () => {
  const { t } = useTranslation() // 🔁 language switch

  return (
    <section className="site-bg relative">
      {/* overlay behind content so headings and text remain sharp */}
      <div className="absolute inset-0 section-overlay-light pointer-events-none z-0" />
      {/* ensure hero content clears the fixed navbar and badge sits above other elements */}
      {/* more top spacing so badge clears fixed navbar on all viewports */}
      <div id="home" className="section pt-36 md:pt-44 pb-8 md:pb-24 relative z-10">
        {/* Decorative Gradient Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-[10%] -left-[5%] w-[50%] h-[50%] bg-teal-300/25 rounded-full blur-[120px]"></div>
          <div className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] bg-emerald-300/20 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            
            {/* Text Content */}
            <div className="lg:col-span-6 text-center lg:text-left pt-4 lg:pt-0">
              <div className="inline-flex items-center px-4 py-2 rounded-full glass-panel mb-6 mt-6 md:mt-10 shadow-sm border border-white/60 relative z-70">
                <span className="w-2 h-2 rounded-full bg-teal-600 mr-2 animate-pulse"></span>
                <span className="text-xs font-bold text-teal-800 uppercase tracking-wide">
                  {t('hero.badge')} {/* 🔁 language switch */}
                </span>
              </div>
              
              <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-5 drop-shadow-sm leading-tight">
                {t('hero.headlineLine1')} <br />
                <span className="text-gradient">{t('hero.headlineLine2')}</span> {/* 🔁 language switch */}
              </h1>
              
              <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                {t('hero.desc')} {/* 🔁 language switch */}
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#booking" className="flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-teal-600 hover:bg-teal-700 shadow-xl hover:shadow-teal-600/40 transition-all duration-300 transform hover:-translate-y-1">
                  {t('hero.book')} {/* 🔁 language switch */}
                </a>
                <a href="#services" className="flex items-center justify-center px-8 py-4 border border-teal-200/50 text-base font-bold rounded-full text-teal-800 glass-card hover:bg-white transition-all duration-300">
                  {t('hero.viewServices')} {/* 🔁 language switch */}
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="mt-10 pt-6 border-t border-teal-200/30 flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-10 opacity-90">
                <div className="flex items-center space-x-2 text-slate-700 font-medium">
                  <div className="p-2 bg-white/50 rounded-lg" aria-hidden="true"><Award className="h-5 w-5 text-teal-700" /></div>
                  <span>{t('hero.trust.frcs')}</span> {/* 🔁 language switch */}
                </div>
                <div className="flex items-center space-x-2 text-slate-700 font-medium">
                  <div className="p-2 bg-white/50 rounded-lg" aria-hidden="true"><ShieldCheck className="h-5 w-5 text-teal-700" /></div>
                  <span>{t('hero.trust.facs')}</span> {/* 🔁 language switch */}
                </div>
                <div className="flex items-center space-x-2 text-slate-700 font-medium">
                  <div className="p-2 bg-white/50 rounded-lg" aria-hidden="true"><Activity className="h-5 w-5 text-teal-700" /></div>
                  <span>{t('hero.trust.hb')}</span> {/* 🔁 language switch */}
                </div>
              </div>
            </div>

            {/* Profile Image + Name Tag */}
            <div className="lg:col-span-6 mt-12 lg:mt-0 relative">
              <div className="relative rounded-full overflow-hidden shadow-2xl border-8 border-white/30 max-w-xs mx-auto transform hover:scale-105 transition-transform duration-700">
                <img
                  className="w-full h-full object-cover"
                  src={doctorImg}
                  alt={t('identity.name')} /* 🔁 language switch */
                  loading="lazy"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-teal-900/40 to-transparent z-10" aria-hidden="true"></div>
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 glass-panel p-4 rounded-2xl shadow-lg z-20 flex items-center justify-between border border-white/40 w-[85%] sm:w-[60%] md:w-[50%] lg:w-[40%]">
                <div>
                  <p className="text-sm font-bold text-slate-900">{t('identity.name')}</p> {/* 🔁 language switch */}
                  <p className="text-xs text-teal-700 font-semibold">{t('hero.badge')}</p> {/* 🔁 language switch */}
                  <p className="text-xs text-teal-700 font-semibold">Chittagong Medical College</p> {/* keep as-is or add translation key if needed */}
                </div>
                <div className="h-12 w-12 bg-teal-600 rounded-full flex items-center justify-center text-white shadow-lg" aria-hidden="true">
                  <Stethoscope className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero