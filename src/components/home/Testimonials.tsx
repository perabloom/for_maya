import React from 'react';
import { Star } from 'lucide-react';
import { SectionHeader } from '../shared/SectionHeader';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Homeowner',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    content: 'Maya Remodeling transformed our outdated kitchen into a modern masterpiece. Their attention to detail and professionalism exceeded our expectations.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Property Manager',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    content: 'We\'ve worked with Maya on multiple properties, and they consistently deliver outstanding results. Their team is reliable, skilled, and a pleasure to work with.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'Real Estate Agent',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    content: 'I recommend Maya Remodeling to all my clients. Their work significantly increases property value and they always complete projects on time.',
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="What Our Clients Say"
          description="Don't just take our word for it - hear from our satisfied clients"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}