import React from "react";

const partners = [
"Federal ministry of education (MOE)",
"Federal Ministry of foreign affairs (MOFA)",
"China embassy",
"Portugal embassy",
"India embassy",
];

const Partners = () => {
  return (
    <section className="py-10 bg-gray-50 border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
          Our Global Network
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex space-x-12 items-center">
          {/* Double the list to create seamless loop */}
          {[...partners, ...partners].map((partner, index) => (
            <span
              key={index}
              className="text-2xl font-serif font-bold text-gray-300 hover:text-primary transition-colors cursor-pointer"
            >
              {partner}
            </span>
          ))}
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex space-x-12 items-center">
          {[...partners, ...partners].map((partner, index) => (
            <span
              key={`dup-${index}`}
              className="text-2xl font-serif font-bold text-gray-300 hover:text-primary transition-colors cursor-pointer"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
