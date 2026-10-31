// src/components/Hero.jsx
// Refined: semantic landmarks, mobile-first spacing, accessible labels, consistent overlays

import React from 'react'
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
              <div className="inline-flex max-w-full items-center gap-x-2 px-3 sm:px-4 py-2 rounded-2xl sm:rounded-full glass-panel mb-6 mt-6 md:mt-10 shadow-sm border border-white/60 relative z-10">
                <span className="w-2 h-2 shrink-0 rounded-full bg-teal-600 animate-pulse"></span>
                <span className="min-w-0 text-[clamp(0.625rem,3.1vw,0.75rem)] leading-snug font-bold text-teal-800 uppercase tracking-wide whitespace-normal break-words">
                  {t('hero.badge')} {/* 🔁 language switch */}
                </span>
              </div>
              
              <h1 id="hero-heading" className="text-[clamp(2rem,8.2vw,3.75rem)] font-extrabold text-slate-900 mb-5 drop-shadow-sm leading-[1.12]">
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
            <div className="lg:col-span-6 mt-12 lg:mt-0 relative mx-auto w-full max-w-[22rem]">
              <div className="absolute -inset-3 rounded-[2.4rem] border border-teal-700/15 rotate-3" aria-hidden="true" />
              <div className="relative z-10 mx-auto w-full max-w-[20rem] aspect-[20/27] overflow-hidden rounded-[2rem] border-[6px] border-white bg-white shadow-[0_24px_70px_rgba(15,76,75,0.2)] transition-transform duration-500 hover:-translate-y-1">
                <img
                  className="w-full h-full object-contain"
                  src="/dr-muhsin.jpg"
                  alt={t('identity.name')} /* 🔁 language switch */
                  width="600"
                  height="750"
                  fetchPriority="high"
                />
              </div>
              <div className="relative z-20 mt-4 mx-auto w-[calc(100%-1rem)] max-w-[20rem] glass-panel p-4 rounded-2xl shadow-lg flex items-center justify-between gap-3 border border-white/60">
                <div>
                  <p className="text-sm font-bold text-slate-900">{t('identity.name')}</p> {/* 🔁 language switch */}
                  <p className="text-[clamp(0.8125rem,1.3vw,0.875rem)] leading-snug text-teal-700 font-semibold">{t('hero.badge')}</p> {/* 🔁 language switch */}
                  <p className="text-[clamp(0.8125rem,1.3vw,0.875rem)] leading-snug text-teal-700 font-semibold">{t('about.institute')}</p>
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