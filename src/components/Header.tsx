import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/industries' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo - Takes up horizontal space */}
          <Link to="/" className="flex items-center space-x-6 flex-1 max-w-4xl">
            <div className="w-16 h-16 bg-gradient-to-r from-consulting-blue to-consulting-light-blue rounded-lg flex items-center justify-center flex-shrink-0">
                <img 
                  src="./OptiTech Logo - 1.ico" 
                  alt="OptiTech Logo" 
                  className="w-16 h-16 rounded-lg" 
                />
            </div>
            <div className="flex items-baseline space-x-3">
              <span className="text-5xl font-bold text-consulting-blue">OptiTech Consulting Ltd</span>
              {/* <span className="text-2xl text-consulting-blue font-medium">Consulting Ltd</span> */}
              {/* <span className="text-sm text-red-500 font-medium ml-2">RC: 8075000</span> */}
            </div>
          </Link>

          {/* Desktop Navigation - More compact */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-consulting-blue whitespace-nowrap ${
                  isActive(item.href) 
                    ? 'text-consulting-blue border-b-2 border-consulting-blue pb-1' 
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Hidden on smaller screens to save space */}
          <div className="hidden xl:block">
            <Button 
              asChild
              className="bg-consulting-blue hover:bg-consulting-light-blue text-white px-6 py-2 rounded-lg transition-all duration-200 hover:scale-105"
            >
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 flex-shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t shadow-lg">
            <nav className="flex flex-col py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-3 text-sm font-medium transition-colors duration-200 hover:bg-consulting-lighter-blue ${
                    isActive(item.href) ? 'text-consulting-blue bg-consulting-lighter-blue' : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 py-3">
                <Button 
                  asChild
                  className="w-full bg-consulting-blue hover:bg-consulting-light-blue text-white"
                >
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Get Started</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};