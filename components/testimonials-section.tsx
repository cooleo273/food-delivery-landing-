"use client"

import { useRef, useState, useEffect } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion, useInView } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374",
    initials: "SJ",
    role: "Regular Customer",
    content:
      "FoodFast has completely changed how I order food. The delivery is always on time and the food arrives hot and fresh. The app is so easy to use!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374",
    initials: "MC",
    role: "Food Enthusiast",
    content:
      "I've tried many food delivery apps, but FoodFast stands out with its wide selection of restaurants and excellent customer service. Highly recommended!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1470",
    initials: "ER",
    role: "Busy Professional",
    content:
      "As someone with a hectic schedule, FoodFast has been a lifesaver. The real-time tracking feature is particularly useful, and the food quality is consistently great.",
    rating: 4,
  },
  {
    name: "David Kim",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374",
    initials: "DK",
    role: "College Student",
    content:
      "The student discounts and affordable delivery fees make FoodFast perfect for college students like me. Plus, the variety of options means I never get bored!",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

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
    <section ref={ref} className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-64 h-64 rounded-full bg-secondary/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4 border border-primary/20">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-heading mb-4">
            What Our <span className="gradient-text">Customers</span> Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about FoodFast.
          </p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`transition-all duration-500 ${index === activeIndex ? "scale-105 shadow-lg z-10" : "scale-100"}`}
            >
              <Card className="h-full border-none shadow-custom hover:shadow-lg transition-all duration-300 bg-background overflow-hidden hover:translate-y-[-5px]">
                <CardContent className="pt-6">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-muted"}`}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                </CardContent>
                <CardFooter className="border-t bg-muted/20 pt-4">
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-3 border-2 border-primary/20">
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback className="bg-primary/10 text-primary font-medium">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1.5 transition-all ${
                index === activeIndex ? "bg-primary w-6" : "bg-primary/30"
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

