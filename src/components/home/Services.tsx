import React from 'react';
import { Paintbrush, Home, Hammer, Shield } from 'lucide-react';

const services = [
  {
    icon: Paintbrush,
    title: 'Painting Services',
    description: 'Expert interior and exterior painting with premium materials and flawless finish.',
  },
  {
    icon: Home,
    title: 'Home Remodeling',
    description: 'Complete kitchen and bathroom renovations, custom carpentry, and more.',
  },
  {
    icon: Hammer,
    title: 'Hardwood Flooring',
    description: 'Installation, refinishing, and restoration of hardwood floors.',
  },
  {
    icon: Shield,
    title: 'Quality Guarantee',
    description: '100% satisfaction guaranteed with our professional workmanship.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive remodeling and painting services to transform your space
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}