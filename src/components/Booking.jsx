// src/components/Booking.jsx

import React, { useState } from 'react'
import { Check, ArrowRight, Home, Moon } from 'lucide-react'
import emailjs from '@emailjs/browser' // npm i @emailjs/browser

const Booking = ({ thankYouMessage = 'Thank you. Your appointment request has been received. Our assistant will call you for final confirmation.' }) => {
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [form, setForm] = useState({ name: '', phone: '', reason: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [monthOffset, setMonthOffset] = useState(0)

  // 🔧 Customize off-days (0 = Sunday, 6 = Saturday)
  const offDays = [5] // Friday

  // 🔧 Time slots
  const timeSlots = ['06:00 PM','06:30 PM','07:00 PM','07:30 PM','08:00 PM','08:30 PM']

  const now = new Date()
  const displayDate = new Date(now.getFullYear(), now.getMonth() + monthOffset, 1)
  const daysInMonth = new Date(displayDate.getFullYear(), displayDate.getMonth() + 1, 0).getDate()

  const labelForStep = ['Date', 'Time', 'Details']

  // EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isSubmitting) return
    setIsSubmitting(true)

    const [y, m, d] = (selectedDate || '').split('-').map(Number)
    const formattedDate = selectedDate ? new Date(y, m, d).toLocaleDateString() : ''

    const templateParams = {
      patient_name: form.name,
      patient_phone: form.phone,
      appointment_date: formattedDate,
      appointment_time: selectedTime || '',
      reason: form.reason,
      doctor: 'Dr. Syed Md. Muhsin',
    }

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
      )
      setStep(4)
    } catch (err) {
      console.error('EmailJS error', err)
      alert('There was an issue sending confirmation email. Please try again or call +880 1711-946412.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="site-bg relative">
      <div className="absolute inset-0 section-overlay-light pointer-events-none z-0" />
      <div id="booking" className="section py-10 md:py-16 relative z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-teal-700 font-bold uppercase tracking-wider text-xs bg-white/50 px-3 py-1 rounded-full">
              Appointments
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-4">Book Your Consultation</h2>
            <p className="text-slate-600 mt-4">Simple 3-step process. Team will contact you to confirm.</p>
          </div>

          <div className="glass-panel rounded-4xl shadow-2xl border border-white/60 overflow-hidden">

            {/* Stepper */}
            <div className="bg-white/40 px-8 py-6 border-b border-white/30 backdrop-blur-sm flex justify-center gap-8">
              {labelForStep.map((label, idx) => {
                const n = idx + 1
                return (
                  <div key={n} className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 shadow-sm ${
                      step === n ? 'bg-teal-600 text-white ring-4 ring-white' :
                      step > n ? 'bg-teal-100 text-teal-700 border-teal-200' :
                      'bg-white text-gray-400 border border-gray-200'
                    }`}>
                      {step > n ? <Check className="h-4 w-4" /> : n}
                    </div>
                    <span className="text-[10px] mt-2 font-bold uppercase tracking-wider text-slate-600">{label}</span>
                  </div>
                )
              })}
            </div>

            {/* Body */}
            <div className="p-8 sm:p-12 min-h-[420px]">

              {/* STEP 1 — DATE */}
              {step === 1 && (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <button
                      onClick={() => setMonthOffset((m) => Math.max(0, m - 1))}
                      disabled={monthOffset === 0}
                      className={`px-4 py-2 rounded-lg font-bold transition ${
                        monthOffset === 0 ? 'bg-slate-200 text-slate-500 cursor-not-allowed' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      ← Prev Month
                    </button>

                    <h3 className="text-xl font-bold text-slate-900 mb-0 text-center flex-1 mx-6">
                      {displayDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                    </h3>

                    <button
                      onClick={() => setMonthOffset((m) => m + 1)}
                      className="px-4 py-2 rounded-lg bg-teal-600 text-white font-bold hover:bg-teal-700 transition"
                    >
                      Next Month →
                    </button>
                  </div>

                  {/* Week labels */}
                  <div className="grid grid-cols-7 gap-2 text-center mb-2">
                    {['S','M','T','W','T','F','S'].map((d) => (
                      <div key={d} className="text-xs font-bold text-slate-500 uppercase">{d}</div>
                    ))}
                  </div>

                  {/* Calendar */}
                  <div className="mx-auto w-full max-w-xl p-1 rounded-3xl bg-linear-to-br from-teal-200/35 via-teal-100/25 to-white/20 shadow-sm">
                    <div className="rounded-2xl bg-white/40 backdrop-blur-md p-3 md:p-4 border border-white/30">

                      <div className="grid grid-cols-7 gap-3 text-center">

                        {Array.from({ length: daysInMonth }).map((_, i) => {
                          const day = i + 1
                          const dateObj = new Date(displayDate.getFullYear(), displayDate.getMonth(), day)
                          const weekday = dateObj.getDay()

                          // PAST DATE LOGIC — NO COLOR CHANGE, ONLY DISABLE
                          const today = new Date()
                          today.setHours(0,0,0,0)
                          const isPast = dateObj < today

                          const disabled = offDays.includes(weekday) || isPast

                          const token = `${displayDate.getFullYear()}-${displayDate.getMonth()}-${day}`
                          const isActive = selectedDate === token

                          return (
                            <button
                              key={token}
                              disabled={disabled}
                              onClick={() => !disabled && setSelectedDate(token)}
                              title={
                                offDays.includes(weekday) ? 'Chamber closed' :
                                isPast ? 'Past date' :
                                `Select ${day}`
                              }
                              className={`px-5 py-3 text-sm transition-transform duration-300 font-semibold border-2 rounded-lg
                                ${
                                  // Off-day (red)
                                  offDays.includes(weekday)
                                    ? 'bg-red-50 text-red-700 border-red-200 cursor-not-allowed opacity-60'

                                  // Past date — LOOK NORMAL but disabled
                                  : isPast
                                    ? 'bg-white/70 text-slate-800 border border-white/40 cursor-not-allowed'
                                
                                  // Selected
                                  : isActive
                                    ? 'bg-teal-600 text-white font-bold shadow-2xl transform -translate-y-1 scale-105'

                                  // Normal available date
                                  : 'bg-white/70 text-slate-800 border border-white/40 shadow-sm hover:-translate-y-3 hover:scale-105 hover:shadow-2xl'
                                }
                              `}
                              style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
                            >
                              {day}
                            </button>
                          )
                        })}

                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end pt-8">
                    <button
                      onClick={() => setStep(2)}
                      disabled={!selectedDate}
                      className={`px-8 py-4 rounded-full font-bold flex items-center transition ${
                        selectedDate
                          ? 'bg-teal-600 text-white hover:bg-teal-700 shadow-lg'
                          : 'bg-slate-300 text-slate-600 cursor-not-allowed'
                      }`}
                    >
                      Next Step <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </>
              )}

              {/* STEP 2 — TIME */}
              {step === 2 && (
                <>
                  <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Select Time Slot</h3>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {timeSlots.map((t) => (
                      <button
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        className={`p-4 rounded-xl text-sm font-bold transition flex items-center justify-center ${
                          selectedTime === t
                            ? 'bg-teal-600 text-white shadow-lg'
                            : 'bg-white text-slate-800 hover:bg-teal-50 hover:text-teal-600'
                        }`}
                      >
                        <Moon className="h-4 w-4 mr-2" /> {t}
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-between pt-8">
                    <button
                      onClick={() => setStep(1)}
                      className="text-slate-500 hover:text-slate-800 font-bold px-6 py-3 rounded-full hover:bg-white/50 transition"
                    >
                      Back
                    </button>

                    <button
                      onClick={() => setStep(3)}
                      disabled={!selectedTime}
                      className={`px-8 py-4 rounded-full font-bold flex items-center transition ${
                        selectedTime
                          ? 'bg-teal-600 text-white hover:bg-teal-700 shadow-lg'
                          : 'bg-slate-300 text-slate-600 cursor-not-allowed'
                      }`}
                    >
                      Next Step <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </>
              )}

              {/* STEP 3 — DETAILS */}
              {step === 3 && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Patient Details</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full p-4 rounded-2xl border border-white/50 bg-white focus:ring-2 focus:ring-teal-500"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full p-4 rounded-2xl border border-white/50 bg-white focus:ring-2 focus:ring-teal-500"
                    />
                  </div>

                  <textarea
                    rows={3}
                    required
                    placeholder="Reason for Visit"
                    value={form.reason}
                    onChange={(e) => setForm({ ...form, reason: e.target.value })}
                    className="w-full p-4 rounded-2xl border border-white/50 bg-white focus:ring-2 focus:ring-teal-500"
                  />

                  <div className="flex justify-between pt-6">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="text-slate-500 hover:text-slate-800 font-bold px-6 py-3 rounded-full hover:bg-white/50 transition"
                    >
                      Back
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`bg-teal-600 text-white px-12 py-4 rounded-full hover:bg-teal-700 transition font-bold shadow-xl hover:shadow-teal-600/40 ${
                        isSubmitting ? 'opacity-70 cursor-wait' : ''
                      }`}
                    >
                      {isSubmitting ? 'Sending...' : 'Confirm Booking'}
                    </button>
                  </div>
                </form>
              )}

              {/* STEP 4 — SUCCESS */}
              {step === 4 && (
                <div className="text-center py-12">
                  <div className="h-24 w-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                    <Check className="h-12 w-12 text-green-600" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-slate-900 mb-4">Booking Confirmed!</h3>

                  <p className="text-slate-600 text-lg max-w-md mx-auto mb-10 leading-relaxed">
                    {thankYouMessage}{' '}
                    <span className="font-bold text-slate-800">+880 1711-946412</span>
                    {' '}for final confirmation.
                  </p>

                  <a
                    href="#home"
                    onClick={() => {
                      setStep(1)
                      setSelectedDate(null)
                      setSelectedTime(null)
                      setForm({ name: '', phone: '', reason: '' })
                      setMonthOffset(0)
                    }}
                    className="inline-flex items-center text-teal-700 font-bold hover:text-teal-900 hover:underline transition"
                  >
                    <Home className="h-5 w-5 mr-2" /> Return to Home
                  </a>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Booking
