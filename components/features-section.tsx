"use client"

import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, useInView } from "framer-motion"
import { Clock, MapPin, CreditCard, Utensils } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "Fast Delivery",
    description: "Get your food delivered in under 30 minutes or your next order is free.",
    image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?q=80&w=1471",
  },
  {
    icon: <MapPin className="h-10 w-10 text-primary" />,
    title: "Live Tracking",
    description: "Track your order in real-time from the restaurant to your doorstep.",
    image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: <CreditCard className="h-10 w-10 text-primary" />,
    title: "Easy Payment",
    description: "Multiple payment options including credit cards, digital wallets, and cash.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1470",
  },
  {
    icon: <Utensils className="h-10 w-10 text-primary" />,
    title: "Wide Selection",
    description: "Choose from thousands of restaurants and cuisines in your area.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1470",
  },
]

export function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section ref={ref} className="py-16 md:py-24 bg-muted/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-secondary/10 blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4 border border-primary/20">
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-heading mb-4">
            Why Choose <span className="gradient-text">FoodFast</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
            We make food delivery simple, fast, and convenient with features designed for the best experience.
          </p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-none shadow-custom hover:shadow-lg transition-all duration-300 bg-background hover:translate-y-[-5px] overflow-hidden">
                <div className="w-full h-40 relative">
                  <Image src={feature.image || "/placeholder.svg"} alt={feature.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-heading">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

