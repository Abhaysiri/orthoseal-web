"use client"

import type React from "react"
import { useState, useRef } from "react"
import { MapPin, Mail, Phone, Sprout , Dot } from "lucide-react"
import emailjs from "@emailjs/browser"

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  
  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
     console.error("Missing Environment Variables!")
     return
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(false)

    if (form.current) {
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then(
          (result) => {
            setLoading(false)
            setSubmitted(true)
            form.current?.reset() // Clear the form
            // Reset success message after 5 seconds
            setTimeout(() => setSubmitted(false), 5000)
          },
          (error) => {
            setLoading(false)
            setError(true)
            console.error("EmailJS Error:", error.text)
          }
        )
    }
  }

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">Contact Us</h1>
          <div className="mt-2 w-20 h-1 bg-primary rounded-full" />
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">Interested In Becoming a Distributor?</h2>

              {submitted && (
                <div className="mb-6 p-4 bg-teal-50 text-teal-800 border border-teal-200 rounded-lg">
                  Thank you for your message. We have sent it to our team and will get back to you soon.
                </div>
              )}
              
              {error && (
                <div className="mb-6 p-4 bg-red-50 text-red-800 border border-red-200 rounded-lg">
                  Something went wrong. Please try again later or email us directly.
                </div>
              )}

              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name" // IMPORTANT: Matches EmailJS template variable
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email" // IMPORTANT: Matches EmailJS template variable
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="mb-4 flex items-start gap-2 p-3 bg-blue-50 text-blue-700 text-sm rounded-lg border border-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                    <circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="16" y2="12"/><line x1="12" x2="12.01" y1="8" y2="8"/>
                  </svg>
                  <p>
                    <span>
                      <Dot className="inline"></Dot> Use Send Message option only if you are Interested In becoming a Distributor
                    </span>. <br />
                    <span>
                      <Dot className="inline"></Dot>To help us route your inquiry to orthoseal@gmail.com, please include as much <br />detail as possible (minimum 25 characters).
                    </span> <br />

                    <span>
                      <Dot className="inline"></Dot> For any other queries send the email personally , Or Contact the number given.
                    </span>
                  </p>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message" // IMPORTANT: Matches EmailJS template variable
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Contact Information (Unchanged) */}
            <div className="lg:pl-8">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Get in touch</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal-light rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Address</h3>
                    <p className="mt-1 text-muted-foreground">
                      REGISTERED OFFICE: Gangothri 8-138/31, US Mallya Layout, Nr Bikarnakatte, Kulshekar, Dakshina Kannada,
                      <br />
                      Mangalore, Karnataka 575005 , India
                    </p>
                    <p className="mt-1 text-muted-foreground font-semibold">CIN: U32506KA2025PTC213218</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal-light rounded-lg flex items-center justify-center shrink-0">
                    <Sprout className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Incubated at:</h3>
                    <p className="mt-1 text-muted-foreground">Science & Technology Entrepreneur’s Park (STEP), National Institute of Technology Karnataka (NITK), Surathkal, Srinivasnagar PO, Mangaluru-575025, Dakshina Kannada, Karnataka, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal-light rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Email</h3>
                    <p className="mt-1 text-muted-foreground">orthoseal@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal-light rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Phone</h3>
                    <p className="mt-1 text-muted-foreground font-extrabold inline">+91 94494 22408 </p>
                    <p className="mt-1 text-muted-foreground inline"> Dr. Sudhakar Jambagi</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 h-64 bg-secondary rounded-xl flex-row items-center justify-center overflow-hidden">
                <a href="https://maps.app.goo.gl/PqSj5Qg27bota2226" target="_blank" rel="noreferrer">
                  <img
                    src={`https://static-maps.yandex.ru/1.x/?ll=74.79159,13.01538&z=19&l=sat&size=600,320`}
                    alt="Map Preview"
                    className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-500"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}