export default function ProductsPage() {
  const products = [
    { title: "HA-Coated Hip Components (Stem & Cup)", image: "/product-1.png" },
    { title: "Cementless Total Hip System", image: "/product-2.png" },
    { title: "Multi-Hole Acetabular Shell", image: "/product-3.png" },
    { title: "Total Knee Replacement System (Tri-Compartmental)", image: "/product-4.png" },
    { title: "Tibial & Femoral Fixation Surfaces", image: "/product-5.png" },
  ]

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">Products</h1>
          <div className="mt-2 w-20 h-1 bg-primary rounded-full" />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Side: 2-column grid with 5 products (2-2-1 layout) */}
            <div className="flex-1 lg:flex-[2]">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Our Products</h2>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {products.slice(0, 4).map((product, index) => (
                  <div
                    key={index}
                    className="border border-border rounded-xl overflow-hidden bg-white hover:shadow-lg transition-shadow"
                  >
                    <div className="aspect-[3/2] bg-muted ">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="p-3 md:p-4">
                      <h3 className="text-sm md:text-base font-medium text-foreground text-center truncate">
                        {product.title}
                      </h3>
                    </div>
                  </div>
                ))}
                {/* 5th product centered spanning full width on small, half on larger */}
                <div className="col-span-2 flex justify-center">
                  <div className="w-full sm:w-1/2 border border-border rounded-xl overflow-hidden bg-white hover:shadow-lg transition-shadow">
                    <div className="aspect-[3/2] bg-muted">
                      <img
                        src={products[4].image || "/placeholder.svg"}
                        alt={products[4].title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="p-3 md:p-4">
                      <h3 className="text-sm md:text-base font-medium text-foreground text-center truncate">
                        {products[4].title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: 1-column grid with 2 rows for other purpose images */}
            <div className="lg:flex-1">
              
              <div className="flex flex-col gap-4 md:gap-6">
                {/* Featured Image 1 */}
                <div className="border border-border rounded-xl overflow-hidden bg-white hover:shadow-lg transition-shadow">
                  <div className=" bg-muted">
                    <img
                      src="/product-6.png"
                      alt="Surgical Excellence"
                      className="w-100 h-93 object-cover"
                    />
                  </div>
                  
                </div>

                {/* Featured Image 2 */}
                <div className="border border-border rounded-xl overflow-hidden bg-white hover:shadow-lg transition-shadow">
                  <div className=" bg-muted">
                    <img
                      src="/product-7.png"
                      alt="Coating Technology"
                      className="w-full h-93 object-cover"
                    />
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
