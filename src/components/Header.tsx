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
        <div className="flex items-center justify-between h-16 md:h-20 lg:h-24">
          {/* Logo - Mobile optimized */}
          <Link to="/" className="flex items-center space-x-2 md:space-x-3 flex-shrink-0 min-w-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-consulting-blue to-consulting-light-blue rounded-lg flex items-center justify-center flex-shrink-0">
                <img 
                  src="./OptiTech Logo - 1.ico" 
                  alt="OptiTech Logo" 
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-lg" 
                />
            </div>
            <div className="flex items-center min-w-0">
              <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-consulting-blue truncate">
                <span className="hidden sm:inline">OptiTech Consulting Ltd</span>
                <span className="sm:hidden">OptiTech</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Improved spacing and alignment */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-base font-medium transition-colors duration-200 hover:text-consulting-blue whitespace-nowrap border-b-2 pb-1 ${
                  isActive(item.href)
                    ? 'border-consulting-blue text-consulting-blue'
                    : 'border-transparent text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Hide on Contact page */}
          {location.pathname !== '/contact' && (
            <div className="hidden xl:block flex-shrink-0">
              <Button 
                asChild
                className="bg-consulting-blue hover:bg-consulting-light-blue text-white px-6 py-2 rounded-lg transition-all duration-200 hover:scale-105"
              >
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          )}

          {/* Mobile Menu Button - Improved touch target */}
          <button
            className="lg:hidden p-3 -mr-3 flex-shrink-0 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu - Enhanced for mobile */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t shadow-xl z-50 max-h-screen overflow-y-auto">
            <nav className="flex flex-col py-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-6 py-4 text-base font-medium transition-colors duration-200 hover:bg-consulting-lighter-blue active:bg-consulting-lighter-blue border-b border-gray-100 last:border-b-0 ${
                    isActive(item.href) ? 'text-consulting-blue bg-consulting-lighter-blue' : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {/* Hide Get Started button in mobile menu when on Contact page */}
              {location.pathname !== '/contact' && (
                <div className="px-6 py-4 border-t border-gray-200">
                  <Button 
                    asChild
                    className="w-full bg-consulting-blue hover:bg-consulting-light-blue text-white py-3 text-base font-medium"
                  >
                    <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Get Started</Link>
                  </Button>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};