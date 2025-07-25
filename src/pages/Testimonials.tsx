import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Quote, Star, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

// Use import.meta.glob to import all images from the Images folder
// The key will be the path, and the value will be a dynamic import function
const images = import.meta.glob('./*.jpg',  { eager: true, query: '?url', import: 'default' });

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      quote: "OptiTech's cybersecurity workshop opened our eyes to vulnerabilities we didn't even know existed. Their approach was practical & empowering.",
      name: "Ngozi Emefiele",
      position: "IT Security Manager",
      company: "Greentech Group",
      image: images['./ngozi.jpg'],
      rating: 5,
      industry: "Technology"
    },
    {
      quote: "We needed a digital transformation partner, not just a consultant. Optitech delivered on infrastructure, training, & ongoing support.",
      name: "Tunde Oladele",
      position: "Head of ICT",
      company: "FCT Ministry of Health",
      image: images['./Tunde.jpg'],
      rating: 5,
      industry: "Healthcare"
    },
    {
      quote: "Working with OptiTech was the best investment we made. Their healthcare optimization strategies reduced our operational costs by 25% while improving patient care quality.",
      name: "Dr. Richard Ekpeyong",
      position: "Chief Operating Officer",
      company: "Zankli Hospital",
      image: images['./richard.jpg'],
      rating: 5,
      industry: "Healthcare"
    },
    {
      quote: "Their customized training program improved our staff productivity by over 35%. You can't fake results like that.",
      name: "Amina Sule",
      position: "Chief Technology Officer",
      company: "Globus Bank PLC",
      image: images['./amina.jpg'],
      rating: 5,
      industry: "Banking"
    },
    {
      quote: "We had compliance concerns in handling digital records. Optitech's advisory and training helped us meet NDPR standards confidently",
      name: "Dr. Yinka Abubakar",
      position: "Director of Operations",
      company: "Medfield Diagnostic Centre",
      image: images['./yinka.jpg'],
      rating: 5,
      industry: "Healthcare"
    },
    {
      quote: "They modernized our learning infrastructure with blended training that truly engaged our lecturers. Optitech gets education",
      name: "Prof. Mark Okon",
      position: "Dean of IT Faculty",
      company: "Baze University",
      image: images['./mark.jpg'],
      rating: 5,
      industry: "Education"
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000); // Change testimonial every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused, testimonials.length]);

  const stats = [
    { number: "98%", label: "Client Satisfaction Rate" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "95%", label: "Would Recommend" },
    { number: "87%", label: "Repeat Clients" }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const handleDotClick = (index: number) => {
    setActiveTestimonial(index);
    setIsPaused(true);
    // Resume auto-scroll after 10 seconds of user inactivity
    setTimeout(() => setIsPaused(false), 10000);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-consulting-lightest-blue to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Client Success Stories
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover how OptiTech Consulting has helped businesses across industries 
              achieve remarkable transformations and sustainable growth.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-consulting-blue mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card 
              className="border-0 shadow-2xl overflow-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <CardContent className="p-12 relative">
                <div className="absolute top-8 left-8">
                  <Quote className="w-12 h-12 text-consulting-blue/20" />
                </div>
                
                <div className="text-center space-y-8">
                  <div className="flex justify-center mb-4">
                    {renderStars(testimonials[activeTestimonial].rating)}
                  </div>
                  
                  <blockquote className="text-2xl md:text-3xl text-gray-900 font-medium leading-relaxed transition-all duration-500 ease-in-out">
                    "{testimonials[activeTestimonial].quote}"
                  </blockquote>
                  
                  <div className="flex items-center justify-center space-x-4 transition-all duration-500 ease-in-out">
                    <img
                      src={testimonials[activeTestimonial].image}
                      alt={testimonials[activeTestimonial].name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <div className="font-semibold text-gray-900 text-lg">
                        {testimonials[activeTestimonial].name}
                      </div>
                      <div className="text-consulting-blue font-medium">
                        {testimonials[activeTestimonial].position}
                      </div>
                      <div className="text-gray-600">
                        {testimonials[activeTestimonial].company}
                      </div>
                    </div>
                  </div>
                  
                  <div className="inline-block bg-consulting-lighter-blue px-4 py-2 rounded-full">
                    <span className="text-consulting-blue font-medium text-sm">
                      {testimonials[activeTestimonial].industry}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial ? 'bg-consulting-blue w-8' : 'bg-gray-300 w-3'
                  }`}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </div>

            {/* Pause/Resume Indicator */}
            <div className="text-center mt-4">
              <p className="text-sm text-gray-500">
                {/* {isPaused ? "Auto-scroll paused" : "Auto-scrolling every 5 seconds"} */}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Read more success stories from businesses that have transformed with our help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="flex space-x-1">
                      {renderStars(testimonial.rating)}
                    </div>
                    <div className="bg-consulting-lighter-blue px-3 py-1 rounded-full">
                      <span className="text-consulting-blue font-medium text-xs">
                        {testimonial.industry}
                      </span>
                    </div>
                  </div>
                  
                  <blockquote className="text-gray-700 leading-relaxed">
                    "{testimonial.quote.length > 150 ? testimonial.quote.substring(0, 150) + '...' : testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center space-x-3 pt-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-consulting-blue">
                        {testimonial.position}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
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
            Join Our Success Stories
          </h2>
          <p className="text-xl text-consulting-lighter-blue mb-8 max-w-2xl mx-auto">
            Ready to become our next success story? Let's discuss how we can help transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-white text-consulting-blue hover:bg-gray-100 px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Link to="/contact">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-consulting-blue px-8 py-4 text-lg rounded-lg transition-all duration-300"
            >
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;