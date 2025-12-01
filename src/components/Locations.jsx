// src/components/Locations.jsx
// Purpose: Chamber / Locations section with updated Google Maps embed, responsive layout, and SEO-friendly markup.

import React from 'react'
import { MapPin, Phone, Clock } from 'lucide-react'
import { useTranslation } from 'react-i18next' // 🔁 language switch

const Locations = () => {
  const { t } = useTranslation() // 🔁 language switch

  return (
    <section className="site-bg relative">
      {/* overlay stays behind content so it doesn't blur text */}
      <div className="absolute inset-0 section-overlay-light pointer-events-none z-0" />
      <div id="locations" className="section py-10 md:py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block mb-4 px-5 py-1 rounded-full border border-teal-300 bg-white/60 text-teal-800 font-semibold text-sm tracking-wide shadow-sm">
              {t('locations.badge')} {/* 🔁 language switch */}
            </span>
            <h2
              id="locations-heading"
              className="text-4xl font-extrabold text-slate-900 mb-4 leading-tight"
            >
              {t('locations.title')} {/* 🔁 language switch */}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {t('locations.descLead')}{" "}
              <span className="text-teal-700 font-semibold">
                {t('locations.descTail')} {/* 🔁 language switch */}
              </span>.
            </p>
          </div>

          {/* Chamber + Map Side-by-Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            
            {/* Chamber Details */}
            <div className="glass-panel rounded-3xl p-10 shadow-xl flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                <MapPin className="h-6 w-6 text-teal-600 mr-2" aria-hidden="true" />
                {t('locations.hospital')} {/* 🔁 language switch */}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {t('locations.address')} {/* 🔁 language switch */}
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center text-slate-700">
                  <Clock className="h-5 w-5 text-teal-600 mr-3" aria-hidden="true" />
                  <span className="font-medium">
                    {t('locations.hours')} {/* 🔁 language switch */}
                  </span>
                </div>
                <div className="flex items-center text-slate-700">
                  <Phone className="h-5 w-5 text-teal-600 mr-3" aria-hidden="true" />
                  <span className="font-medium">{t('locations.phone')}</span> {/* 🔁 language switch */}
                </div>
              </div>

              {/* Get Directions Button */}
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Surgiscope+Hospital+Chattogram"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-teal-600 text-white font-semibold rounded-full shadow-md hover:bg-teal-700 transition"
              >
                {t('locations.cta')} {/* 🔁 language switch */}
              </a>
            </div>

            {/* Map Embed */}
            <div className="rounded-3xl overflow-hidden shadow-2xl relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.835018308532!2d91.83508657475107!3d22.359857540735007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad277b48adf6df%3A0xbcc644154696ff7!2sSurgiscope%20Hospital%20Limited%20-%20Unit%202!5e0!3m2!1sen!2sbd!4v1764390843559!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Surgiscope Hospital Location"
                className="h-[400px] w-full"
              ></iframe>
              <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Locations