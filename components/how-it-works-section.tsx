"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Search, ShoppingBag, Navigation, Check } from "lucide-react"
import Image from "next/image"

const steps = [
  {
    icon: <Search className="h-8 w-8 text-primary" />,
    title: "Search",
    description: "Browse restaurants and cuisines or search for your favorites.",
    image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1470",
  },
  {
    icon: <ShoppingBag className="h-8 w-8 text-primary" />,
    title: "Order",
    description: "Select your items and customize them to your liking.",
    image: "https://images.unsplash.com/photo-1484972759836-b93f9ef2b293?q=80&w=1470",
  },
  {
    icon: <Navigation className="h-8 w-8 text-primary" />,
    title: "Track",
    description: "Follow your order in real-time from preparation to delivery.",
    image: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: <Check className="h-8 w-8 text-primary" />,
    title: "Enjoy",
    description: "Receive your food and enjoy a delicious meal.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1470",
  },
]

export function HowItWorksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section ref={ref} className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden lg:block"></div>
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-accent/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4 border border-primary/20">
            Simple Process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-heading mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
            Getting your favorite food delivered is as easy as following these simple steps.
          </p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col items-center text-center relative">
              <div className="w-full h-48 mb-6 relative rounded-xl overflow-hidden shadow-md">
                <Image src={step.image || "/placeholder.svg"} alt={step.title} fill className="object-cover" />
              </div>
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 relative z-10 border-2 border-primary/20 shadow-custom">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold font-heading mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              <div className="absolute -top-2 -left-2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-lg">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

