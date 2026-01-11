import { Target, Users, Award, Rocket, Factory, Globe} from "lucide-react"

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">About OrthoSeal</h1>
          <div className="mt-2 w-20 h-1 bg-primary rounded-full" />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="prose prose-lg">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                ORTHOSEAL is a science-driven deep med-tech company founded by two scientists from NITK and incubated at NITK-STEP. We focus on the design, manufacturing, and commercialization of premium next-generation orthopedic implants, leveraging advanced surface engineering to deliver superior clinical performance and long-term patient safety.
              </p>

              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Built on deep expertise in materials science, biomedical engineering, and surface modification, ORTHOSEAL develops novel, patented, durable, and antimicrobial coating technologies that enhance implant longevity, promote biological integration, and reduce infection risks. Aligned with the Make in India and Swastha Bharat initiatives, we are committed to strengthening indigenous medical device innovation while improving patient mobility and quality of life.
              </p>
            </div>

            {/* Vision Block */}
            <div className="mt-12 p-6 md:p-8 bg-teal-light rounded-xl border-l-4 border-primary">
              <h3 className="text-lg font-semibold text-foreground mb-2">Our Vision</h3>
              <p className="text-foreground/80 text-lg italic">
                &ldquo;To be the global leader in advanced, bioactive, and antimicrobial orthopedic solutions—designed, developed, and proudly manufactured in India—empowering mobility, enhancing quality of life, and driving a Swastha Bharat through world-class innovation.&rdquo;
              </p>
              <div className="max-w-4xl  py-10 px-1">
                {/* Header Section */}
                <div className=" mb-10">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Our Mission</h3>
                  
                </div>

                {/* The "Bullet Points" Container */}
                <div className="grid gap-8 md:grid-cols-3">
    
                {/* Point 1: Innovation */}
                <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Relentless Innovation</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Developing advanced orthopedic implants by integrating bioactivity, antimicrobial technology, and sustainable materials.
                  </p>
                </div>

                {/* Point 2: Make in India */}
                <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mb-4">
                    <Factory className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Atmanirbhar Bharat</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Empowering self-reliance through 100% Make in India manufacturing to build a robust domestic healthcare ecosystem.
                  </p>
                </div>

                {/* Point 3: Global Standards */}
                <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Excellence</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Competing globally by adhering to the highest quality and ethical standards while ensuring affordability for all.
                  </p>
                </div>

              </div>
            </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="mt-16 md:mt-24 grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="p-6 border border-border rounded-xl">
              <div className="w-12 h-12 bg-teal-light rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Precision</h3>
              <p className="text-muted-foreground">
                Engineering excellence in every detail, from design to manufacturing.
              </p>
            </div>

            <div className="p-6 border border-border rounded-xl">
              <div className="w-12 h-12 bg-teal-light rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Collaboration</h3>
              <p className="text-muted-foreground">
                Working closely with clinicians to address real surgical challenges.
              </p>
            </div>

            <div className="p-6 border border-border rounded-xl">
              <div className="w-12 h-12 bg-teal-light rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Quality</h3>
              <p className="text-muted-foreground">Aligned with global medical device standards and best practices.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
