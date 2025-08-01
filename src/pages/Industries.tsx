import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Building, Heart, GraduationCap, Smartphone, Landmark, Building2, ArrowRight, CheckCircle } from 'lucide-react';

// Main image for the case study
import MeetingImage from './Images/workshop2.jpg';

// --- (NEW) Import all 9 of your workshop images here ---
// Make sure to replace these paths with the actual location of your images
import TrainingImage1 from './Images/workshop1.jpg';
import TrainingImage2 from './Images/workshop2.jpg';
import TrainingImage3 from './Images/workshop3.jpg';
import TrainingImage4 from './Images/workshop4.jpg';
import TrainingImage5 from './Images/workshop5.jpg';
import TrainingImage6 from './Images/workshop6.jpg';
import TrainingImage7 from './Images/workshop7.jpg';
import TrainingImage8 from './Images/workshop8.jpg';
import TrainingImage9 from './Images/workshop9.jpg';


const Industries = () => {
  const industries = [
    {
      icon: <Building className="w-12 h-12 text-consulting-blue" />,
      title: "Financial Services",
      description: "Transform banking, insurance, & fintech operations for the digital age.",
      challenges: ["Fraud & Cyberattack Vulnerabilities", "Real-Time Transaction Processing Demands", "Regulatory Compliance"],
      // caseStudy: "Helped a regional bank increase digital adoption by 300% and reduce operational costs by 25%."
    },
    {
      icon: <Heart className="w-12 h-12 text-consulting-blue" />,
      title: "Healthcare",
      description: "Optimize healthcare delivery while improving patient outcomes & operational efficiency.",
      challenges: ["Patient Data Breach Risks", "Patient Data Disaster Recovery", "EHR System Downtime"],
      // caseStudy: "Assisted a hospital network in reducing patient wait times by 40% and improving satisfaction scores by 35%."
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-consulting-blue" />,
      title: "Education",
      description: "Modernize educational institutions & enhance learning experiences.",
      challenges: ["Digital learning platforms", "Outdated Campus IT Networks", "Operational efficiency"],
      // caseStudy: "Enabled a university to transition to hybrid learning, increasing student satisfaction by 45%."
    },
    {
      icon: <Smartphone className="w-12 h-12 text-consulting-blue" />,
      title: "Telecommunication",
      description: "Engineering always-on connectivity.",
      challenges: ["Network integration & optimization issues", "Data availability & downtime", "Security threats & system inefficiencies"],
      // caseStudy: "Guided a SaaS startup to 10x revenue growth and successful Series B funding."
    },
    {
      icon: <Landmark className="w-12 h-12 text-consulting-blue" />,
      title: "Government",
      description: "Modernizing governance with compliance first tech",
      challenges: ["Legacy systems & slow digitization", "Vulnerability to cyber attacks", "Procurement inefficiencies"],
      // caseStudy: "Helped a manufacturer reduce production costs by 30% through lean implementation and automation."
    },
    {
      icon: <Building2 className="w-12 h-12 text-consulting-blue" />,
      title: "Corporate/Private Sector",
      description: "Bridging technology & strategy to empower businesses with digital skills.",
      challenges: ["Misalignment between IT & business goals", "Skill gaps in workforce", "Vendor & procurement challenges"],
      // caseStudy: "Increased online sales by 200% for a traditional retailer through digital transformation."
    }
  ];

  const successMetrics = [
    { metric: <b>Industry Certifications</b>, value: "10+", description: "Microsoft, CompTIA, AWS, Cisco..." },
    { metric: <b>Professionals Trained</b>, value: "50+", description: "Our track record of success & measurable improvements" },
    { metric: <b>Successful IT Procurements</b>, value: "50+", description: "End-to-End procurement services & strong vendor partnerships" },
    { metric: <b>Years Team Experience</b>, value: "10+", description: "The combined team experience from our professionals & seasoned trainers." }
  ];
  
  const trainingGallery = [
    { imgSrc: TrainingImage1, alt: "Opening Ceremony of Workshop on Code of Conduct and Other Related Matters, facilitated by Go-getters Consulting Ltd, held at Lafia." },
    { imgSrc: TrainingImage2, alt: "Participants at the recent 2-Day Workshop on BUILDING CAPACITY TO ENHANCE TRANSPARENCY, EFFICIENCY, AND ACCOUNTABILITY IN PROCUREMENT PROCESSES THROUGH THE ADOPTION OF SCIENCE, TECHNOLOGY, AND INNOVATION (STI), Organized by NACETEM and facilitated by Go-getters Consulting Ltd, held NARC, Abuja." },
    { imgSrc: TrainingImage3, alt: "Team collaboration session" },
    { imgSrc: TrainingImage4, alt: "Data analysis training" },
    { imgSrc: TrainingImage5, alt: "Networking fundamentals class" },
    { imgSrc: TrainingImage6, alt: "IT professionals in a meeting" },
    { imgSrc: TrainingImage7, alt: "Hands-on lab for cloud services" },
    { imgSrc: TrainingImage8, alt: "Trainer guiding a participant" },
    { imgSrc: TrainingImage9, alt: "Group photo of trained professionals" },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-consulting-lightest-blue to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              At <span className="font-bold text-blue-400">OptiTech Consulting Ltd</span>, we deliver precision-engineered IT solutions tailored to your industry's unique challenges, 
              combining cross-sector expertise with deep regulatory knowledge to drive efficiency, security, and innovation.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {successMetrics.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-consulting-blue mb-2">{item.value}</div>
                  <div className="text-sm font-medium text-gray-900">{item.metric}</div>
                  <div className="text-xs text-gray-600">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardHeader className="text-center pb-4">
                  <div className="mb-4 flex justify-center">
                    <div className="w-20 h-20 bg-consulting-lighter-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {industry.icon}
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {industry.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-600 text-center">
                    {industry.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Common Challenges:</h4>
                    <ul className="space-y-2">
                      {industry.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    asChild
                    className="w-full bg-consulting-blue hover:bg-consulting-light-blue text-white transition-all duration-300"
                  >
                    <Link to="/contact">
                      Discuss Your Project
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Spotlight */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Workshops & Training</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                At <span className="font-bold text-blue-400">OptiTech Consulting Ltd</span>, we deliver cutting-edge workshops and training programs designed to empower 
                professionals, teams, and organizations with the skills they need to thrive in a fast-paced digital world. 
                Below is a case study of one of our successful training programs.
              </p>
            </div>

            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative flex items-center justify-center bg-gray-100 p-4">
                  <img 
                    src={MeetingImage} 
                    alt="Case study visualization"
                    className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                  />
                </div>
                <CardContent className="p-8 lg:p-12">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Building Capacity to Enhance Transparency, Efficiency & 
                        Accountability in Procurement processes through the Adoption of Science, Technology & Innovation (STI).</h3>
                      <p className="text-xl font-bold text-blue-500">National Centre for Technology Management (NACETEM)</p>
                      {/* <p className="text-consulting-black font-medium">Training covered cybersecurity awareness, cloud computing, & health information systems.</p> */}
                    </div>
                    
                    <p className="text-gray-600">
                      Facilitated by <span className="font-bold text-blue-400">OptiTech Consulting Ltd</span>, the training was held at NARC, Abuja. It addressed critical challenges in government procurement, 
                      where outdated processes, lack of digital literacy, and weak compliance mechanisms affected transparency and service delivery. 
                      By introducing tech-driven procurement frameworks, the workshop improved the officers' capacity to adopt STI in procurement reform.
                    </p>

                    {/* <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-consulting-lightest-blue rounded-lg">
                        <div className="text-2xl font-bold text-consulting-blue">₦18M</div>
                        <div className="text-sm text-gray-600">Cost Savings</div>
                      </div>
                      <div className="text-center p-4 bg-consulting-lightest-blue rounded-lg">
                        <div className="text-2xl font-bold text-consulting-blue">42%</div>
                        <div className="text-sm text-gray-600">Efficiency Gain</div>
                      </div>
                    </div> */}

                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">Introduction to Technology-Enabled Procurement Platforms</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700"> Strategies for Reducing Procurement Fraud through STI</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">Digital Tools for Transparent Vendor Management</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">Workshops on Compliance, Accountability, & Open Contracting</span>
                      </div>
                    </div>
                    
                    <Button 
                      asChild
                      size="lg"
                      className="bg-consulting-blue hover:bg-consulting-light-blue text-white"
                    >
                      <Link to="/contact">
                        Start Your Transformation
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Training Gallery Scroller Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Glimpses From Our Training Sessions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We believe in practical, hands-on learning experiences that create lasting impact. 
                  Here's a look inside our dynamic and collaborative workshops.
              </p>
          </div>
        </div>

        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] group">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-scroll group-hover:[animation-play-state:paused]">
                {/* Render the images twice for the infinite loop effect */}
                {[...trainingGallery, ...trainingGallery].map((item, index) => (
                    <li key={index}>
                        <img 
                            src={item.imgSrc} 
                            alt={item.alt}
                            className="h-64 w-auto rounded-lg shadow-md"
                        />
                    </li>
                ))}
            </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-consulting-blue to-consulting-light-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-xl text-consulting-lighter-blue mb-8 max-w-2xl mx-auto">
            Join leading companies in your industry who have achieved remarkable results with our consulting expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-white text-consulting-blue hover:bg-gray-100 px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Link to="/contact">
                Discuss Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-consulting-blue px-8 py-4 text-lg rounded-lg transition-all duration-300 bg-transparent"
            >
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;