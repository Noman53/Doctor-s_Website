// src/components/Booking.jsx

import React, { useState } from 'react'
import { Check, ArrowRight, Home, Moon } from 'lucide-react'

const Booking = () => {
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [form, setForm] = useState({ name: '', phone: '', reason: '' })
  const [monthOffset, setMonthOffset] = useState(0)

  // 🔧 Customize off-days (0 = Sunday, 6 = Saturday)
  const offDays = [5] // Friday

  // 🔧 Customize chamber time slots
  const timeSlots = ['06:00 PM','06:30 PM','07:00 PM','07:30 PM','08:00 PM','08:30 PM']

  const now = new Date()
  const displayDate = new Date(now.getFullYear(), now.getMonth() + monthOffset, 1)
  const daysInMonth = new Date(displayDate.getFullYear(), displayDate.getMonth() + 1, 0).getDate()

  const labelForStep = ['Date', 'Time', 'Details']

  const handleSubmit = (e) => {
    e.preventDefault()
    setStep(4)
  }

  return (
    <section id="booking" className="py-24 scroll-mt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-teal-700 font-bold uppercase tracking-wider text-xs bg-white/50 px-3 py-1 rounded-full">
            Appointments
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-4">Book Your Consultation</h2>
          <p className="text-slate-600 mt-4">Simple 3-step process. Our team will contact you to confirm.</p>
        </div>

        {/* Card */}
        <div className="glass-panel rounded-[2rem] shadow-2xl border border-white/60 overflow-hidden">
          {/* Stepper Header */}
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
            {/* Step 1: Date */}
            {step === 1 && (
              <>
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={() => setMonthOffset((m) => Math.max(0, m - 1))}
                    disabled={monthOffset === 0}
                    className={`px-4 py-2 rounded-lg font-bold transition ${monthOffset === 0 ? 'bg-slate-200 text-slate-500 cursor-not-allowed' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'}`}
                    style={{ cursor: monthOffset === 0 ? 'not-allowed' : 'pointer' }}
                    aria-label="Previous month"
                  >
                    ← Prev Month
                  </button>

                  <h3 className="text-xl font-bold text-slate-900 mb-0 text-center flex-1 mx-6">
                    {displayDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                  </h3>

                  <button
                    onClick={() => setMonthOffset((m) => m + 1)}
                    className="px-4 py-2 rounded-lg bg-teal-600 text-white font-bold hover:bg-teal-700 transition"
                    style={{ cursor: 'pointer' }}
                    aria-label="Next month"
                  >
                    Next Month →
                  </button>
                </div>

                {/* Week labels */}
                <div className="grid grid-cols-7 gap-2 text-center mb-2">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d) => (
                    <div key={d} className="text-xs font-bold text-slate-500 uppercase">{d}</div>
                  ))}
                </div>

                {/* Calendar grid */}
                <div className="grid grid-cols-7 gap-3 text-center">
                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1
                    const dateObj = new Date(displayDate.getFullYear(), displayDate.getMonth(), day)
                    const weekday = dateObj.getDay()
                    const disabled = offDays.includes(weekday)
                    const token = `${displayDate.getFullYear()}-${displayDate.getMonth()}-${day}`
                    const isActive = selectedDate === token

                    return (
                      <button
                        key={token}
                        disabled={disabled}
                        onClick={() => setSelectedDate(token)}
                        title={disabled ? 'Chamber closed' : `Select ${day}`}
                        className={`px-5 py-3 text-sm transition-all duration-200 font-semibold border-2 rounded-lg ${
                          disabled
                            ? 'bg-red-50 text-red-700 border-red-200 shadow-none cursor-not-allowed'
                            : isActive
                            ? 'bg-teal-600 text-white font-bold shadow-xl transform -translate-y-0.5'
                            : 'bg-white text-slate-800 border-slate-700/10 hover:border-teal-200 hover:shadow-sm'
                        }`}
                        style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
                      >
                        {day}
                      </button>
                    )
                  })}
                </div>

                <div className="flex justify-end pt-8">
                  <button
                    onClick={() => setStep(2)}
                    disabled={!selectedDate}
                    className={`px-8 py-4 rounded-full font-bold transition flex items-center ${
                      selectedDate
                        ? 'bg-teal-600 text-white hover:bg-teal-700 shadow-lg'
                        : 'bg-slate-300 text-slate-600 cursor-not-allowed'
                    }`}
                    style={{ cursor: selectedDate ? 'pointer' : 'not-allowed' }}
                  >
                    Next Step <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </>
            )}

            {/* Step 2: Time */}
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
                      style={{ cursor: 'pointer' }}
                    >
                      <Moon className="h-4 w-4 mr-2" /> {t}
                    </button>
                  ))}
                </div>

                <div className="flex justify-between pt-8">
                  <button
                    onClick={() => setStep(1)}
                    className="text-slate-500 hover:text-slate-800 font-bold px-6 py-3 rounded-full hover:bg-white/50 transition"
                    style={{ cursor: 'pointer' }}
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    disabled={!selectedTime}
                    className={`px-8 py-4 rounded-full font-bold transition flex items-center ${
                      selectedTime
                        ? 'bg-teal-600 text-white hover:bg-teal-700 shadow-lg'
                        : 'bg-slate-300 text-slate-600 cursor-not-allowed'
                    }`}
                    style={{ cursor: selectedTime ? 'pointer' : 'not-allowed' }}
                  >
                    Next Step <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </>
            )}

            {/* Step 3: Details */}
            {step === 3 && (
              <form onSubmit={(e) => { e.preventDefault(); setStep(4) }} className="space-y-6">
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
                    style={{ cursor: 'pointer' }}
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="bg-teal-600 text-white px-12 py-4 rounded-full hover:bg-teal-700 transition font-bold shadow-xl hover:shadow-teal-600/40"
                    style={{ cursor: 'pointer' }}
                  >
                    Confirm Booking
                  </button>
                </div>
              </form>
            )}

            {/* Step 4: Success */}
            {step === 4 && (
              <div className="text-center py-12">
                <div className="h-24 w-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                  <Check className="h-12 w-12 text-green-600" />
                </div>
                <h3 className="text-3xl font-extrabold text-slate-900 mb-4">Booking Confirmed!</h3>
                <p className="text-slate-600 text-lg max-w-md mx-auto mb-10 leading-relaxed">
                  Thank you. Your appointment request has been received. Our assistant will call you at
                  <span className="font-bold text-slate-800"> +880 1711-946412 </span>
                  for final confirmation.
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
                  style={{ cursor: 'pointer' }}
                >
                  <Home className="h-5 w-5 mr-2" /> Return to Home
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Booking
