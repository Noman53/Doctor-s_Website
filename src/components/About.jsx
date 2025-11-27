import React from 'react'
import doctorImg from '../assets/Dr-Syed-Md-Muhsin.jpg'
import { GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-24 scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Content Side */}
          <div className="order-2 lg:order-1 mt-12 lg:mt-0">
            <span className="text-teal-700 font-bold uppercase tracking-wider text-xs bg-white/50 px-3 py-1 rounded-full border border-teal-100">
              Meet Your Surgeon
            </span>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6 mt-4">
              Dr. Syed Md. Muhsin
            </h2>
            
            {/* Title Card */}
            <div className="mb-8 p-5 bg-white/40 rounded-2xl border border-white/50 backdrop-blur-sm shadow-sm">
              <p className="text-lg text-teal-800 font-bold mb-1">Associate Professor of Surgery</p>
              <p className="text-slate-600 font-medium">Chittagong Medical College & Hospital</p>
            </div>
            
            {/* Bio */}
            <div className="prose prose-lg text-slate-600 mb-10 leading-relaxed">
              <p className="mb-4">
                Dr. Syed Md. Muhsin is a highly skilled General, Laparoscopic, and Hepatobiliary surgeon in Chattogram.
                He is dedicated to providing advanced surgical care for complex abdominal conditions.
              </p>
              <p>
                With a focus on Hepatobiliary surgery, he specializes in treating gallbladder diseases, liver tumors,
                bile duct disorders, and pancreatic diseases, alongside routine procedures like hernia repair and appendectomies.
              </p>
            </div>

            {/* Qualifications List */}
            <div className="glass-panel rounded-2xl p-8 mb-10 shadow-lg">
              <h4 className="text-sm font-extrabold text-teal-800 uppercase tracking-wide mb-6 flex items-center">
                <GraduationCap className="h-5 w-5 mr-2" /> Qualifications & Degrees
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'MBBS, MCPS, MS',
                  'FCPS (Hepatobiliary)',
                  'FRCS (Hon.), FACS',
                  'FMAS Fellowship',
                ].map((degree, i) => (
                  <div key={i} className="flex items-center bg-white/60 p-3 rounded-xl hover:bg-white/80 transition-colors">
                    <CheckCircle2 className="h-5 w-5 text-teal-600 mr-3" />
                    <span className="text-slate-800 font-semibold text-sm">{degree}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Chamber Link */}
            <a href="#locations" className="inline-flex items-center text-teal-800 font-bold hover:text-teal-600 transition-colors duration-300 group">
              Visit Chamber at Surgiscope Hospital
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Image Side */}
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-4/5 rounded-4xl overflow-hidden shadow-2xl relative z-10 group max-w-sm mx-auto border-8 border-white/40">
              <img
                className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-105"
                src={doctorImg}
                alt="Dr. Syed Md. Muhsin"
                onError={(e) => { e.target.src = 'https://placehold.co/400x500/e2e8f0/1e293b?text=Dr+Muhsin' }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-teal-900/40 to-transparent"></div>
            </div>
            {/* Background Pattern */}
            <div className="absolute top-1/2 -right-12 -translate-y-1/2 w-full h-[90%] bg-white/30 rounded-4xl -z-10 blur-2xl"></div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
