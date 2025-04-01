"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-background to-background/80 dark:from-background dark:to-background/90 pt-16 md:pt-24"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070')] bg-cover bg-center opacity-10 dark:opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary/10 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-secondary/20 blur-3xl"></div>
      <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-primary/20 blur-2xl"></div>

      <div className="container px-4 md:px-6 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 py-10 md:py-16 relative z-10">
        <motion.div
          className="flex flex-col items-start gap-4 lg:gap-6 lg:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary border border-primary/20">
            #1 Food Delivery App
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter font-heading text-foreground">
            Delicious Food <br />
            <span className="gradient-text">Delivered Fast</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-[600px]">
            Order from your favorite local restaurants with just a few taps. Fast delivery, easy payment, and a wide
            selection of cuisines.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="font-medium rounded-full shadow-custom hover:shadow-lg hover:translate-y-[-2px] transition-all"
            >
              Order Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-medium rounded-full border-2 hover:bg-primary/10 transition-all"
            >
              Download App <Download className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
        <motion.div
          className="lg:w-1/2 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="relative w-full aspect-square max-w-[500px] mx-auto">
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-primary/20 blur-xl"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-secondary/30 blur-xl"></div>

            <div className="relative z-10 shadow-2xl rounded-3xl overflow-hidden border-4 border-white/20 dark:border-black/20">
              <Image
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981"
                alt="Delicious burger and fries"
                width={600}
                height={600}
                className="object-cover w-full h-full"
                priority
              />
            </div>

            <div className="absolute -bottom-6 -right-6 glass-effect rounded-full w-32 h-32 flex items-center justify-center text-center p-4 z-20 border-2 border-white/30 dark:border-white/10">
              <span className="text-sm font-bold text-foreground">
                30 min
                <br />
                delivery
              </span>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  )
}

