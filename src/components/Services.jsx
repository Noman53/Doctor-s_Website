// src/components/Services.jsx
import React from 'react'
import { Layers, Activity, GitBranch, Box, Grid, Scissors } from 'lucide-react'
import { useTranslation } from 'react-i18next' // 🔁 language switch

const Services = () => {
  const { t } = useTranslation() // 🔁 language switch

  const items = t('services.items', { returnObjects: true }) // 🔁 language switch

  const services = [
    // TODO: Add or remove services here as needed
    { icon: <Layers />, title: items.gallbladder[0], desc: items.gallbladder[1] }, // 🔁 language switch
    { icon: <Activity />, title: items.liver[0], desc: items.liver[1] }, // 🔁 language switch
    { icon: <GitBranch />, title: items.bile[0], desc: items.bile[1] }, // 🔁 language switch
    { icon: <Box />, title: items.pancreas[0], desc: items.pancreas[1] }, // 🔁 language switch
    { icon: <Grid />, title: items.hernia[0], desc: items.hernia[1] }, // 🔁 language switch
    { icon: <Scissors />, title: items.appendix[0], desc: items.appendix[1] } // 🔁 language switch
  ]

  return (
    <section id="services" className="site-bg relative" aria-labelledby="services-heading">
      {/* teal blur gradient behind content — subtle, consistent with site palette */}
      <div className="absolute inset-0 bg-linear-to-br from-teal-50/60 via-teal-100/35 to-teal-200/20 backdrop-blur-md pointer-events-none z-0" />
      <div className="section scroll-mt-20 py-10 md:py-16 relative z-10" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-teal-700 font-bold uppercase tracking-wider text-sm bg-white/60 px-4 py-1 rounded-full border border-white/50">
              {t('services.badge')} {/* 🔁 language switch */}
            </span>
            <h2 id="services-heading" className="text-4xl font-extrabold text-slate-900 mt-4 mb-6">
              {t('services.title')} {/* 🔁 language switch */}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {t('services.desc')} {/* 🔁 language switch */}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((s, i) => (
              <div
                key={i}
                className="glass-card rounded-3xl p-10 cursor-pointer group border border-white/60 bg-white/30 backdrop-blur-sm shadow-sm transform translate-y-1 hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
              >
                <div className="w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors duration-500 shadow-sm" aria-hidden="true">
                  {React.cloneElement(s.icon, { className: "h-8 w-8 text-teal-600 group-hover:text-white transition-colors duration-300" })}
                </div>
                <h3 className="text-2xl font-bold text-gradient mb-4">{s.title}</h3> {/* 🔁 language switch */}
                <p className="text-slate-600 mb-6 leading-relaxed">{s.desc}</p> {/* 🔁 language switch */}
                {/* NOTE: "View Details" removed — keep card concise. Add CTA later if needed. */}
               </div>
             ))}
           </div>
         </div>
       </div>
     </section>
   )
 }

 export default Services
