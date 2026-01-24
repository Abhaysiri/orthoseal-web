import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Header from "../components/header"
import Footer from "../components/footer"


export const metadata: Metadata = {
  title: "OrthoSeal | Advanced Synovial Joint Implants",
  description:
    "OrthoSeal is a medical implant R&D company specializing in synovial joint implants with advanced coating technologies for knee and hip replacements.",
 
  icons: {
    icon: [
      {
        url: "/logoSeal.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logoSeal.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/logoSeal.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}