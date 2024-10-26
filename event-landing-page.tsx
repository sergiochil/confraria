import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, MapPin, Clock, Users } from "lucide-react"
import Link from "next/link"

export default function ConfrariaCIOFloripa() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <span className="sr-only">Confraria CIO Floripa</span>
          <Users className="h-6 w-6 text-primary" />
          <span className="ml-2 text-lg font-bold">Confraria CIO Floripa</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#details">
            Details
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#register">
            Register
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Welcome to Confraria CIO Floripa
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl">
                  Join the premier networking event for CIOs and IT leaders in Florianópolis
                </p>
              </div>
              <div className="space-x-4">
                <Link href="#register">
                  <Button variant="secondary" size="lg">
                    Register Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">About the Event</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
              Confraria CIO Floripa is an exclusive gathering of Chief Information Officers and IT leaders from
              Florianópolis and surrounding areas. This event provides a unique opportunity to network, share insights,
              and discuss the latest trends in technology and business.
            </p>
          </div>
        </section>
        <section id="details" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Event Details</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:gap-16">
              <div className="flex items-center space-x-4">
                <Calendar className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="text-xl font-bold">Date</h3>
                  <p className="text-muted-foreground">September 15, 2024</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Clock className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="text-xl font-bold">Time</h3>
                  <p className="text-muted-foreground">6:00 PM - 9:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="text-xl font-bold">Location</h3>
                  <p className="text-muted-foreground">Tech Hub Floripa, Downtown Florianópolis</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Users className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="text-xl font-bold">Attendees</h3>
                  <p className="text-muted-foreground">Limited to 50 CIOs and IT leaders</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="register" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Register Now</h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Secure your spot at Confraria CIO Floripa. Limited seats available!
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col gap-2">
                  <Input type="text" placeholder="Full Name" required />
                  <Input type="email" placeholder="Email Address" required />
                  <Input type="text" placeholder="Company" required />
                  <Input type="text" placeholder="Job Title" required />
                  <Button type="submit" className="w-full">
                    Register
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          © 2024 Confraria CIO Floripa. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}