import React from "react";
import missionImg from "../assets/Mission.jpg";
import visionImg from "../assets/vision.jpg";

const MissionVision = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
            Mission & Vision
          </h2>
          <p className="mt-4 text-gray-600">
            Guided by purpose, professional service, and integrity.
          </p>
        </div>

        <div className="space-y-24">
          {/* Mission - Text Left, Visual Right */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-1 bg-accent mb-6"></div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To professionally facilitate access to international education,
                training, and global opportunities through transparent, lawful,
                and client-focused consulting services
              </p>
            </div>
            <div className="relative">
              {/* Decorative circle */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-50 rounded-full -z-10"></div>
              <div className="aspect-w-4 aspect-h-3 bg-gray-100 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                {/* Mission Image */}
                <div className="w-full h-80">
                  <img
                    src={missionImg}
                    alt="Our Mission"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Vision - Visual Left, Text Right */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-green-50 rounded-full -z-10"></div>
              <div className="aspect-w-4 aspect-h-3 bg-gray-100 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                {/* Placeholder for Vision Image */}
                <div className="w-full h-80">
                  <img
                    src={visionImg}
                    alt="Our Vision"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="w-16 h-1 bg-accent mb-6"></div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To become a trusted African consulting and facilitation partner
                for global institutions, embassies, and organizations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
