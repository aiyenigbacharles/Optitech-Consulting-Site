
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PartnerSlider } from '@/components/PartnerSlider';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, Users, Target, Zap } from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: <TrendingUp className="w-8 h-8 text-consulting-blue" />,
      title: "Strategic Growth",
      description: "Transform your organization with our expert IT roadmap development and digital transformation advisory services, driving scalability, efficiency, & innovation."
    },
    {
      icon: <Users className="w-8 h-8 text-consulting-blue" />,
      title: "Expert Team",
      description: "Industry-certified experts (Microsoft, Cisco, AWS, CompTIA) with sector-specific insights for finance, healthcare, government, and education"
    },
    {
      icon: <Target className="w-8 h-8 text-consulting-blue" />,
      title: "Targeted Solutions",
      description: "Customized corporate training programs, end-to-end IT procurement services, and expert consulting solutions including cybersecurity risk assessments, system integration, and disaster recovery planning."
    },
    {
      icon: <Zap className="w-8 h-8 text-consulting-blue" />,
      title: "Rapid Implementation",
      description: "Flexible training options, efficient procurement services, and agile consulting solutions that combine cutting-edge methodologies with actionable strategies."
    }
  ];

  const stats = [
    { number: "5+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Professionals Trained" },
    { number: "Decades", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-consulting-lightest-blue via-white to-consulting-lighter-blue overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-consulting-blue/10 rounded-full animate-float"></div>
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-consulting-light-blue/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto px-4 pt-20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
                Excellence 
                <span className="text-consulting-blue"> and</span> Innovation
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <span className="font-bold text-blue-400">OptiTech Consulting Limited</span> is a trusted IT solutions provider, offering expert training, infrastructure, 
                and advisory services to individuals, businesses, and government institutions. 
                We drive innovation and efficiency through advanced technology.
              </p>

              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <Button 
                  asChild
                  size="lg"
                  className="bg-consulting-blue hover:bg-consulting-light-blue text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Link to="/contact">
                    Get Started Today
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-consulting-blue text-consulting-blue hover:bg-consulting-blue hover:text-white px-8 py-4 text-lg rounded-lg transition-all duration-300"
                >
                  <Link to="/services">Learn More</Link>
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-600">Trusted by several clients</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-600">98% success rate</span>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <img 
                src="/Training.jpg"
                alt="Professional consulting team"
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
              {/* <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Average Growth</p>
                    <p className="text-2xl font-bold text-gray-900">+95%</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-consulting-blue">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-consulting-lighter-blue text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="font-bold text-blue-400">OptiTech Consulting?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partner with <span className="font-bold text-blue-400">OptiTech</span> to transform your technological capabilities. We commit to integrity,
              innovation, and your success delivering measurable results across every engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 bg-consulting-lighter-blue rounded-lg flex items-center justify-center">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-consulting-blue to-consulting-light-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-consulting-lighter-blue mb-8 max-w-2xl mx-auto">
            Join hundreds of successful companies that have accelerated their growth with our expert consulting services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-white text-consulting-blue hover:bg-gray-100 px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Link to="/contact">
                Start Your Transformation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-consulting-blue px-8 py-4 text-lg rounded-lg transition-all duration-300"
            >
              <Link to="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <PartnerSlider />
    </div>
  );
};

export default Index;
