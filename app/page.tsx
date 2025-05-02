import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Shield, Users, MessageSquare, Heart, ExternalLink } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"
import { HeroImage } from "@/components/hero-image"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-white">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
            <span className="text-lg sm:text-xl font-bold">Stop Bullying Now</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-purple-600 transition-colors">
              About
            </Link>
            <Link href="#impact" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Impact
            </Link>
            <Link href="#join" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Join Us
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button className="hidden md:flex bg-purple-600 hover:bg-purple-700">Join Now</Button>
            <MobileNav />
          </div>
        </div>
      </header>

      <main className="flex-1">
 {/* Hero Section */}
 <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-gray-50 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
              <div className="flex flex-col items-start text-black text-center md:text-left w-full">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 sm:mb-4 md:mb-6">
                  Enough Is Enough: Fight Bullying With Dr. Stephen Akintayo
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-10">
                  Join our movement to dismantle bullying everywhere. Together, we can create safer spaces and support those
                  affected.
                </p>
                <div className="w-full md:w-auto">
                  <Button
                    size="lg"
                    className="w-full md:w-auto bg-purple-600 text-white hover:bg-purple-700 text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5"
                  >
                    <Link href="#join">Join The Movement</Link>
                  </Button>
                </div>
              </div>
              <HeroImage />
            </div>
          </div>
        </section>


        {/* Impact Section */}
        <section id="impact" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
          <div className="container px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16">
              Bullying Breaks People
            </h2>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <Image
                  src="/images/stop-bullying.jpg"
                  alt="Stop bullying - diverse group of people standing together against bullying"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-lg object-cover w-full h-auto"
                />
              </div>
              <div className="space-y-4 sm:space-y-6 order-1 md:order-2">
                <p className="text-base sm:text-lg">
                  It silences voices. It shatters confidence. It causes depression, isolation, and in too many cases…
                  even suicide.
                </p>
                <p className="text-base sm:text-lg">
                  If you've ever been bullied — whether at school, at work, online, or anywhere else — you know how deep
                  the scars can run.
                </p>
                <p className="text-base sm:text-lg">
                  You know the feeling of being talked down to, overlooked, mocked, or intimidated.
                </p>
                <p className="text-base sm:text-lg">
                  You know the damage it does — mentally, emotionally, sometimes physically.
                </p>
                <p className="text-base sm:text-lg">
                  You know how it feels to pretend everything is fine when inside, it's not.
                </p>
                <p className="text-base sm:text-lg font-bold">
                  But you also know this: you're not alone. And you don't have to stay silent.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Join the Movement Section */}
        <section id="join" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
          <div className="container px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                Join the Movement to Dismantle Bullies Everywhere
              </h2>
              <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
                We are building a powerful community of survivors, advocates, business owners, professionals, and
                everyday people who are done with staying silent.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md text-center h-full transform hover:scale-105 transition-transform duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-purple-100 text-purple-600 mb-4 sm:mb-6">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">More Than Awareness</h3>
                <p className="text-sm sm:text-base">
                  This is action. We're creating real change through community power and strategic initiatives.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md text-center h-full transform hover:scale-105 transition-transform duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-purple-100 text-purple-600 mb-4 sm:mb-6">
                  <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Share Your Story</h3>
                <p className="text-sm sm:text-base">
                  Your experiences matter. By sharing, you help others feel less alone and bring visibility to the
                  issue.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md text-center h-full sm:col-span-2 lg:col-span-1 transform hover:scale-105 transition-transform duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-purple-100 text-purple-600 mb-4 sm:mb-6">
                  <Heart className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Support System</h3>
                <p className="text-sm sm:text-base">
                  Access resources, connect with others, and find the support you need to heal and grow stronger.
                </p>
              </div>
            </div>

            <div className="text-center mb-8 sm:mb-12">
              <p className="text-lg sm:text-xl font-bold">
                We need your voice. We need your story. We need your skill.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-purple-600 text-white">
          <div className="container px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Ready to Join the Fight?</h2>
                <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8">
                  Click the button to join our growing movement. You'll be directed to a form where you can share your
                  information and get access to our private WhatsApp community where we connect, share, strategize, and
                  take action together.
                </p>
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <p className="text-base sm:text-lg font-bold">This is not a trend. This is a fight.</p>
                  <p className="text-base sm:text-lg">And we're building a force that bullies can't ignore.</p>
                  <p className="text-base sm:text-lg font-bold">Join us. Speak up. Stand tall.</p>
                  <p className="text-base sm:text-lg">Because when we fight together, we win.</p>
                </div>
                <div className="flex flex-col sm:flex-row items-center mb-8 lg:mb-0">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex-shrink-0 mb-4 sm:mb-0">
                    <Image
                      src="/images/dr-stephen-akintayo.jpeg"
                      alt="Dr. Stephen Akintayo"
                      fill
                      className="rounded-full object-cover border-2 border-white shadow-md"
                    />
                  </div>
                  <div className="ml-0 sm:ml-4 text-center sm:text-left">
                    <p className="font-bold text-base sm:text-lg">Dr. Stephen Akintayo</p>
                    <p className="text-sm sm:text-base">Movement Leader</p>
                  </div>
                </div>
              </div>

              <div className="bg-white text-gray-900 p-6 sm:p-8 rounded-lg shadow-lg flex flex-col items-center justify-center">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Join Our Community</h3>
                <p className="text-center mb-6 sm:mb-8 text-base sm:text-lg">
                  Complete our registration form to become part of this powerful movement against bullying. After
                  submitting, you'll receive instructions to join our WhatsApp community.
                </p>
                <a
                  href="https://app.mailingboss.com/lists/6814dced75b34/subscribe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center w-full justify-center"
                >
                  <Button
                    size="lg"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-base sm:text-lg px-6 py-5 sm:px-8 sm:py-6 transition-transform duration-300 transform hover:scale-105 active:scale-95"
                  >
                    Complete Registration Form
                    <ExternalLink className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-4">
                <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400" />
                <span className="text-base sm:text-lg font-bold">Stop Bullying Now</span>
              </div>
              <p className="text-sm sm:text-base text-gray-400">
                A movement led by Dr. Stephen Akintayo to combat bullying in all its forms.
              </p>
            </div>

            <div className="text-center sm:text-left">
              <h3 className="text-base sm:text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#impact" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link href="#join" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                    Join Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <h3 className="text-base sm:text-lg font-bold mb-4">Follow Us</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <h3 className="text-base sm:text-lg font-bold mb-4">Contact</h3>
              <p className="text-sm sm:text-base text-gray-400 mb-2">Email: info@stopbullyingnow.org</p>
              <p className="text-sm sm:text-base text-gray-400">Phone: +1 (555) 123-4567</p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Stop Bullying Now. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
