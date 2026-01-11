export default function TeamPage() {
  const teamMembers = [
    {
      name: "Dr. Sudhakar C Jambagi",
      role: "Founder & Director",
      designation: "Associate Professor, NITK Surathkal",
      image: "/sudhakar-sir-2.jpeg",
    },
    {
      name: "Dr. Avinash Parthasarthy",
      role: "Clinical Advisor",
      designation: "Arthroplasty Head, Orthopedic Surgeon",
      image: "/avinash-parthasarthy-sir.png",
    },
    {
      name: "Dr. Yogesh D Kamat",
      role: "Clinical Advisor",
      designation: "Orthopedic Surgeon, KMCH Mangaluru",
      image: "/yogeesh-sir.png",
    },
    {
      name: "Dr. Lakshmi K.S.",
      role: "Clinical Advisor",
      designation: "HOD, Pathology, SGITO Bengaluru",
      image: "/lakshmi-ma'am.png",
    },
  ]

  return (
    <div className="bg-background">
      {/* Page Header */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Our Team</h1>
          <div className="mt-3 w-24 h-1.5 bg-primary rounded-full" />
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our diverse team brings together expertise in medical device engineering, clinical practice, and research
              innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                {/* Circular Image */}
                <div className="w-40 h-40 md:w-48 md:h-48 mb-6 rounded-full overflow-hidden border-4 border-primary bg-muted shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name */}
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1">{member.name}</h3>

                {/* Role */}
                <p className="text-sm font-medium text-primary mb-2">{member.role}</p>

                {/* Designation */}
                <p className="text-sm text-muted-foreground leading-relaxed">{member.designation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
