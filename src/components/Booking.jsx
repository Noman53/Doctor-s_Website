import React, { useState, useRef } from 'react'
import { Check, ArrowRight, ChevronLeft, ChevronRight, Home, Moon } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { useTranslation } from 'react-i18next' // 🔁 language switch

const Booking = () => {
  const { t, i18n } = useTranslation() // 🔁 language switch
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)

  // Form data state
  const [form, setForm] = useState({ name: '', phone: '', reason: '', email: '', age: '' })
  // -----------------------------------------------------------------------

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [monthOffset, setMonthOffset] = useState(0)

  // NEW: EmailJS requires an actual form reference
  const formRef = useRef(null)

  // Customize off-days (0 = Sunday, 6 = Saturday)
  const offDays = [5] // Friday

  // Time slots
  const timeSlots = ['06:00 PM','06:30 PM','07:00 PM','07:30 PM','08:00 PM','08:30 PM']

  const now = new Date()
  const displayDate = new Date(now.getFullYear(), now.getMonth() + monthOffset, 1)
  const daysInMonth = new Date(displayDate.getFullYear(), displayDate.getMonth() + 1, 0).getDate()
  const firstWeekday = new Date(displayDate.getFullYear(), displayDate.getMonth(), 1).getDay() // grid offset

  const labelForStep = t('booking.steps', { returnObjects: true }) // 🔁 language switch

  const isValidBangladeshPhone = (phone) => {
    if (!phone) return false
    const bengaliDigits = '০১২৩৪৫৬৭৮৯'
    const normalizedDigits = phone.replace(/[০-৯]/g, (digit) => bengaliDigits.indexOf(digit))
    const cleaned = normalizedDigits.replace(/[\s()-]/g, '')
    return /^(?:\+?88)?01[0-9]{9}$/.test(cleaned)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isSubmitting) return

    // Validate BD phone number
    if (!isValidBangladeshPhone(form.phone)) {
      alert(t('booking.invalidPhone') || 'Please enter a valid Bangladeshi phone number (e.g. 01XXXXXXXXX).')
      return
    }

    setIsSubmitting(true)

    // FIX DATE: token is "YYYY-M-D" with month 1-based — convert to JS Date with (m-1)
    const [y, m, d] = (selectedDate || '').split('-').map(Number)
    const formattedDate = selectedDate
      ? new Date(y, m - 1, d).toLocaleDateString(i18n.language === 'bn' ? 'bn-BD' : 'en-US')
      : ''

    if (formRef.current) {
      formRef.current.appointment_date.value = formattedDate
      formRef.current.appointment_time.value = selectedTime || ''
      formRef.current.doctor.value = 'Dr. Syed Md. Muhsin'
      if (formRef.current.email) formRef.current.email.value = form.email || ''
      if (formRef.current.age) formRef.current.age.value = form.age || ''
    }

    try {
      await emailjs.sendForm(
        'service_53xthn6',
        'template_ziljfcj',
        formRef.current,
        '168fienQygeV1wIck'
      )

      setStep(4)
    } catch (err) {
      console.error('EmailJS error', err)
      alert(t('booking.error')) // 🔁 language switch
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
              {t('booking.badge')} {/* 🔁 language switch */}
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-4">{t('booking.title')}</h2> {/* 🔁 language switch */}
            <p className="text-slate-600 mt-4">{t('booking.desc')}</p> {/* 🔁 language switch */}
          </div>

          <div className="glass-panel rounded-4xl shadow-2xl border border-white/60 overflow-hidden">

            {/* Stepper */}
            <div className="bg-white/40 px-3 sm:px-8 py-6 border-b border-white/30 backdrop-blur-sm flex justify-center gap-4 sm:gap-8">
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
                    <span className="text-[10px] mt-2 font-bold uppercase tracking-wider text-slate-600">{label}</span> {/* 🔁 language switch */}
                  </div>
                )
              })}
            </div>

            {/* Body */}
            <div className="p-4 sm:p-8 lg:p-12 min-h-[420px]">

              {/* STEP 1 — DATE*/}
              {step === 1 && (
                <>
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <button
                      type="button"
                      aria-label={t('booking.prevMonth')}
                      onClick={() => {
                        setMonthOffset((m) => Math.max(0, m - 1))
                        setSelectedDate(null)
                      }}
                      disabled={monthOffset === 0}
                      className={`p-2 rounded-lg font-bold transition ${
                        monthOffset === 0 ? 'bg-slate-200 text-slate-500 cursor-not-allowed' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                    </button>

                    <h3 className="text-base sm:text-xl font-bold text-slate-900 mb-0 text-center flex-1 min-w-0">
                      {displayDate.toLocaleString(i18n.language === 'bn' ? 'bn-BD' : 'en-US', { month: 'long', year: 'numeric' })}
                    </h3>

                    <button
                      type="button"
                      aria-label={t('booking.nextMonth')}
                      onClick={() => {
                        setMonthOffset((m) => m + 1)
                        setSelectedDate(null)
                      }}
                      className="p-2 rounded-lg bg-teal-600 text-white font-bold hover:bg-teal-700 transition"
                    >
                      <ChevronRight className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Week labels */}
                  <div className="mx-auto w-full max-w-xl px-1 mb-1">
                    <div className="grid grid-cols-7 gap-1 sm:gap-2">
                    {t('booking.weekdays', { returnObjects: true }).map((d, i) => ( /* 🔁 language switch */
                      <div
                      key={i}
                      aria-label={d}
                      className="flex items-center justify-center text-[10px] sm:text-xs font-bold text-slate-800 uppercase h-8 tracking-wide">{d}</div>
                      ))}
                      </div>
                      </div>

                  {/* Calendar */}
                  <div className="mx-auto w-full max-w-xl p-1 rounded-3xl bg-linear-to-br from-teal-200/35 via-teal-100/25 to-white/20 shadow-sm">
                    <div className="rounded-2xl bg-white/40 backdrop-blur-md p-2 sm:p-4 border border-white/30">
                      <div className="grid grid-cols-7 gap-1 sm:gap-2 text-center">

                        {/* Offset empty cells */}
                        {Array.from({ length: firstWeekday }).map((_, i) => (
                          <div key={`empty-${i}`} />
                        ))}

                        {/* Actual days */}
                        {Array.from({ length: daysInMonth }).map((_, i) => {
                          const day = i + 1
                          const dateObj = new Date(displayDate.getFullYear(), displayDate.getMonth(), day)
                          const weekday = dateObj.getDay()

                          // Past date logic
                          const today = new Date()
                          today.setHours(0,0,0,0)
                          const isPast = dateObj < today

                          const disabled = offDays.includes(weekday) || isPast

                          // FIXED — Correct token format for EmailJS (+1 month)
                          const token = `${displayDate.getFullYear()}-${displayDate.getMonth() + 1}-${day}`
                          const isActive = selectedDate === token

                          return (
                            <button
                              key={token}
                              type="button"
                              disabled={disabled}
                              onClick={() => !disabled && setSelectedDate(token)}
                              aria-label={dateObj.toLocaleDateString(i18n.language === 'bn' ? 'bn-BD' : 'en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                              aria-pressed={isActive}
                              className={`w-full aspect-square min-w-0 px-0 py-1 text-xs sm:text-sm transition-transform duration-300 font-semibold border-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600
                                ${
                                  offDays.includes(weekday)
                                    ? 'bg-red-50 text-red-700 border-red-200 cursor-not-allowed opacity-60'
                                  : isPast
                                    ? 'bg-white/70 text-slate-800 border border-white/40 cursor-not-allowed'
                                  : isActive
                                    ? 'bg-teal-600 text-white font-bold shadow-2xl transform -translate-y-1 scale-105'
                                  : 'bg-white/70 text-slate-800 border border-white/40 shadow-sm hover:-translate-y-3 hover:scale-105 hover:shadow-2xl'
                                }
                              `}
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
                      type="button"
                      onClick={() => setStep(2)}
                      disabled={!selectedDate}
                      className={`px-8 py-4 rounded-full font-bold flex items-center transition ${
                        selectedDate
                          ? 'bg-teal-600 text-white hover:bg-teal-700 shadow-lg'
                          : 'bg-slate-300 text-slate-600 cursor-not-allowed'
                      }`}
                    >
                      {t('booking.next')} <ArrowRight className="ml-2 h-4 w-4" /> {/* 🔁 language switch */}
                    </button>
                  </div>
                </>
              )}

              {/* STEP 2 — TIME */}
              {step === 2 && (
                <>
                  <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">{t('booking.timeTitle')}</h3> {/* 🔁 language switch */}

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {timeSlots.map((tItem) => (
                      <button
                        type="button"
                        key={tItem}
                        onClick={() => setSelectedTime(tItem)}
                        aria-pressed={selectedTime === tItem}
                        className={`p-4 rounded-xl text-sm font-bold transition flex items-center justify-center ${
                          selectedTime === tItem
                            ? 'bg-teal-600 text-white shadow-lg'
                            : 'bg-white text-slate-800 hover:bg-teal-50 hover:text-teal-600'
                        }`}
                      >
                        <Moon className="h-4 w-4 mr-2" /> {tItem}
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-between pt-8">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-slate-500 hover:text-slate-800 font-bold px-6 py-3 rounded-full hover:bg-white/50 transition"
                    >
                      {t('booking.back')} {/* 🔁 language switch */}
                    </button>

                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      disabled={!selectedTime}
                      className={`px-8 py-4 rounded-full font-bold flex items-center transition ${
                        selectedTime
                          ? 'bg-teal-600 text-white hover:bg-teal-700 shadow-lg'
                          : 'bg-slate-300 text-slate-600 cursor-not-allowed'
                      }`}
                    >
                      {t('booking.next')} <ArrowRight className="ml-2 h-4 w-4" /> {/* 🔁 language switch */}
                    </button>
                  </div>
                </>
              )}

              {/* STEP 3 — DETAILS */}
              {step === 3 && (
                // Important: formRef added for EmailJS sendForm()
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">{t('booking.detailsTitle')}</h3> {/* 🔁 language switch */}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <input
                      type="text"
                      name="name" // REQUIRED for EmailJS
                      required
                      aria-label={t('booking.fullName')}
                      placeholder={t('booking.fullName')} /* 🔁 language switch */
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full p-4 rounded-2xl border border-white/50 bg-white focus:ring-2 focus:ring-teal-500"
                    />

                    <input
                      type="tel"
                      name="phone" // REQUIRED for EmailJS
                      required
                      aria-label={t('booking.phone')}
                      placeholder={t('booking.phone')}/* 🔁 language switch */
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full p-4 rounded-2xl border border-white/50 bg-white focus:ring-2 focus:ring-teal-500"
                    />
                  </div>

                  <textarea
                    rows={3}
                    name="reason" // REQUIRED for EmailJS
                    required
                    aria-label={t('booking.reason')}
                    placeholder={t('booking.reason')} /* 🔁 language switch */
                    value={form.reason}
                    onChange={(e) => setForm({ ...form, reason: e.target.value })}
                    className="w-full p-4 rounded-2xl border border-white/50 bg-white focus:ring-2 focus:ring-teal-500"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <input
                      type="email"
                      name="email"
                      aria-label={t('booking.email')}
                      placeholder={t('booking.email') || 'Email (optional)'} /* 🔁 language switch */
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full p-4 rounded-2xl border border-white/50 bg-white focus:ring-2 focus:ring-teal-500"
                    />

                    <input
                      type="number"
                      name="age"
                      min="0"
                      max="120"
                      aria-label={t('booking.age')}
                      placeholder={t('booking.age') || 'Age'} /* 🔁 language switch */
                      value={form.age}
                      onChange={(e) => setForm({ ...form, age: e.target.value })}
                      className="w-full p-4 rounded-2xl border border-white/50 bg-white focus:ring-2 focus:ring-teal-500"
                    />
                  </div>

                  {/* Hidden fields required by EmailJS sendForm() */}
                  <input type="hidden" name="appointment_date" />
                  <input type="hidden" name="appointment_time" />
                  <input type="hidden" name="doctor" />

                  <div className="flex justify-between pt-6">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="text-slate-500 hover:text-slate-800 font-bold px-6 py-3 rounded-full hover:bg-white/50 transition"
                    >
                      {t('booking.back')} {/* 🔁 language switch */}
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`bg-teal-600 text-white px-12 py-4 rounded-full hover:bg-teal-700 transition font-bold shadow-xl hover:shadow-teal-600/40 ${
                        isSubmitting ? 'opacity-70 cursor-wait' : ''
                      }`}
                    >
                      {isSubmitting ? t('booking.sending') : t('booking.confirm')} {/* 🔁 language switch */}
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
                  <h3 className="text-3xl font-extrabold text-slate-900 mb-4">{t('booking.successTitle')}</h3> {/* 🔁 language switch */}

                  <p className="text-slate-600 text-lg max-w-md mx-auto mb-10 leading-relaxed">
                    {t('booking.successDesc')}{' '}
                    <span className="font-bold text-slate-800">+880 1711-946412</span>
                  </p>

                  <a
                    href="#home"
                    onClick={() => {
                      setStep(1)
                      setSelectedDate(null)
                      setSelectedTime(null)
                      setForm({ name: '', phone: '', reason: '', email: '', age: '' })
                      setMonthOffset(0)
                    }}
                    className="inline-flex items-center text-teal-700 font-bold hover:text-teal-900 hover:underline transition"
                  >
                    <Home className="h-5 w-5 mr-2" /> {t('booking.returnHome')} {/* 🔁 language switch */}
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