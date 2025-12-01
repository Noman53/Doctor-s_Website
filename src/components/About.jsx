// src/components/About.jsx
import React from 'react'
import doctorImg from '../assets/Dr-Syed-Md-Muhsin.jpg'
import { GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next' // 🔁 language switch

const About = () => {
  const { t } = useTranslation() // 🔁 language switch

  const structuredData = { /* keep as-is */ }

  return (
    <section className="site-bg relative" id="about">
      <div className="absolute inset-0 section-overlay-light pointer-events-none z-0" />
      <div className="section py-10 md:py-16 relative z-10">
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            
            {/* Content */}
            <div className="order-2 lg:order-1 mt-10 lg:mt-0">
              <span className="text-teal-700 font-bold uppercase tracking-wider text-xs bg-white/50 px-3 py-1 rounded-full border border-teal-100">
                {t('about.meet')} {/* 🔁 language switch */}
              </span>
              <h1 id="about-heading" className="text-4xl font-extrabold text-slate-900 mb-6 mt-4">
                {t('about.name')} {/* 🔁 language switch */}
              </h1>

              <div className="mb-8 glass-card p-5 rounded-2xl shadow-sm">
                <p className="text-lg text-teal-800 font-bold mb-1">{t('about.designation')}</p> {/* 🔁 language switch */}
                <p className="text-slate-600 font-medium">{t('about.institute')}</p> {/* 🔁 language switch */}
              </div>

              <div className="prose prose-lg text-slate-600 mb-10 leading-relaxed">
                <p><strong>{t('about.name')}</strong> {t('about.bio1')}</p> {/* 🔁 language switch */}
                <p>{t('about.bio2')}</p> {/* 🔁 language switch */}
              </div>

              <div className="glass-panel rounded-2xl p-8 mb-10 shadow-lg">
                <h2 className="text-sm font-extrabold text-teal-800 uppercase tracking-wide mb-6 flex items-center">
                  <GraduationCap className="h-5 w-5 mr-2" /> {t('about.degreesTitle')} {/* 🔁 language switch */}
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {t('about.degrees', { returnObjects: true }).map((degree, i) => (
                    <li key={i} className="flex items-center bg-white/60 p-3 rounded-xl hover:bg-white/80 transition-colors">
                      <CheckCircle2 className="h-5 w-5 text-teal-600 mr-3" />
                      <span className="text-slate-800 font-semibold text-sm">{degree}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a href="#locations" className="inline-flex items-center text-teal-800 font-bold hover:text-teal-600 transition-colors group">
                {t('about.visitChamber')} {/* 🔁 language switch */}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2 relative mt-8 lg:mt-0">
              <div className="aspect-4/5 rounded-3xl overflow-hidden shadow-2xl relative z-10 group max-w-sm mx-auto border-8 border-white/40">
                <img
                  className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-105"
                  src={doctorImg}
                  alt={t('identity.name')} /* 🔁 language switch */
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 bg-linear-to-t from-teal-900/30 to-transparent z-20 pointer-events-none"
                  aria-hidden="true"
                />
              </div>
              <div className="absolute top-1/2 -right-12 -translate-y-1/2 w-full h-[90%] bg-white/30 rounded-4xl -z-10 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
