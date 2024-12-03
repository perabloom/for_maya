import React from 'react';
import { SectionHeader } from '../shared/SectionHeader';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from '../shared/Button';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts';

export function Blog() {
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Latest Articles & Tips"
          description="Stay updated with the latest trends, tips, and insights in home remodeling"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                  <span className="mx-2">•</span>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <Link to={`/blog/${post.slug}`}>
                  <Button
                    variant="primary"
                    icon={ArrowRight}
                    className="w-full"
                  >
                    Read More
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}