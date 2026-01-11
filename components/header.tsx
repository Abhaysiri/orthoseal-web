"use client"

import type { PageType } from "./orthoseal-website"
import { Menu, X } from "lucide-react"
import { useState } from "react"

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

export default function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button onClick={() => setCurrentPage("home")} className="flex items-center gap-2 group">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-lg flex items-center justify-center cursor-pointer hover:bg-teal-200">
              <img
                src ="/logoSeal.png" 
              />
            </div>
            <span className="relative grouptext-xl md:text-2xl font-bold bg-gradient-to-b from-blue-400 to-blue-800 bg-clip-text text-transparent 
            tracking-tight cursor-pointer">ORTHOSEAL
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full
                "></span></span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => setCurrentPage(item.page)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  currentPage === item.page
                    ? "text-primary bg-teal-light"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

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
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => {
                    setCurrentPage(item.page)
                    setMobileMenuOpen(false)
                  }}
                  className={`px-4 py-3 text-left text-sm font-medium rounded-lg transition-colors ${
                    currentPage === item.page
                      ? "text-primary bg-teal-light"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
