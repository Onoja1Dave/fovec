import React from "react";
import { Card } from "./ui/Card";
import {
  GraduationCap,
  Globe,
  FileText,
  Plane,
  Building2,
  BookOpen,
  Users,
  Map,
} from "lucide-react";

const services = [
  {
    title: "Education Advisory",
    description:
      "Personalized academic guidance to help students choose the right institutions, programs, and study pathways locally and internationally.",
    icon: GraduationCap,
  },
  {
    title: "International Study Facilitation",
    description:
      "End-to-end support for international study opportunities, from school selection to successful placement abroad.",
    icon: Globe,
  },
  {
    title: "Admission Documentation",
    description:
      "Professional coordination and review of admission documents to ensure accuracy, compliance, and timely submission.",
    icon: FileText,
  },
  {
    title: "Visa & Mobility Advisory",
    description:
      "Expert guidance on visa processes, travel requirements, and mobility planning for students and professionals.",
    icon: BookOpen,
  },
  {
    title: " Document Authentication",
    description:
      "Support with MOFA and MOE authentication processes to ensure official recognition of academic and legal documents.",
    icon: Map,
  },
  {
    title: "Embassy Legalization",
    description:
      "Efficient coordination with embassies and consulates for document legalization and verification services.",
    icon: Building2,
  },
  {
    title: "Institutional Partnerships",
    description:
      "Facilitating strategic partnerships between institutions, organizations, and international stakeholders.",
    icon: Users,
  },
  {
    title: "Pre-Departure Support",
    description:
      "Comprehensive orientation and client support to prepare individuals for a smooth and successful transition abroad.",
    icon: Plane,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            End-to-End Advisory and Support for Global Education, Mobility, and
            Business Growth.
          </p>
        </div>

        {/* Responsive Grid: 1 col (mobile), 2 col (tablet), 4 col (desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 flex flex-col items-start hover:border-accent/50 group"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-4">
                <service.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
