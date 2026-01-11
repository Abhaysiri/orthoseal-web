"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Mail, Phone, Sprout } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
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
              <h2 className="text-2xl font-semibold text-foreground mb-6">Send us a message</h2>

              {submitted && (
                <div className="mb-6 p-4 bg-teal-light text-primary rounded-lg">
                  Thank you for your message. We&apos;ll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
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
                      REGISTERED OFFICE:
Gangothri 8-138/31, US Mallya Layout, Nr Bikarnakatte, Kulshekar, Dakshina Kannada,
                      <br />
                      Mangalore, Karnataka 575005 , India
                      <br />
                      
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
                    <p className = "mt-1 text-muted-foreground inline"> Dr. Sudhakar Jambagi</p>
                    <p className="mt-1 text-muted-foreground"></p>
                    

                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 h-64 bg-secondary rounded-xl flex items-center justify-center">
                <p className="text-muted-foreground">Map placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
