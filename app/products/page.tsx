import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CheckCircle, Database, Server, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProductsPage() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Cloud Products</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our comprehensive suite of cloud solutions designed to power your business
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-2 border-transparent hover:border-blue-200 transition-all">
                <CardHeader className="pb-2">
                  <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                    <Server className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Cloud Compute</CardTitle>
                  <CardDescription>Scalable virtual machines for any workload</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <Image
                      src="/images/cloud-compute.png"
                      alt="Cloud Compute"
                      width={300}
                      height={200}
                      className="rounded-md w-full h-40 object-cover"
                    />
                  </div>
                  <p className="mb-4 text-sm text-gray-500">
                    Our cloud compute platform offers high-performance virtual machines with flexible configurations to
                    meet your specific needs. Scale up or down instantly based on demand.
                  </p>
                  <ul className="grid gap-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Auto-scaling capabilities</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Global availability</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Pay-as-you-go pricing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>99.99% uptime SLA</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Learn More</Button>
                </CardFooter>
              </Card>
              <Card className="border-2 border-transparent hover:border-blue-200 transition-all">
                <CardHeader className="pb-2">
                  <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                    <Database className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Cloud Storage</CardTitle>
                  <CardDescription>Reliable and durable object storage</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <Image
                      src="/images/cloud-storage.png"
                      alt="Cloud Storage"
                      width={300}
                      height={200}
                      className="rounded-md w-full h-40 object-cover"
                    />
                  </div>
                  <p className="mb-4 text-sm text-gray-500">
                    Store and retrieve any amount of data from anywhere on the web with our highly scalable, reliable,
                    and low-latency cloud storage service.
                  </p>
                  <ul className="grid gap-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>99.999% durability</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Unlimited storage capacity</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Built-in redundancy</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Lifecycle management</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Learn More</Button>
                </CardFooter>
              </Card>
              <Card className="border-2 border-transparent hover:border-blue-200 transition-all">
                <CardHeader className="pb-2">
                  <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Cloud Security</CardTitle>
                  <CardDescription>Advanced protection for your applications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <Image
                      src="/images/cloud-security.png"
                      alt="Cloud Security"
                      width={300}
                      height={200}
                      className="rounded-md w-full h-40 object-cover"
                    />
                  </div>
                  <p className="mb-4 text-sm text-gray-500">
                    Protect your applications and data with our comprehensive security solutions, including threat
                    detection, encryption, and compliance management.
                  </p>
                  <ul className="grid gap-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>DDoS protection</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Encryption at rest and in transit</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Compliance certifications</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>24/7 security monitoring</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Learn More</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
