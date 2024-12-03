import React from 'react';
import { Header } from '../components/layout/Header';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Button } from '../components/shared/Button';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

export function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
          
          <article className="max-w-4xl mx-auto">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover rounded-xl mb-8"
            />
            
            <div className="flex items-center text-sm text-gray-500 mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {post.date}
              </div>
              <span className="mx-2">•</span>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {post.readTime}
              </div>
              <span className="mx-2">•</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>
            
            <div className="prose prose-lg max-w-none">
              {post.content}
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}