"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [serviceValue, setServiceValue] = useState("")
  const [budgetValue, setBudgetValue] = useState("")
  const form = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Debug: Log environment variables (remove in production)
    console.log('EmailJS Config:', {
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    })

    if (form.current) {
      try {
        // Check if environment variables are loaded
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_mxteatk'
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_pnl3e19'
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'R_w891leXS0BG7LXv'

        console.log('Using EmailJS config:', { serviceId, templateId, publicKey })

        if (!serviceId || !templateId || !publicKey) {
          throw new Error(`Missing EmailJS configuration: ${!serviceId ? 'Service ID' : ''} ${!templateId ? 'Template ID' : ''} ${!publicKey ? 'Public Key' : ''}`)
        }

        // Get form data
        const formData = new FormData(form.current)
        
        // Budget mapping for display
        const budgetMapping: { [key: string]: string } = {
          'under-50k': 'Under ₦500,000',
          '50k-100k': '₦500,000 - ₦1,500,000',
          '100k-250k': '₦2,000,000 - ₦4,500,000',
          '250k-500k': '₦5,000,000 - ₦10,000,000',
          'over-500k': 'Over ₦10,000,000'
        }
        
        // Create template parameters object
        const templateParams = {
          firstName: formData.get('firstName') as string,
          lastName: formData.get('lastName') as string,
          email: formData.get('email') as string,
          phone: formData.get('phone') as string,
          company: formData.get('company') as string,
          message: formData.get('message') as string,
          service: serviceValue,
          budget: budgetValue ? budgetMapping[budgetValue] || budgetValue : 'Not specified',
          // Add timestamp for reference
          timestamp: new Date().toLocaleString(),
        }

        // Debug: Log template params (remove in production)
        console.log('Template Params:', templateParams)

        const result = await emailjs.send(
          serviceId,
          templateId,
          templateParams,
          publicKey
        )

        console.log('EmailJS Success:', result)
        
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
        })
        
        // Reset form
        form.current?.reset()
        setServiceValue("")
        setBudgetValue("")
        
      } catch (error) {
        console.error('EmailJS Error:', error)
        console.error('Error type:', typeof error)
        console.error('Error details:', JSON.stringify(error, null, 2))
        
        let errorMessage = 'Unknown error'
        
        if (error instanceof Error) {
          errorMessage = error.message
        } else if (typeof error === 'object' && error !== null) {
          // EmailJS errors are usually objects with text, status, etc.
          if ('text' in error) {
            errorMessage = (error as any).text
          } else if ('message' in error) {
            errorMessage = (error as any).message
          } else if ('status' in error) {
            errorMessage = `Status: ${(error as any).status}`
          } else {
            errorMessage = JSON.stringify(error)
          }
        } else if (typeof error === 'string') {
          errorMessage = error
        }
        
        toast({
          title: "Error Sending Message",
          description: `Failed to send message. Please try again or contact us directly. Error: ${errorMessage}`,
          variant: "destructive",
        })
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-consulting-blue" />,
      title: "Email Us",
      content: "optiTechconsultingltd@gmail.com",
      description: "Send us an email anytime",
    },
    {
      icon: <Phone className="w-6 h-6 text-consulting-blue" />,
      title: "Call Us",
      content: "+234 806 633 1176, +234 802 535 2020",
      description: "Mon-Fri from 8am to 6pm WAT",
    },
    {
      icon: <MapPin className="w-6 h-6 text-consulting-blue" />,
      title: "Visit Us",
      content: "19B, Kampala Street",
      description: "19B, Kampala Street, Off Cairo Street, Ademola Adetokunbo Road, Wuse II, Abuja",
    },
    {
      icon: <Clock className="w-6 h-6 text-consulting-blue" />,
      title: "Business Hours",
      content: "Mon - Fri: 8:00 AM - 6:00 PM",
      description: "WAT (Western African Time)",
    },
  ]

  const services = [
    "Business Strategy",
    "Operational Excellence",
    "Human Resources",
    "Capacity Building",
    "Risk Management",
    "Change Management",
    "Other",
  ]

  const faqData = [
    {
      question: "How long does a typical consulting project take?",
      answer:
        "Project duration varies based on scope and complexity, typically ranging from 3-18 months. We provide detailed timelines during our initial consultation.",
    },
    {
      question: "Do you work with small businesses?",
      answer:
        "Yes! We work with businesses of all sizes, from startups to Fortune 500 companies. Our solutions are tailored to fit your specific needs and budget.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We have expertise across multiple industries including technology, healthcare, financial services, manufacturing, retail, and education.",
    },
    {
      question: "How do you measure project success?",
      answer:
        "We establish clear KPIs and success metrics at the project start, with regular monitoring and reporting to ensure we're delivering measurable value.",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-consulting-lightest-blue to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Let's Start Your Transformation</h1>
            <p className="text-xl text-gray-600 mb-8">
              Ready to unlock your business potential? Get in touch with our expert consultants and discover how we can
              help you achieve extraordinary results.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Free initial consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>24-hour response time</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Tailored solutions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Send Us a Message</CardTitle>
                  <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          placeholder="John"
                          required
                          className="border-gray-300 focus:border-consulting-blue"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Doe"
                          required
                          className="border-gray-300 focus:border-consulting-blue"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john.doe@company.com"
                          required
                          className="border-gray-300 focus:border-consulting-blue"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+234"
                          className="border-gray-300 focus:border-consulting-blue"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name *</Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Your Company Inc."
                          required
                          className="border-gray-300 focus:border-consulting-blue"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Service of Interest</Label>
                        <Select value={serviceValue} onValueChange={setServiceValue}>
                          <SelectTrigger className="border-gray-300 focus:border-consulting-blue">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project, challenges, or goals. The more details you provide, the better we can assist you."
                        required
                        rows={6}
                        className="border-gray-300 focus:border-consulting-blue"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budget">Project Budget (Optional)</Label>
                      <Select value={budgetValue} onValueChange={setBudgetValue}>
                        <SelectTrigger className="border-gray-300 focus:border-consulting-blue">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-50k">Under ₦500,000</SelectItem>
                          <SelectItem value="50k-100k">₦500,000 - ₦1,500,000</SelectItem>
                          <SelectItem value="100k-250k">₦2,000,000 - ₦4,500,000</SelectItem>
                          <SelectItem value="250k-500k">₦5,000,000 - ₦10,000,000</SelectItem>
                          <SelectItem value="over-500k">Over ₦10,000,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-consulting-blue hover:bg-consulting-light-blue text-white transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-consulting-lighter-blue rounded-lg flex items-center justify-center flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                        <p className="text-consulting-blue font-medium">{info.content}</p>
                        <p className="text-sm text-gray-600">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="border-0 shadow-xl bg-gradient-to-br from-consulting-blue to-consulting-light-blue text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Response Time</span>
                      <span className="font-bold">{"< 24 hours"}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Success Rate</span>
                      <span className="font-bold">98%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Client Satisfaction</span>
                      <span className="font-bold">4.9/5</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Projects Completed</span>
                      <span className="font-bold">500+</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Location</h2>
            <p className="text-lg text-gray-600">We invite you to visit us at this convenient location.</p>
          </div>

          <Card className="border-0 shadow-xl overflow-hidden max-w-4xl mx-auto">
            <div className="relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.8545288897317!2d7.478094275691587!3d9.077014388234147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0af888b76257%3A0x980a87fd823607ac!2s19b%20Kampala%20St%2C%20Wuse%202%2C%20Abuja%20904101%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1753435890368!5m2!1sen!2sng" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="OptiTech Consulting Location - 19B, Kampala Street, Wuse II, Abuja"
              />
            </div>
            
            {/* Location Info Overlay */}
            <div className="bg-white p-6 border-t">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-consulting-lighter-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-consulting-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">OptiTech Consulting Ltd</h3>
                  <p className="text-gray-600 mb-1">19B, Kampala Street</p>
                  <p className="text-gray-600 mb-1">Off Cairo Street, Ademola Adetokunbo Road</p>
                  <p className="text-gray-600 mb-3">Wuse II, Abuja, FCT</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center space-x-2 text-consulting-blue">
                      <Phone className="w-4 h-4" />
                      <span>+234 806 633 1176</span>
                    </div>
                    <div className="flex items-center space-x-2 text-consulting-blue">
                      <Clock className="w-4 h-4" />
                      <span>Mon-Fri: 8AM-6PM WAT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get quick answers to common questions about our consulting services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqData.map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact