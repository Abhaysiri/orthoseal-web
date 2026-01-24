"use client"

type PageType = "home" | "about" | "products" | "innovation" | "team" | "contact"


import { Menu, X , Megaphone } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface HeaderProps {
  currentPage: PageType
  setCurrentPage: (page: PageType) => void
}

const navItems: { label: string; page: PageType }[] = [
  { label: "Home", page: "home" },
  { label: "About Us", page: "about" },
  { label: "Products", page: "products" },
  { label: "Innovation", page: "innovation" },
  { label: "Team", page: "team" },
  { label: "Contact", page: "contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href = "/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-lg flex items-center justify-center cursor-pointer hover:bg-teal-200">
              <img
                src ="/logoSeal.png" 
              />
            </div>
            <span className="relative grouptext-xl md:text-2xl font-bold bg-gradient-to-b from-blue-400 to-blue-800 bg-clip-text text-transparent 
            tracking-tight cursor-pointer">ORTHOSEAL
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full
                "></span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Link href = "/" className={`px-4 py-2 text-md font-medium rounded-lg transition-colors ${
                  pathname === "/"
                    ? "text-primary bg-teal-light"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}>
            Home
            </Link>

            <Link href = "/about" className={`px-4 py-2 text-md font-medium rounded-lg transition-colors ${
                  pathname === "/about"
                    ? "text-primary bg-teal-light"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}>
            About Us
            </Link>

            <Link href = "/products" className={`px-4 py-2 text-md font-medium rounded-lg transition-colors ${
                  pathname === "/products"
                    ? "text-primary bg-teal-light"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}>
            Products
            </Link>

            <Link href = "innovation" className={`px-4 py-2 text-md font-medium rounded-lg transition-colors ${
                  pathname === "/innovation"
                    ? "text-primary bg-teal-light"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}>
            Innovation
            </Link>

            <Link href = "team" className={`px-4 py-2 text-md font-medium rounded-lg transition-colors ${
                  pathname === "/team"
                    ? "text-primary bg-teal-light"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}>
            Team
            </Link>

            <Link href = "contact" className={`px-4 py-2 text-md font-medium rounded-lg transition-colors ${
                  pathname === "/contact"
                    ? "text-primary bg-teal-light"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}>
            Contact
            </Link> 
          </nav>

          <Link  href = "/announcement" className="group flex flex-col items-center justify-center gap-0.5">
            {/* Icon with smooth scale animation instead of width change */}
            <Megaphone 
              className="w-6 h-6 text-[rgb(57,133,117)] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12
              group-hover:cursor-pointer
              " 
            />
            
            {/* Text styled as a micro-label */}
            <span className="!hidden md:!block whitespace-nowrap text-[10px] font-semibold text-gray-600 uppercase tracking-wide group-hover:text-[rgb(57,133,117)] transition-colors group-hover:cursor-pointer">
              Announcements
            </span>
          </Link>

          <div>
            <img src ="dpiit_logo.png"  className = "w-20 h-auto md:w-32"/>
          </div>
          

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-1">
             
                <Link                 
                  href = "/"
                  className={`px-4 py-3 text-left text-sm font-medium rounded-lg transition-colors ${
                    pathname === "/"
                      ? "text-primary bg-teal-light"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  Home
                </Link>

                <Link                 
                  href = "/about"
                  className={`px-4 py-3 text-left text-sm font-medium rounded-lg transition-colors ${
                    pathname === "/"
                      ? "text-primary bg-teal-light"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  About Us
                </Link>
                <Link                 
                  href = "/products"
                  className={`px-4 py-3 text-left text-sm font-medium rounded-lg transition-colors ${
                    pathname === "/"
                      ? "text-primary bg-teal-light"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  Products
                </Link>

                <Link                 
                  href = "/innovation"
                  className={`px-4 py-3 text-left text-sm font-medium rounded-lg transition-colors ${
                    pathname === "/"
                      ? "text-primary bg-teal-light"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  Innovation
                </Link>

                <Link                 
                  href = "/team"
                  className={`px-4 py-3 text-left text-sm font-medium rounded-lg transition-colors ${
                    pathname === "/"
                      ? "text-primary bg-teal-light"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  Team
                </Link>

                <Link                 
                  href = "/contact"
                  className={`px-4 py-3 text-left text-sm font-medium rounded-lg transition-colors ${
                    pathname === "/"
                      ? "text-primary bg-teal-light"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  Contact
                </Link>
              
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
