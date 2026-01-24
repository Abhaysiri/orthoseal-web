import Link from "next/link"
import { Calendar, FileText, ExternalLink, ArrowLeft } from "lucide-react"

// 1. HARDCODE YOUR DATA HERE
// Add new items to the top of this list to show them first.


export default function AnnouncementsPage() {
  const announcements = [
  {
    id: 1,
    title: "OrthoSeal Secures DPIIT certification",
    date: "January 13, 2026",
    category: "Certificate of Recogntion",
    description: "We are thrilled to announce we have raised $2M to accelerate our synovial joint implant research.",
    link: "/dpiit_certificate.pdf", // You can put a PDF link here later
    linkText: "Download PDF",
    type: "external" // options: 'pdf', 'external', 'internal'
  },
  
]
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        

        {/* The Rows Container */}
        <div className=" bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {announcements.map((item, index) => (
            <div 
              key={item.id} 
              className={`p-6 flex flex-col sm:flex-row gap-6 hover:bg-teal-50/30 transition-colors ${
                index !== announcements.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              {/* Left: Date Box */}
              <div className="shrink-0">
                <div className="flex items-center text-sm text-gray-500 mb-1 sm:hidden">
                  <Calendar className="w-3 h-3 mr-1.5" />
                  {item.date}
                </div>
                <div className="hidden sm:flex flex-col items-center justify-center w-20 h-20 bg-gray-100 rounded-lg border border-gray-200 text-center p-2">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    {item.date.split(" ")[0]} {/* Month */}
                  </span>
                  <span className="text-2xl font-bold text-[rgb(57,133,117)]">
                    {item.date.split(" ")[1].replace(",", "")} {/* Day */}
                  </span>
                  <span className="text-xs text-gray-500">
                    {item.date.split(" ")[2]} {/* Year */}
                  </span>
                </div>
              </div>

              {/* Middle: Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[rgb(57,133,117)]/10 text-[rgb(57,133,117)]">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                {/* <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p> */}
              </div>

              {/* Right: Action Button */}
              <div className="shrink-0 flex items-center">
                <a 
                  href={item.link}
                  target={item.type === 'internal' ? "_self" : "_blank"} // Opens PDF/External in new tab
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-[rgb(57,133,117)] hover:text-teal-700 transition-colors px-4 py-2 rounded-lg hover:bg-[rgb(57,133,117)]/10 border border-transparent hover:border-[rgb(57,133,117)]/20"
                >
                  {item.type === 'pdf' ? <FileText className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                  {item.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}