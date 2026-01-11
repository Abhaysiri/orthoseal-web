import { Activity, Bone } from "lucide-react"

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[75vh] min-h-[400px] max-h-[600px]">
        <div className="absolute inset-0">
          <img
            src="/homePage knee.jpeg"
            alt="Advanced knee implant technology"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
                Novel orthopedic implants
              </h1>
              <p className="mt-4 md:mt-6 text-lg md:text-xl text-white/90">
                Precision Engineering for Better Mobility.
              </p>
              {/* <button className="mt-6 md:mt-8 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">
                Learn More
              </button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Key Sections */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Our Specializations</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Pioneering joint replacement solutions designed for optimal patient outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Total Knee Replacement Card */}
            <div className="bg-card rounded-xl p-6 md:p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-teal-light rounded-xl flex items-center justify-center mb-6">
                <Bone className="w-7 h-7 md:w-8 md:h-8 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">Total Knee Replacement</h3>
              <p className="text-muted-foreground leading-relaxed">
                State-of-the-art knee implant systems engineered for natural movement, long-term durability, and
                improved patient quality of life.
              </p>
              <div className="  mt-6">
                <img
                  src="/knee-replacement.png"
                  alt="Knee replacement implant"
                  className="w-full h-40 md:h-100  rounded-lg"
                />
              </div>
            </div>

            {/* Total Hip Replacement Card */}
            <div className="bg-card rounded-xl p-6 md:p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-teal-light rounded-xl flex items-center justify-center mb-6">
                <Activity className="w-7 h-7 md:w-8 md:h-8 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">Total Hip Replacement</h3>
              <p className="text-muted-foreground leading-relaxed">
                Advanced hip prosthesis solutions featuring innovative coating technologies for superior bone
                integration and joint performance.
              </p>
              <div className="mt-6">
                <img
                  src="/hip-replacement.png"
                  alt="Hip replacement implant"
                  className="w-full h-40 md:h-100 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      {/* <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary">10+</p>
              <p className="mt-2 text-sm text-muted-foreground">Years R&D</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary">ISO</p>
              <p className="mt-2 text-sm text-muted-foreground">Certified Process</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary">100%</p>
              <p className="mt-2 text-sm text-muted-foreground">Made in India</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary">1</p>
              <p className="mt-2 text-sm text-muted-foreground">Patent Filed</p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}
