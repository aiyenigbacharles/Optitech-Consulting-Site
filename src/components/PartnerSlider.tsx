
import { useEffect, useState } from 'react';

const partners = [
  // { name: 'Microsoft', logo: 'https://logo.clearbit.com/microsoft.com' },
  // { name: 'Google', logo: 'https://logo.clearbit.com/google.com' },
  // { name: 'Amazon', logo: 'https://logo.clearbit.com/amazon.com' },
  // { name: 'IBM', logo: 'https://logo.clearbit.com/ibm.com' },
  // { name: 'Oracle', logo: 'https://logo.clearbit.com/oracle.com' },
  // { name: 'Salesforce', logo: 'https://logo.clearbit.com/salesforce.com' },
  // { name: 'SAP', logo: 'https://logo.clearbit.com/sap.com' },
  // { name: 'Adobe', logo: 'https://logo.clearbit.com/adobe.com' },
];

export const PartnerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          {/* <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted Partners</h2>
          <p className="text-lg text-gray-600">
            We collaborate with industry leaders to deliver exceptional results
          </p> */}
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex items-center justify-center">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 200}px)` }}
            >
              {/* Double the partners array for seamless infinite scroll */}
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-w-32 max-h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://via.placeholder.com/120x60/3B82F6/FFFFFF?text=${partner.name}`;
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {partners.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-consulting-blue w-8' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
