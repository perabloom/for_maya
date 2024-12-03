import React from 'react';
import { Award, Users, Clock, Wrench } from 'lucide-react';

const stats = [
  {
    icon: Award,
    value: '15+',
    label: 'Years Experience',
  },
  {
    icon: Users,
    value: '2,500+',
    label: 'Happy Clients',
  },
  {
    icon: Clock,
    value: '98%',
    label: 'On-Time Completion',
  },
  {
    icon: Wrench,
    value: '100%',
    label: 'Satisfaction Rate',
  },
];

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Your Trusted Partner in Home Transformation
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              At Maya Remodeling, we've been transforming homes and exceeding expectations
              since 2008. Our commitment to quality craftsmanship and customer satisfaction
              has made us a leading name in the remodeling industry.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We take pride in our attention to detail, professional team, and the lasting
              relationships we build with our clients. Every project is handled with care,
              precision, and dedication to achieving your vision.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d"
              alt="Team at work"
              className="rounded-lg shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1523413363574-c30aa1c2a516"
              alt="Finished project"
              className="rounded-lg shadow-lg mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}