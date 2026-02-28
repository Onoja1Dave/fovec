import React from 'react';
import { ShieldCheck, Scale, FileCheck } from 'lucide-react';

const Compliance = () => {
  return (
    <section id="compliance" className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-wider uppercase text-sm">Our Core Values</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-2">Compliance & Ethics</h2>
          <p className="mt-4 text-blue-100 max-w-3xl mx-auto text-lg">
            FOVEC Global Limited operates strictly as a consulting and facilitation company. 
            We do not guarantee admissions or visa approvals. All services are delivered in full compliance with Nigerian laws and host-country regulations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: ShieldCheck,
              title: "Zero Tolerance for Fraud",
              text: "We maintain strict verification processes for all documents and credentials."
            },
            {
              icon: Scale,
              title: "Regulatory Adherence",
              text: "Our operations align with global education standards and immigration policies."
            },
            {
              icon: FileCheck,
              title: "Transparent Processes",
              text: "No hidden fees or misleading promises. We prioritize clarity at every step."
            }
          ].map((item, i) => (
            <div key={i} className="bg-blue-900/50 p-8 rounded-xl border border-blue-800 hover:border-accent transition-colors">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-accent mb-6">
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-blue-200 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Compliance;
