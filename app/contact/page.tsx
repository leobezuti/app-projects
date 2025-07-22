import Link from "next/link"
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed">
                  Have questions or need assistance? We're here to help.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-2">
              <div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-blue-500" />
                    <div>
                      <h3 className="font-medium">Our Location</h3>
                      <p className="text-sm text-gray-500">
                        123 Cloud Street
                        <br />
                        San Francisco, CA 94105
                        <br />
                        United States
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-blue-500" />
                    <div>
                      <h3 className="font-medium">Email Us</h3>
                      <p className="text-sm text-gray-500">
                        info@cloudstack.com
                        <br />
                        support@cloudstack.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-blue-500" />
                    <div>
                      <h3 className="font-medium">Call Us</h3>
                      <p className="text-sm text-gray-500">
                        +1 (555) 123-4567
                        <br />
                        Mon-Fri, 9am-6pm PST
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0968143526147!2d-122.39568492392031!3d37.78992611192644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807d2a783a93%3A0xd9e8eafc288eef5a!2sMarket%20St%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="CloudStack Office Location"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h2 className="mb-6 text-xl font-semibold">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
