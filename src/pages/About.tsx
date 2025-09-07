import { Card, CardContent } from '@/components/ui/card';
import { Star, Users, Scale, Lightbulb, HeartHandshake } from 'lucide-react';
import MeetingImage from './Images/Meeting.jpg';
import CEOImage from './Images/CEO 1.png';
import { useState, useEffect, useRef } from 'react';

// Custom hook for counting animation
const useCountUp = (end: number, duration: number = 2000, shouldStart: boolean = false) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!shouldStart || hasStarted) return;
    
    setHasStarted(true);
    let startTime: number;
    const startValue = 0;
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * (end - startValue) + startValue);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration, shouldStart, hasStarted]);

  return count;
};

// Custom hook for intersection observer
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, {
      threshold: 0.3,
      ...options,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isIntersecting] as const;
};

// Counter component for individual stats
const AnimatedCounter = ({ 
  targetNumber, 
  suffix = '', 
  label, 
  shouldAnimate 
}: { 
  targetNumber: number; 
  suffix?: string; 
  label: string; 
  shouldAnimate: boolean;
}) => {
  const count = useCountUp(targetNumber, 2000, shouldAnimate);
  
  return (
    <div className="text-center">
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-consulting-blue mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm sm:text-base text-gray-600">
        {label}
      </div>
    </div>
  );
};

const About = () => {
  const [statsRef, isStatsVisible] = useIntersectionObserver();

  const values = [
    {
      icon: <Star className="w-8 h-8 text-consulting-blue" />,
      title: "Excellence",
      description: "We commit to delivering exceptional quality in every service we offer."
    },
    {
      icon: <Users className="w-8 h-8 text-consulting-blue" />,
      title: "Client-Centricity",
      description: "Our clients' success is our top priority; we tailor our solutions to ensure they meet specific client goals."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-consulting-blue" />,
      title: "Innovation",
      description: "We embrace innovative approaches to training and capacity building to meet evolving industry needs."
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-consulting-blue" />,
      title: "Collaboration",
      description: "We believe in the power of teamwork and collaboration, both internally and with our clients."
    },
    {
      icon: <Scale className="w-8 h-8 text-consulting-blue" />,
      title: "Integrity",
      description: "We uphold the highest standards of integrity and transparency in all our dealings."
    }
  ];

  const timeline = [
    { event: "Founded with Purpose", description: "Established to revolutionize IT capabilities across Nigeria's public and private sectors." },
    { event: "Built on Trust", description: "Evolved into a premier IT consulting partner by delivering cutting-edge solutions that drive efficiency and innovation."},
    { event: "Sector Wide Expansion", description: "Expanded services to empower clients across 5+ critical industries: government, finance, healthcare, education, and telecom." },
    { event: "Global Partnerships Forged", description: "Secured alliances with industry leaders Microsoft, Cisco, AWS, and CompTIA to offer globally recognized certifications." },
    { event: "Holistic Service Integration", description: "Unified training, procurement, and consulting into end-to-end solutions from cybersecurity to disaster recovery." },
    { event: "Anchored in Core Values", description: "Sustained growth through unwavering commitment to integrity, excellence, and client-centric innovation." }
  ];

  const stats = [
    { targetNumber: 0, suffix: '', customDisplay: 'Decades', label: "Years Experience" },
    { targetNumber: 100, suffix: '+', label: "Successful Projects" },
    { targetNumber: 50, suffix: '+', label: "Clients Served" }
  ];

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-consulting-lightest-blue to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              About <span className="font-bold text-blue-400">OptiTech Consulting Limited</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 px-4 leading-relaxed">
              At <span className="font-bold text-blue-400">OptiTech Consulting Ltd</span>, we employ a holistic approach to training and capacity
              building, combining cutting-edge methodologies with practical, hands-on experiences. 
              Our programs are designed by industry subject matter experts and delivered by seasoned 
              trainers who bring real-world insights and wealth of knowledge to every session.
            </p>
            <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-12">
              {stats.map((stat, index) => (
                <div key={index}>
                  {stat.customDisplay ? (
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-consulting-blue mb-2">
                        {stat.customDisplay}
                      </div>
                      <div className="text-sm sm:text-base text-gray-600">
                        {stat.label}
                      </div>
                    </div>
                  ) : (
                    <AnimatedCounter
                      targetNumber={stat.targetNumber}
                      suffix={stat.suffix}
                      label={stat.label}
                      shouldAnimate={isStatsVisible}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-400 mb-3 sm:mb-4 md:mb-6 leading-tight">Our Vision</h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                To become a leading IT consulting and solutions provider recognized for our commitment to excellence, innovation,
                and client-centricity, setting new standards in technology training, equipment procurement, and IT consulting.
              </p> 
              
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-400 mb-3 sm:mb-4 md:mb-6 leading-tight mt-6 sm:mt-8">Our Mission</h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Our mission is to deliver comprehensive IT solutions and training that bridge the technology 
                skills gap, improve operational efficiency, and drive sustainable growth for our clients. 
                We are dedicated to creating value through innovative solutions, quality products, and expert 
                services that empower organizations and professionals to succeed in a digital-first world.
              </p>
            </div>
            <div className="relative mt-6 sm:mt-8 lg:mt-0">
              <img 
                src={MeetingImage}
                alt="Professional consulting team"
                className="w-full rounded-xl sm:rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-consulting-blue/10 rounded-xl sm:rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">Our Core Values</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
              These values guide every decision we make and every relationship we build.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 md:gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-consulting-lighter-blue rounded-lg flex items-center justify-center">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2 leading-tight">
                    {value.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">Our Journey</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
              <span className="font-bold text-blue-400">OptiTech Consulting Limited</span> began with a mission to revolutionize IT capabilities across sectors. 
              Today, we stand as a premier IT solutions provider.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line - Mobile optimized */}
              <div className="absolute left-2 sm:left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-consulting-light-blue"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-6 sm:mb-8 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Timeline dot - Mobile optimized */}
                  <div className="absolute left-2 sm:left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-consulting-blue rounded-full border-2 sm:border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content - Mobile optimized */}
                  <div className={`ml-6 sm:ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:pl-8'}`}>
                    <div className="bg-white p-3 sm:p-4 md:p-6 rounded-lg shadow-lg border border-gray-100">
                      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-900 mb-2 leading-tight">{item.event}</h3>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    {/* Team Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-consulting-lightest-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">Leadership Team</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
              Meet the experienced professionals leading our mission to transform businesses worldwide.
            </p>
          </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
              {[
                {
                  name: "Asiwaju Olukanmi Ayokanmi, FCPA",
                  position: "Managing Director/CEO",
                  image: CEOImage                
                },
                // {
                //   name: "Michael Chen",
                //   position: "Chief Strategy Officer",
                //   image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                // },
                // {
                //   name: "Emily Rodriguez",
                //   position: "Chief Operations Officer",
                //   image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h-400&fit=crop&crop=face"
                // }
              ].map((member, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1 leading-tight">
                      <span className="text-sm sm:text-base">Asiwaju Olukanmi Ayokanmi</span><span className="text-xs">, FCPA</span>
                    </h3>
                    <p className="text-sm sm:text-base text-consulting-blue font-medium">
                      {member.position}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default About;