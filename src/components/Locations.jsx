// src/components/Locations.jsx
// Purpose: Chamber / Locations section with side-by-side layout, updated details, and Get Directions button.

import React from 'react'
import { MapPin, Phone, Calendar, Clock } from 'lucide-react'

const Locations = () => {
  return (
    <section id="locations" className="py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
<div className="text-center max-w-3xl mx-auto mb-20">
  <div className="inline-block mb-4 px-5 py-1 rounded-full border border-teal-300 bg-linear-to-r from-white via-[#99d6ff] to-white text-teal-800 font-semibold text-sm tracking-wide shadow-sm">
    CHAMBER
  </div>
  <h2 className="text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
    Visit Dr. Muhsin
  </h2>
  <p className="text-lg text-slate-600 leading-relaxed">
    Book your consultation at <span className="text-teal-700 font-semibold">Surgiscope Hospital, Chittagong</span>.
  </p>
</div>


        {/* Chamber + Map Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          
          {/* Chamber Details */}
          <div className="glass-panel rounded-3xl p-10 shadow-xl flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
              <MapPin className="h-6 w-6 text-teal-600 mr-2" />
              Surgiscope Hospital, Chittagong
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Address: Unit 2, 445/466, Katalgonj, Chawkbazar, Chattogram – 4203
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center text-slate-700">
                <Clock className="h-5 w-5 text-teal-600 mr-3" />
                <span className="font-medium">Visiting Hour: 6pm to 9pm (Closed: Friday)</span>
              </div>
              <div className="flex items-center text-slate-700">
                <Phone className="h-5 w-5 text-teal-600 mr-3" />
                <span className="font-medium">Appointment: +8801711946412</span>
              </div>
            </div>

            {/* Get Directions Button */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Surgiscope+Hospital+Chittagong"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-teal-600 text-white font-semibold rounded-full shadow-md hover:bg-teal-700 transition cursor-pointer"
            >
              Get Directions
            </a>
          </div>

          {/* Map Card */}
          <div className="rounded-3xl overflow-hidden shadow-2xl relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_URL"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Surgiscope Hospital Location"
              className="h-[400px] w-full"
            ></iframe>
            {/* Gradient overlay for premium polish */}
            <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Locations
