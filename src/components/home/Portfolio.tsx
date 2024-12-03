import React from 'react';

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858',
    category: 'Kitchen Remodeling',
    title: 'Modern Kitchen Renovation',
  },
  {
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14',
    category: 'Bathroom',
    title: 'Luxury Bathroom Makeover',
  },
  {
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f',
    category: 'Flooring',
    title: 'Hardwood Floor Installation',
  },
  {
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
    category: 'Painting',
    title: 'Interior Painting Project',
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Recent Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take a look at some of our finest work and see the quality we deliver
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 p-6">
                  <p className="text-blue-400 font-medium mb-2">{project.category}</p>
                  <h3 className="text-white text-xl font-bold">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}