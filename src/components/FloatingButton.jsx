// src/components/FloatingButton.jsx
// Purpose: Minimal floating communication button with click-to-expand and smooth transitions.

import React, { useEffect, useRef, useState } from 'react'
import { Phone, MessageCircle, MessageSquare } from 'lucide-react'

const FloatingButton = () => {
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed bottom-6 right-6 z-50"
      aria-live="polite"
    >
      {/* Expanded actions */}
      <div
        className={`flex flex-col items-end gap-2 mb-3 transition-all duration-300 ${
          open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
        aria-hidden={!open}
      >
        <a
          href="tel:+880XXXXXXXXXX"
          className="bg-teal-600 text-white p-3 rounded-full shadow-md hover:bg-teal-700 transition transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer"
        >
          <Phone className="h-5 w-5" />
        </a>
        <a
          href="https://wa.me/880XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 rounded-full shadow-md hover:bg-green-600 transition transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer"
        >
          <MessageCircle className="h-5 w-5" />
        </a>
      </div>

      {/* Main communication button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={`flex items-center justify-center p-4 rounded-full shadow-xl transition focus:outline-none focus:ring-2 cursor-pointer
          ${open ? 'bg-teal-700 text-white' : 'bg-teal-600 text-white hover:bg-teal-700'}`}
      >
        <MessageSquare className="h-5 w-5" />
      </button>
    </div>
  )
}

export default FloatingButton
