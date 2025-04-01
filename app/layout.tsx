import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter, Poppins } from "next/font/google"
import { cn } from "@/lib/utils"
import StructuredData from "./structured-data"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata = {
  title: "FoodFast - Fast Food Delivery App | Order Online",
  description:
    "Order delicious food from your favorite local restaurants with FoodFast. Fast delivery, easy payment, and a wide selection of cuisines. Download our food delivery app today!",
  keywords: "food delivery app, fast food delivery, online food ordering, restaurant delivery, meal delivery service",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <style>{`
          @supports (font: -apple-system-body) and (-webkit-appearance: none) { 
            img[loading="lazy"] { 
              clip-path: inset(0.6px) 
            } 
          }
        `}</style>
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable, poppins.variable)}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <StructuredData />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'