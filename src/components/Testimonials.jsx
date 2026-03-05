import React from 'react';
import { Card } from './ui/Card';
import { Star } from 'lucide-react';
import testimony1 from '../assets/testimony1.jpg';
import testimony2 from '../assets/testimony2.jpg';
import testimony3 from '../assets/testimony3.jpg';

const testimonials = [
  {
    name: "Dr. Chibuzor A.",
    role: "University Lecturer",
    text: "FOVEC's guidance for my PhD application was invaluable. Their attention to detail in the documentation process set them apart.",
    image: testimony1
  },
  {
    name: "Mr. Abubakar .",
    role: "Graduate Student (UK)",
    text: "Professional, honest, and timely. They didn't just process my application; they advised me on the best career path.",
    image: testimony2
  },
  {
    name: "Sarah james.",
    role: "Parent",
    text: "As a parent sending my child abroad for the first time, FOVEC gave me peace of mind with their transparency and support.",
    image: testimony3
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card key={i} className="p-8 text-center hover:-translate-y-1">
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(5)].map((_, starI) => (
                  <Star key={starI} size={16} className="text-accent fill-accent" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{t.text}"</p>
              
              <div className="flex items-center justify-center space-x-4">
                <img src={t.image} alt={`Portrait of ${t.name}, ${t.role}`} className="w-12 h-12 rounded-full object-cover border-2 border-accent" />
                <div className="text-left">
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
