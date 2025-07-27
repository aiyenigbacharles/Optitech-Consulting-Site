
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { FolderCode, Cog, ShieldCheck, MonitorCog, Handshake, Shield, ShoppingCart, ArrowRight, CheckCircle, Landmark } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <FolderCode className="w-12 h-12 text-consulting-blue" />,
      title: "IT Strategy & Roadmapping",
      description: "Align Technology with Business Vision.",
      features: ["Goal-focused tech planning", "Scalable infrastructure design", "Cost-value prioritization"],
      // outcomes: "Increase revenue by 25-40% within 12 months"
    },
    {
      icon: <Cog className="w-12 h-12 text-consulting-blue" />,
      title: "Capacity Building",
      description: "Through Trainings and Workshops.",
      features: ["Customized Training for your Industry", "Experimental Learning Frameworks", "Performance Benchmarking"],
      // outcomes: "Reduce operational costs by 15-30%"
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-consulting-blue" />,
      title: "Security System Capacity Building",
      description: "Building Institutional Cyber Resilience Through Adaptive Training.",
      features: ["Executive Cyber Risk Governance", "Regulation-ready safeguards", "Staff security training"],
      // outcomes: "Improve employee satisfaction by 40%+"
    },
    {
      icon: <MonitorCog className="w-12 h-12 text-consulting-blue" />,
      title: "System Integration",
      description: "Unify and Amplify your Tech Ecosystem.",
      features: ["Hybrid system bridging", "Built-in security", "Performance tuning"],
      // outcomes: "Accelerate time-to-market by 50%"
    },
    {
      icon: <Handshake className="w-12 h-12 text-consulting-blue" />,
      title: "Collaboration and Partnering with State Actors",
      description: "Driving Public Sector Digital Transformation Through Institutional Capacity Building.",
      features: ["Public Sector Digital Literacy Programs", "Critical Infrastructure Protection", "Capacity Building for State-Owned Enterprises"],
      // outcomes: "Reduce business risks by 60%"
    },
    {
      icon: <Landmark className="w-12 h-12 text-consulting-blue" />,
      title: "Financial Consulting Services",
      description: "For Local, State and Federal Government.",
      features: ["Account Reconciliation", "Payment Recovery", "Taxes and other related matters"],
      // outcomes: "Achieve 90%+ adoption rates"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "We start with deep-dive consultations to map your goals, challenges, and infrastructure, building the foundation for your success."
    },
    {
      step: "02",
      title: "Solution Design",
      description: "We craft a customized roadmap with ROI-driven planning and optimal technology/vendor selection for maximum impact."
    },
    {
      step: "03",
      title: "Execution & Deployment",
      description: "Our team then manages end-to-end procurement, installation, and hands-on training while guiding your team through change."
    },
    {
      step: "04",
      title: "Optimization & Support",
      description: "Finally, we monitor performance, drive continuous improvements, and provide 24/7 advisory access to keep you ahead."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-consulting-lightest-blue to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Our Consulting Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
            At <span className="font-bold text-blue-400">OptiTech Consulting Ltd</span>, we go beyond temporary fixes to deliver future-proof IT strategies 
            that drive measurable growth. Our consulting services bridge the gap between your business objectives and cutting-edge technology.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-consulting-blue hover:bg-consulting-light-blue text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardHeader className="text-center pb-4">
                  <div className="mb-4 flex justify-center">
                    <div className="w-20 h-20 bg-consulting-lighter-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-600 text-center">
                    {service.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* <div className="bg-consulting-lightest-blue p-4 rounded-lg">
                    <p className="text-sm font-medium text-consulting-blue">
                      Expected Outcome: {service.outcomes}
                    </p>
                  </div> */}

                  <Button 
                    asChild
                    className="w-full bg-consulting-blue hover:bg-consulting-light-blue text-white transition-all duration-300"
                  >
                    <Link to="/contact">
                      Inquire About This Service
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Proven Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a structured approach that ensures consistent results and delivers tailored solutions with precision, transparency, and measurable impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-consulting-light-blue z-0"></div>
                )}
                
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative z-10">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-consulting-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-consulting-blue to-consulting-light-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-consulting-lighter-blue mb-8 max-w-2xl mx-auto">
            Let's discuss how our consulting services can help you achieve your business objectives and drive sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-white text-consulting-blue hover:bg-gray-100 px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Link to="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-consulting-blue px-8 py-4 text-lg rounded-lg transition-all duration-300"
            >
              <Link to="/industries">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
