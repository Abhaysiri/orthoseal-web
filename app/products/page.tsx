import React from "react"

export default function ProductsPage() {
  const products = [
    { id: "01", title: "HA-Coated Hip Components (Stem & Cup)", image: "/product-1.png" },
    { id: "02", title: "Cementless Total Hip System", image: "/product-2.png" },
    { id: "03", title: "Multi-Hole Acetabular Shell", image: "/product-3.png" },
    { id: "04", title: "Total Knee Replacement System", image: "/product-4.png" },
    { id: "05", title: "Tibial & Femoral Fixation Surfaces", image: "/product-5.png" },
  ]

  return (
    <div className="min-h-screen bg-[#F1F5F9] font-sans selection:bg-[#0D9488] selection:text-white pb-32">
      
      {/* Header Section */}
      <section className="py-20 md:py-28 text-center relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-teal-600 mb-8 block">
            02 // The Implants
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            Precision orthopedic hardware.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-slate-700 font-medium max-w-2xl mx-auto leading-relaxed">
            Engineered for superior fixation, unparalleled load distribution, and long-term biological integration.
          </p>
        </div>
      </section>

      {/* Main Content - Products Grid with Mesh Background */}
      <section className="relative z-10">
        {/* Mesh Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-80 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            
            {/* Map first 4 products into the 2x2 grid */}
            {products.slice(0, 4).map((product) => (
              <div key={product.id} className="group bg-white rounded-2xl shadow-[0_4px_20px_-5px_rgba(15,23,42,0.03)] border-2 border-slate-200/80 hover:border-teal-600/40 transition-colors flex flex-col h-[450px]">
                
                {/* Top 65%: Staging Block */}
                <div className="h-[65%] bg-slate-100/60 rounded-t-2xl overflow-visible flex items-center justify-center p-8 relative">
                  
                  {/* Item Number */}
                  <div className="absolute top-6 left-6 bg-white px-3 py-1.5 rounded-lg shadow-sm border border-slate-200 text-sm font-extrabold text-slate-500">
                    {product.id}
                  </div>

                  {/* Vivid Bio-Luminescent Caustics */}
                  <div className="absolute bg-gradient-to-tr from-cyan-500/35 via-teal-500/25 to-emerald-400/35 w-48 h-48 rounded-full blur-2xl pointer-events-none group-hover:scale-150 group-hover:opacity-80 group-hover:rotate-45 transition-all duration-700 ease-out" />

                  {/* Z-Index Breakout Image */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      className="object-contain max-h-[140%] max-w-[140%] scale-105 group-hover:scale-115 transition-transform duration-700 ease-out filter drop-shadow-[0px_20px_16px_rgba(15,23,42,0.25)] -mt-8 -mb-8"
                    />
                  </div>
                </div>

                {/* Bottom 35%: Product Details */}
                <div className="h-[35%] bg-white rounded-b-2xl flex items-center justify-center px-8 text-center border-t border-slate-100">
                  <h3 className="text-base font-extrabold text-slate-900 tracking-tight leading-snug">
                    {product.title}
                  </h3>
                </div>

              </div>
            ))}

            {/* 5th Product: Centered spanning 2 columns */}
            <div className="col-span-1 md:col-span-2 max-w-2xl mx-auto w-full">
              <div className="group bg-white rounded-2xl shadow-[0_4px_20px_-5px_rgba(15,23,42,0.03)] border-2 border-slate-200/80 hover:border-teal-600/40 transition-colors flex flex-col h-[500px]">
                
                {/* Top 65%: Staging Block */}
                <div className="h-[65%] bg-slate-100/60 rounded-t-2xl overflow-visible flex items-center justify-center p-8 relative">
                  <div className="absolute top-6 left-6 bg-white px-3 py-1.5 rounded-lg shadow-sm border border-slate-200 text-sm font-extrabold text-slate-500">
                    {products[4].id}
                  </div>

                  {/* Vivid Bio-Luminescent Caustics */}
                  <div className="absolute bg-gradient-to-tr from-cyan-500/35 via-teal-500/25 to-emerald-400/35 w-64 h-64 rounded-full blur-2xl pointer-events-none group-hover:scale-150 group-hover:opacity-80 group-hover:rotate-45 transition-all duration-700 ease-out" />

                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <img
                      src={products[4].image || "/placeholder.svg"}
                      alt={products[4].title}
                      className="object-contain max-h-[140%] max-w-[140%] scale-105 group-hover:scale-115 transition-transform duration-700 ease-out filter drop-shadow-[0px_20px_16px_rgba(15,23,42,0.25)] -mt-10 -mb-10"
                    />
                  </div>
                </div>

                {/* Bottom 35%: Product Details */}
                <div className="h-[35%] bg-white rounded-b-2xl flex items-center justify-center px-8 text-center border-t border-slate-100">
                  <h3 className="text-lg font-extrabold text-slate-900 tracking-tight leading-snug">
                    {products[4].title}
                  </h3>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  )
}