import React from 'react';
import { Card } from './ui/Card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Dr. Chioma A.",
    role: "University Lecturer",
    text: "FOVEC's guidance for my PhD application was invaluable. Their attention to detail in the documentation process set them apart.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Mr. James O.",
    role: "Graduate Student (UK)",
    text: "Professional, honest, and timely. They didn't just process my application; they advised me on the best career path.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Sarah K.",
    role: "Parent",
    text: "As a parent sending my child abroad for the first time, FOVEC gave me peace of mind with their transparency and support.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
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
