import React from "react";
import { Button } from "./ui/Button";
import { ArrowRight, Globe } from "lucide-react";
import heroImg from "../assets/Hero.avif";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-b from-blue-50/50 to-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f0f9ff] opacity-40 skew-x-12 transform origin-top-right -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-left animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-primary px-4 py-2 rounded-full mb-6">
              <Globe size={16} className="text-accent" />
              <span className="text-sm font-semibold tracking-wide uppercase">
                Global Education Consulting
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-[1.15] mb-6">
              Facilitating Global <br />
              <span className="text-primary">Education, Mobility,</span> <br />
              and <span className="text-accent">Partnerships</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
              A Nigerian-registered consulting and facilitation company
              delivering transparent, lawful, and client-focused advisory
              services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" className="w-full sm:w-auto p-0">
                <a href="#contact" className="group flex items-center justify-center w-full h-full px-4 py-2">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="ghost" className="w-full sm:w-auto p-0">
                <a href="#about" className="flex items-center justify-center w-full h-full px-4 py-2">
                  Learn More
                </a>
              </Button>
            </div>
          </div>

          {/* Hero Image / Visual */}
          <div className="relative lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-105">
              <div className="w-full h-[400px] lg:h-[500px]">
                <img
                  src={heroImg}
                  alt="FOVEC global education and business consulting meeting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border-l-4 border-accent hidden md:block animate-pulse">
              <p className="text-sm font-bold text-gray-800">Trusted By</p>
              <p className="text-xs text-gray-500">Multiple Institutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
