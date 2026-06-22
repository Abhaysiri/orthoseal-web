import React from "react"
import { ShieldCheck, Target, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F1F5F9] font-sans selection:bg-[#0D9488] selection:text-white">
      
      {/* Hero Section with Mesh Accent */}
      <section className="relative py-20 md:py-28 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
            
            {/* Left: Brutalist Typography */}
            <div className="max-w-3xl">
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-teal-600 mb-8 block">
                01 // Corporate Overview
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                Engineering the next generation of synovial joint implants.
              </h1>
            </div>

            {/* Right: Authority Plinth */}
            <div className="bg-white rounded-2xl border-2 border-slate-200/80 shadow-[0_10px_35px_-10px_rgba(15,23,42,0.08)] flex items-center divide-x-2 divide-slate-100 overflow-hidden shrink-0">
              <div className="px-8 py-5">
                <span className="text-sm font-extrabold uppercase tracking-widest text-slate-500 block mb-1">Incubated at</span>
                <p className="text-base font-extrabold uppercase tracking-wider text-slate-900">NITK STEP</p>
              </div>
              <div className="px-8 py-5">
                <span className="text-sm font-extrabold uppercase tracking-widest text-slate-500 block mb-1">Aligned with</span>
                <p className="text-base font-extrabold uppercase tracking-wider text-slate-900">Make in India</p>
              </div>
              <div className="px-8 py-5">
                <span className="text-sm font-extrabold uppercase tracking-widest text-slate-500 block mb-1">Recognized by</span>
                <p className="text-base font-extrabold uppercase tracking-wider text-slate-900">DPIIT</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 md:py-28 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          
          {/* The Master Alabaster Card */}
          <div className="bg-white border-2 border-slate-200/80 border-l-[8px] border-l-teal-600 shadow-[0_10px_40px_-10px_rgba(15,23,42,0.05)] p-12 md:p-20 relative overflow-hidden mb-28">
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-slate-500 mb-10 block">
              The Genesis
            </span>
            <div className="max-w-4xl space-y-10">
              <p className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed">
                ORTHOSEAL is a science-driven deep med-tech company founded by two scientists from NITK and incubated at NITK-STEP. We focus on the design, manufacturing, and commercialization of premium next-generation orthopedic implants, leveraging advanced surface engineering to deliver superior clinical performance and long-term patient safety.
              </p>
              <p className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed">
                Built on deep expertise in materials science, biomedical engineering, and surface modification, ORTHOSEAL develops novel, patented, durable, and antimicrobial coating technologies that enhance implant longevity, promote biological integration, and reduce infection risks. Aligned with the Make in India and Swastha Bharat initiatives, we are committed to strengthening indigenous medical device innovation while improving patient mobility and quality of life.
              </p>
            </div>
          </div>

          {/* The Mission Architecture */}
          <div className="mb-16">
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-teal-600 mb-6 block">
              Strategic Pillars
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
              The Mission Architecture
            </h2>
          </div>

          {/* 3 Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            
            {/* Card 1 */}
            <div className="bg-white border-2 border-slate-200/80 p-12 flex flex-col items-start transition-colors duration-500 hover:bg-gradient-to-b hover:from-white hover:to-teal-50/50 hover:border-teal-600/40 shadow-[0_4px_20px_-5px_rgba(15,23,42,0.03)]">
              <div className="w-16 h-16 rounded-2xl bg-slate-100 text-slate-800 flex items-center justify-center mb-10">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 mb-6">Relentless Innovation</h3>
              <p className="text-slate-700 text-base font-extrabold leading-relaxed">
                Developing advanced orthopedic implants by integrating bioactivity, antimicrobial technology, and sustainable materials.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border-2 border-slate-200/80 p-12 flex flex-col items-start transition-colors duration-500 hover:bg-gradient-to-b hover:from-white hover:to-teal-50/50 hover:border-teal-600/40 shadow-[0_4px_20px_-5px_rgba(15,23,42,0.03)]">
              <div className="w-16 h-16 rounded-2xl bg-slate-100 text-slate-800 flex items-center justify-center mb-10">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 mb-6">Atmanirbhar Bharat</h3>
              <p className="text-slate-700 text-base font-extrabold leading-relaxed">
                Empowering self-reliance through 100% Make in India manufacturing to build a robust domestic healthcare ecosystem.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border-2 border-slate-200/80 p-12 flex flex-col items-start transition-colors duration-500 hover:bg-gradient-to-b hover:from-white hover:to-teal-50/50 hover:border-teal-600/40 shadow-[0_4px_20px_-5px_rgba(15,23,42,0.03)]">
              <div className="w-16 h-16 rounded-2xl bg-slate-100 text-slate-800 flex items-center justify-center mb-10">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 mb-6">Global Excellence</h3>
              <p className="text-slate-700 text-base font-extrabold leading-relaxed">
                Competing globally by adhering to the highest quality and ethical standards while ensuring affordability for all.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  )
}