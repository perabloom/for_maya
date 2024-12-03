import React from 'react';
import { Header } from '../components/layout/Header';
import { Hero } from '../components/home/Hero';
import { Services } from '../components/home/Services';
import { Portfolio } from '../components/home/Portfolio';
import { About } from '../components/home/About';
import { Testimonials } from '../components/home/Testimonials';
import { Blog } from '../components/home/Blog';
import { Contact } from '../components/home/Contact';

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
    </div>
  );
}