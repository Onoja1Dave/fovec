import React from 'react';
import aboutImg from "../assets/about.jpg";
import { Button } from './ui/Button';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image Side - Responsive: Full width on mobile, half on desktop */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-accent translate-x-4 translate-y-4 rounded-2xl -z-10 hidden md:block" />
            <img 
              src={aboutImg}
              alt="FOVEC team providing professional advisory services" 
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </div>

          {/* Text Side - Order 1 on mobile to show text first? No, standard is ok. */}
          <div className="order-1 lg:order-2">
            <span className="text-accent font-bold tracking-wider uppercase text-sm">About Us</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mt-2 mb-6">
              Excellence in Global <br/> Consulting & Facilitation
            </h2>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                FOVEC Global Limited operates strictly as a consulting and facilitation company. 
                Our mission is to bridge gaps between local aspirations and global opportunities.
              </p>
              <ul className="space-y-3 mt-4">
                {[
                  "Legality, Transparency & Ethics First",
                  "Professional Assistance & Service Delivery",
                  "Honesty, Integrity, Documentation & Respect",
                  "Details-Oriented Advisory Approach",
                  "Strong Transnational Partnerships"
                ].map((item, i) => (
                  <li key={i} className="flex items-start bg-gray-50 p-3 rounded-lg">
                    <span className="w-2 h-2 mt-2 mr-3 bg-accent rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <Button variant="outline" className="p-0">
                <a href="#services" className="flex items-center justify-center w-full h-full px-4 py-2">
                  More About Us
                </a>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
