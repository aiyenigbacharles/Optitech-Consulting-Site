import { Card, CardContent } from '@/components/ui/card';
import { Star, Users, Scale, Lightbulb, HeartHandshake } from 'lucide-react';
import MeetingImage from './Images/Meeting.jpg';
import CEOImage from './Images/CEO 1.png';


const About = () => {
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

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-consulting-lightest-blue to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About <span className="font-bold text-blue-400">OptiTech Consulting Limited</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              At <span className="font-bold text-blue-400">OptiTech Consulting Ltd</span>, we employ a holistic approach to training and capacity
              building, combining cutting-edge methodologies with practical, hands-on experiences. 
              Our programs are designed by industry subject matter experts and delivered by seasoned 
              trainers who bring real-world insights and wealth of knowledge to every session.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-consulting-blue mb-2">Decades</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-consulting-blue mb-2">100+</div>
                <div className="text-gray-600">Successful Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-consulting-blue mb-2">50+</div>
                <div className="text-gray-600">Clients Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
               
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-400 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6">
                To become a leading IT consulting and solutions provider recognized for our commitment to excellence, innovation,
                and client-centricity, setting new standards in technology training, equipment procurement, and IT consulting.
              </p> 
              <br></br>
              
              <h2 className="text-4xl font-bold text-blue-400 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our mission is to deliver comprehensive IT solutions and training that bridge the technology 
                skills gap, improve operational efficiency, and drive sustainable growth for our clients. 
                We are dedicated to creating value through innovative solutions, quality products, and expert 
                services that empower organizations and professionals to succeed in a digital-first world.
              </p>
              <div className="space-y-4">
              </div>
            </div>
            <div className="relative">
        <img 
          src={MeetingImage} // Use the imported variable
          alt="Professional consulting team"
          className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
        />
              <div className="absolute inset-0 bg-consulting-blue/10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide every decision we make and every relationship we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols- gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 bg-consulting-lighter-blue rounded-lg flex items-center justify-center">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              <span className="font-bold text-blue-400">OptiTech Consulting Limited</span> began with a mission to revolutionize IT capabilities across sectors. 
              Today, we stand as a premier IT solutions provider.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-consulting-light-blue"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-consulting-blue rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                      {/* <div className="text-consulting-blue font-bold text-lg mb-2">{item.year}</div> */}
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.event}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    {/* Team Section */}
      <section className="py-20 bg-consulting-lightest-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals leading our mission to transform businesses worldwide.
            </p>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-8xl mx-auto">
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
                  <CardContent className="p-6 text-center">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      <span className="text-base">Asiwaju Olukanmi Ayokanmi</span><span className="text-xs">, FCPA</span>
                    </h3>
                    <p className="text-consulting-blue font-medium">
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