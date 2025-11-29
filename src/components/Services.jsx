// src/components/Services.jsx
import React from 'react'
import { Layers, Activity, GitBranch, Box, Grid, Scissors } from 'lucide-react'

const Services = () => {
  const services = [
    // TODO: Add or remove services here as needed
    { icon: <Layers />, title: 'Gallbladder', desc: 'Treatment for gallstones and inflammation using advanced laparoscopic techniques.' },
    { icon: <Activity />, title: 'Liver Tumors', desc: 'Surgical management of complex liver conditions including tumors and cysts.' },
    { icon: <GitBranch />, title: 'Bile Duct', desc: 'Expert surgical care for obstructions, stones, and strictures in the bile ducts.' },
    { icon: <Box />, title: 'Pancreas', desc: 'Specialized interventions for pancreatitis and pancreatic masses.' },
    { icon: <Grid />, title: 'Hernia Repair', desc: 'Advanced repair for inguinal, umbilical, and incisional hernias.' },
    { icon: <Scissors />, title: 'Appendicitis', desc: 'Urgent surgical removal of the appendix to prevent rupture and complications.' }, // added from screenshot
  ]

  return (
    <section id="services" className="site-bg relative" aria-labelledby="services-heading">
      {/* teal blur gradient behind content — subtle, consistent with site palette */}
      <div className="absolute inset-0 bg-linear-to-br from-teal-50/60 via-teal-100/35 to-teal-200/20 backdrop-blur-md pointer-events-none z-0" />
      <div className="section scroll-mt-20 py-10 md:py-16 relative z-10" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-teal-700 font-bold uppercase tracking-wider text-sm bg-white/60 px-4 py-1 rounded-full border border-white/50">
              Expertise
            </span>
            <h2 id="services-heading" className="text-4xl font-extrabold text-slate-900 mt-4 mb-6">
              Specialized Treatments
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Comprehensive surgical solutions for gastrointestinal and hepatobiliary conditions.
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
                <h3 className="text-2xl font-bold text-gradient mb-4">{s.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{s.desc}</p>
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
