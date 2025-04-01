"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const screenshots = [
  {
    src: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=1480",
    alt: "App home screen showing restaurant listings",
  },
  {
    src: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=1470",
    alt: "Restaurant menu screen with food items",
  },
  {
    src: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?q=80&w=1374",
    alt: "Shopping cart screen with order items",
  },
  {
    src: "https://images.unsplash.com/photo-1526367790999-0150786686a2?q=80&w=1471",
    alt: "Order tracking screen with delivery map",
  },
]

export function AppShowcaseSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + screenshots.length) % screenshots.length)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  const phoneVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
      },
    },
  }

  return (
    <section ref={ref} className="py-16 md:py-24 overflow-hidden relative">
      <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 rounded-full bg-secondary/10 blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4 border border-primary/20">
            App Preview
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-heading mb-4">
            Explore Our <span className="gradient-text">App</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
            Take a look at our intuitive and user-friendly mobile application designed to make food ordering a breeze.
          </p>
        </motion.div>
        <div className="relative">
          <motion.div
            variants={phoneVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative mx-auto w-[280px] h-[580px] bg-background rounded-[3rem] border-8 border-foreground/10 shadow-2xl overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-6 bg-foreground/10 rounded-t-2xl"></div>
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-foreground/20 rounded-full"></div>
            <div className="w-full h-full overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {screenshots.map((screenshot, index) => (
                  <div key={index} className="min-w-full h-full flex-shrink-0">
                    <Image
                      src={screenshot.src || "/placeholder.svg"}
                      alt={screenshot.alt}
                      width={300}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 -translate-y-1/2 left-4 md:left-1/4 rounded-full glass-effect hover:bg-primary/10"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 -translate-y-1/2 right-4 md:right-1/4 rounded-full glass-effect hover:bg-primary/10"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next</span>
          </Button>
        </div>
        <div className="flex justify-center mt-8">
          {screenshots.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1.5 transition-all ${
                index === currentIndex ? "bg-primary w-6" : "bg-primary/30"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

