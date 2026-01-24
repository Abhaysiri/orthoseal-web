import { Dna, Flag, Microscope, TestTube, } from "lucide-react"

export default function InnovationPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">Innovation at OrthoSeal</h1>
          <div className="mt-2 w-20 h-1 bg-primary rounded-full" />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Text Content */}
            <div>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                At OrthoSeal, innovation is driven by a focus on surface engineering and coating technologies that
                enhance the performance of synovial joint implants.
              </p>

              <div className="mt-8 p-6 bg-teal-light rounded-xl">
                <h3 className="text-lg font-semibold text-foreground mb-3">Core Innovation</h3>
                <p className="text-foreground/80 font-medium">
                  Patented Hydroxyapatite-Based Composite Coating for Implants
                </p>
                <p className="mt-3 text-muted-foreground">
                  Developed to improve implant–bone interaction, surface durability, and biological compatibility. This
                  coating-led approach addresses key challenges such as fixation stability, wear behavior, and long-term
                  implant performance within the joint environment.
                </p>
              </div>

              <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
                By advancing implant performance at the surface level, OrthoSeal goes beyond conventional design-only
                solutions. Our innovation integrates material science, engineering rigor, and clinical insight, forming
                a strong foundation for next-generation joint implant development aligned with global medical device
                standards.
              </p>
            </div>

            {/* Image */}
            <div className="md:h-120 lg:top-32">
              <img
                src="/innovation.jpeg"
                alt="Advanced coating technology visualization"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Innovation Pillars */}
          <div className="mt-20 md:mt-28">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">Our Innovation Pillars</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-1"> 
              <div className="text-center p-6">
                <div className="w-14 h-14 bg-teal-light rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Microscope className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Scientist-Led Innovation</h3>
                <p className="text-base text-muted-foreground">
                  Founded by NITK scientists, combining deep materials research with clinical insight to solve real orthopedic challenges.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-14 h-14 bg-teal-light rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Dna className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Patented Smart Coatings</h3>
                <p className="text-base text-muted-foreground">
                  Proprietary, durable, bioactive, and antimicrobial coating technology designed to enhance implant longevity and safety.
                </p>
              </div>
             
              <div className="text-center p-6">
                <div className="w-14 h-14 bg-teal-light rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TestTube className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Clinically Proven Performance</h3>
                <p className="text-base text-muted-foreground">Validated through rigorous in-vitro and in-vivo studies, peer-reviewed research articles, and granted patent.</p>
              </div>

              <div className="text-center p-6">
                <div className="w-14 h-14 bg-teal-light rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Flag className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Made in India, Global Standards</h3>
                <p className="text-base text-muted-foreground">Proudly indigenous manufacturing aligned with Make in India and Swastha Bharat, meeting global quality benchmarks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
