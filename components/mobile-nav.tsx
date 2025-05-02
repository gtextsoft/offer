"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, Shield } from "lucide-react"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden p-2 relative outline-none focus:ring-2 focus:ring-purple-400 rounded-md hover:bg-gray-100" aria-label="Toggle Menu">
          <Menu className="h-6 w-6 text-gray-700" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full max-w-[300px] sm:max-w-[350px] border-r border-gray-200 p-0 focus:outline-none">
        <div className="flex flex-col h-full bg-white">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-purple-600" />
              <span className="text-lg font-bold">Stop Bullying Now</span>
            </div>
            <Button variant="ghost" onClick={() => setOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
              <X className="h-5 w-5" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          
          <nav className="flex flex-col gap-1 p-4">
            <Link
              href="#about"
              className="text-lg font-medium hover:text-purple-600 transition-colors p-3 rounded-md hover:bg-gray-100 active:bg-gray-200"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            <Link
              href="#impact"
              className="text-lg font-medium hover:text-purple-600 transition-colors p-3 rounded-md hover:bg-gray-100 active:bg-gray-200"
              onClick={() => setOpen(false)}
            >
              Impact
            </Link>
            <Link
              href="#join"
              className="text-lg font-medium hover:text-purple-600 transition-colors p-3 rounded-md hover:bg-gray-100 active:bg-gray-200"
              onClick={() => setOpen(false)}
            >
              Join Us
            </Link>
          </nav>
          
          <div className="mt-auto p-4 border-t">
            <Button 
              className="w-full bg-purple-600 hover:bg-purple-700 text-white p-6 text-lg font-medium" 
              onClick={() => setOpen(false)}
            >
              <Link href="#join">Join Now</Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
