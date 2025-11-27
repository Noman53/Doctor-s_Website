// src/components/Services.jsx
// Purpose: Refined Services section with hover lift, gradient titles, and consistent spacing.
// Notes:
// - Each card uses .glass-card utility.
// - Hover effects: lift + shadow.
// - Titles use text-gradient for emphasis.

import React from 'react'
import { Layers, Activity, GitBranch, Box, Grid } from 'lucide-react'

const Services = () => {
  return (
    <section id="services" className="py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-teal-700 font-bold uppercase tracking-wider text-sm bg-white/60 px-4 py-1 rounded-full border border-white/50">
            Expertise
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-4 mb-6">
            Specialized Treatments
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Comprehensive surgical solutions for gastrointestinal and hepatobiliary conditions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* Service Card Template */}
          {[
            { icon: <Layers className="h-8 w-8" />, title: 'Gallbladder', desc: 'Treatment for gallstones and inflammation using advanced laparoscopic techniques.' },
            { icon: <Activity className="h-8 w-8" />, title: 'Liver Tumors', desc: 'Surgical management of complex liver conditions including tumors and cysts.' },
            { icon: <GitBranch className="h-8 w-8" />, title: 'Bile Duct', desc: 'Expert surgical care for obstructions, stones, and strictures in the bile ducts.' },
            { icon: <Box className="h-8 w-8" />, title: 'Pancreas', desc: 'Specialized interventions for pancreatitis and pancreatic masses.' },
            { icon: <Grid className="h-8 w-8" />, title: 'Hernia Repair', desc: 'Laparoscopic and open repair for all types of hernias with durable mesh techniques.' },
          ].map((service, i) => (
            <div key={i} className="glass-card rounded-3xl p-10 cursor-pointer group border border-white/60 
                                    hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
              <div className="w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center mb-6 
                              group-hover:bg-teal-600 transition-colors duration-500 shadow-sm">
                {React.cloneElement(service.icon, { className: "text-teal-600 group-hover:text-white transition-colors duration-300" })}
              </div>
              <h3 className="text-2xl font-bold text-gradient mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{service.desc}</p>
              <span className="text-teal-700 text-sm font-bold flex items-center uppercase tracking-wide group-hover:underline">
                View Details <Activity className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Services
