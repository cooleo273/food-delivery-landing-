import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Apple, Facebook, Instagram, PlayCircle, Twitter } from "lucide-react"
import Link from "next/link"

export function FooterSection() {
  return (
    <footer className="bg-muted/80 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-secondary/5 blur-3xl"></div>

      <div className="container px-4 md:px-6 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading">FoodFast</h3>
            <p className="text-muted-foreground mb-6">
              Delicious food delivered fast to your doorstep. Order from your favorite local restaurants.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  Restaurants
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  Promotions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading">Download App</h3>
            <p className="text-muted-foreground mb-6">Get the FoodFast app for the best mobile experience.</p>
            <div className="space-y-4">
              <Button
                variant="outline"
                className="w-full justify-start rounded-xl border-2 hover:bg-primary/10 transition-all"
              >
                <Apple className="h-5 w-5 mr-3" />
                App Store
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start rounded-xl border-2 hover:bg-primary/10 transition-all"
              >
                <PlayCircle className="h-5 w-5 mr-3" />
                Google Play
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {new Date().getFullYear()} FoodFast. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="flex items-center">
                <p className="text-sm text-muted-foreground mr-2">Subscribe to our newsletter:</p>
                <div className="flex">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="rounded-l-md rounded-r-none border-r-0"
                  />
                  <Button className="rounded-l-none">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

