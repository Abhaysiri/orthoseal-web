import React from "react"
import { Dna, Flag, Microscope, TestTube } from "lucide-react"

export default function InnovationPage() {
  return (
    <div className="min-h-screen bg-[#F1F5F9] font-sans selection:bg-[#0D9488] selection:text-white">
      
      {/* Header Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-teal-600 mb-8 block">
              03 // The Laboratory
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Advanced surface engineering for high-performance mobility.
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative z-10 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Scientific Abstract (Core Innovation) */}
            <div className="lg:col-span-7">
              <div className="bg-white border-2 border-slate-200/80 shadow-[0_10px_40px_-10px_rgba(15,23,42,0.05)] overflow-hidden">
                {/* Abstract Top Bar */}
                <div className="bg-slate-900 text-white text-sm tracking-widest px-8 py-4 uppercase font-mono flex items-center justify-between">
                  <span className="font-bold">Patented Specification // 01</span>
                  <span className="w-3 h-3 rounded-full bg-teal-500 animate-pulse" />
                </div>
                
                {/* Abstract Body */}
                <div className="p-12 md:p-16 space-y-8">
                  <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
                    Hydroxyapatite-Based Composite Coating
                  </h3>
                  <p className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed">
                    At OrthoSeal, innovation is driven by a focus on surface engineering and coating technologies that enhance the performance of synovial joint implants. Our patented composite formulation is developed to improve implant–bone interaction, surface durability, and biological compatibility.
                  </p>
                  <p className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed">
                    This coating-led approach addresses key challenges such as fixation stability, wear behavior, and long-term implant performance within the joint environment. By advancing performance at the surface level, OrthoSeal goes beyond conventional design-only solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Render Image Breakout */}
            <div className="lg:col-span-5 relative mt-16 lg:mt-0">
              <div className="bg-white border-2 border-slate-200/80 h-full min-h-[450px] flex items-center justify-center relative p-8 group shadow-[0_10px_40px_-10px_rgba(15,23,42,0.05)]">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-80" />
                
                {/* Image Z-Index Breakout Trick */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <img
                    src="/innovation.jpeg"
                    alt="Coating Technology Visualization"
                    className="w-full h-auto object-cover max-h-[380px] scale-105 group-hover:scale-115 transition-transform duration-700 ease-out filter drop-shadow-[0px_24px_20px_rgba(15,23,42,0.16)] -mt-16 -mb-16"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Innovation Pillars */}
          <div className="mt-28 md:mt-40">
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-teal-600 mb-8 block">
              Core Methodologies
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-16">
              The 4 Pillars of Precision
            </h2>

            {/* 2x2 Asymmetric Tailwind Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              
              {/* Pillar 1 */}
              <div className="group bg-white border-2 border-slate-200/80 p-12 shadow-[0_4px_20px_-5px_rgba(15,23,42,0.03)] hover:border-teal-600/40 transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-800 mb-8 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                  <Microscope className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 mb-4">Scientist-Led Innovation</h3>
                <p className="text-slate-700 text-base font-extrabold leading-relaxed">
                  Founded by NITK scientists, combining deep materials research with clinical insight to solve real orthopedic challenges.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="group bg-white border-2 border-slate-200/80 p-12 shadow-[0_4px_20px_-5px_rgba(15,23,42,0.03)] hover:border-teal-600/40 transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-800 mb-8 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                  <Dna className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 mb-4">Patented Smart Coatings</h3>
                <p className="text-slate-700 text-base font-extrabold leading-relaxed">
                  Proprietary, durable, bioactive, and antimicrobial coating technology designed to enhance implant longevity and safety.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="group bg-white border-2 border-slate-200/80 p-12 shadow-[0_4px_20px_-5px_rgba(15,23,42,0.03)] hover:border-teal-600/40 transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-800 mb-8 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                  <TestTube className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 mb-4">Clinically Proven</h3>
                <p className="text-slate-700 text-base font-extrabold leading-relaxed">
                  Validated through rigorous in-vitro and in-vivo studies, peer-reviewed research articles, and a granted patent.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="group bg-white border-2 border-slate-200/80 p-12 shadow-[0_4px_20px_-5px_rgba(15,23,42,0.03)] hover:border-teal-600/40 transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-800 mb-8 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                  <Flag className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 mb-4">Made in India</h3>
                <p className="text-slate-700 text-base font-extrabold leading-relaxed">
                  Proudly indigenous manufacturing aligned with Make in India and Swastha Bharat, meeting global quality benchmarks.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  )
}