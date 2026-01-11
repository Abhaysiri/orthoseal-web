"use client"

import { useState } from "react"
import Header from "./header"
import Footer from "./footer"
import HomePage from "./pages/home-page"
import AboutPage from "./pages/about-page"
import ProductsPage from "./pages/products-page"
import InnovationPage from "./pages/innovation-page"
import TeamPage from "./pages/team-page"
import ContactPage from "./pages/contact-page"

export type PageType = "home" | "about" | "products" | "innovation" | "team" | "contact"

export default function OrthoSealWebsite() {
  const [currentPage, setCurrentPage] = useState<PageType>("home")

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />
      case "about":
        return <AboutPage />
      case "products":
        return <ProductsPage />
      case "innovation":
        return <InnovationPage />
      case "team":
        return <TeamPage />
      case "contact":
        return <ContactPage />
      default:
        return <HomePage />
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-1">{renderPage()}</main>
      <Footer />
    </div>
  )
}
