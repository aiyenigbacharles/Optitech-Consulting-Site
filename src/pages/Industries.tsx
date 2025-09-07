// Industries.tsx

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Building, Heart, GraduationCap, Smartphone, Landmark, Building2, ArrowRight, CheckCircle } from 'lucide-react';
import CountUp from 'react-countup'; // --- 1. IMPORT CountUp ---

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

  // --- 2. ADJUST the successMetrics array for CountUp ---
  // We change `value` to `end` and add a `suffix` property
  const successMetrics = [
    { metric: <b>Industry Certifications</b>, end: 10, suffix: "+", description: "Microsoft, CompTIA, AWS, Cisco..." },
    { metric: <b>Professionals Trained</b>, end: 50, suffix: "+", description: "Our track record of success & measurable improvements" },
    { metric: <b>Successful IT Procurements</b>, end: 50, suffix: "+", description: "End-to-End procurement services & strong vendor partnerships" },
    { metric: <b>Years Team Experience</b>, end: 10, suffix: "+", description: "The combined team experience from our professionals & seasoned trainers." }
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
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-consulting-lightest-blue to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Industries We Serve
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 px-4 leading-relaxed">
              At <span className="font-bold text-blue-400">OptiTech Consulting Ltd</span>, we deliver precision-engineered IT solutions tailored to your industry's unique challenges, 
              combining cross-sector expertise with deep regulatory knowledge to drive efficiency, security, and innovation.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-8 mt-6 sm:mt-8 md:mt-12">
              {successMetrics.map((item, index) => (
                <div key={index} className="text-center px-2">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-consulting-blue mb-1 sm:mb-2">
                    <CountUp
                      end={item.end}
                      duration={2.5}
                      suffix={item.suffix}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-gray-900 leading-tight">{item.metric}</div>
                  <div className="text-xs text-gray-600 leading-tight hidden sm:block">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 md:gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardHeader className="text-center pb-3 sm:pb-4">
                  <div className="mb-3 sm:mb-4 flex justify-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-consulting-lighter-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {industry.icon}
                    </div>
                  </div>
                  <CardTitle className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
                    {industry.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 text-center leading-relaxed">
                    {industry.description}
                  </p>
                  
                  <div>
                    <h4 className="text-xs sm:text-sm md:text-base font-semibold text-gray-900 mb-2 sm:mb-3">Common Challenges:</h4>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {industry.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-gray-600 leading-relaxed">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    asChild
                    className="w-full bg-consulting-blue hover:bg-consulting-light-blue text-white transition-all duration-300 text-xs sm:text-sm md:text-base py-2 sm:py-3"
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
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-12 lg:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">Workshops & Training</h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
                At <span className="font-bold text-blue-400">OptiTech Consulting Ltd</span>, we deliver cutting-edge workshops and training programs designed to empower 
                professionals, teams, and organizations with the skills they need to thrive in a fast-paced digital world. 
                Below is a case study of one of our successful training programs.
              </p>
            </div>

            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative flex items-center justify-center bg-gray-100 p-3 sm:p-4 order-2 lg:order-1">
                  <img 
                    src={MeetingImage} 
                    alt="Case study visualization"
                    className="w-full h-48 sm:h-64 lg:h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
                <CardContent className="p-4 sm:p-6 md:p-8 lg:p-12 order-1 lg:order-2">
                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-gray-900 mb-2 leading-tight">Building Capacity to Enhance Transparency, Efficiency & 
                        Accountability in Procurement processes through the Adoption of Science, Technology & Innovation (STI).</h3>
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-blue-500">National Centre for Technology Management (NACETEM)</p>
                    </div>
                    
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
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

                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">Introduction to Technology-Enabled Procurement Platforms</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed"> Strategies for Reducing Procurement Fraud through STI</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">Digital Tools for Transparent Vendor Management</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">Workshops on Compliance, Accountability, & Open Contracting</span>
                      </div>
                    </div>
                    
                    <Button 
                      asChild
                      size="lg"
                      className="bg-consulting-blue hover:bg-consulting-light-blue text-white w-full sm:w-auto text-sm sm:text-base py-2 sm:py-3"
                    >
                      <Link to="/contact">
                        Start Your Transformation
                        <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
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
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">Glimpses From Our Training Sessions</h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
                  We believe in practical, hands-on learning experiences that create lasting impact. 
                  Here's a look inside our dynamic and collaborative workshops.
              </p>
          </div>
        </div>

        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_32px,_black_calc(100%-32px),transparent_100%)] sm:[mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)] md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] group">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-2 sm:[&_li]:mx-4 [&_img]:max-w-none animate-scroll group-hover:[animation-play-state:paused]">
                {/* Render the images twice for the infinite loop effect */}
                {[...trainingGallery, ...trainingGallery].map((item, index) => (
                    <li key={index}>
                        <img 
                            src={item.imgSrc} 
                            alt={item.alt}
                            className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-auto rounded-lg shadow-md"
                        />
                    </li>
                ))}
            </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-consulting-blue to-consulting-light-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-consulting-lighter-blue mb-6 sm:mb-8 max-w-2xl mx-auto px-4 leading-relaxed">
            Join leading companies in your industry who have achieved remarkable results with our consulting expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Button 
              asChild
              size="lg"
              className="bg-white text-consulting-blue hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg w-full sm:w-auto"
            >
              <Link to="/contact">
                Discuss Your Project
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-consulting-blue px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg rounded-lg transition-all duration-300 bg-transparent w-full sm:w-auto"
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