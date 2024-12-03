import React from 'react';
import { Home, Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <Home className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Maya Remodeling</h1>
              <p className="text-sm text-gray-600">Quality Painting & Remodeling</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink onClick={() => scrollToSection('services')}>Services</NavLink>
            <NavLink onClick={() => scrollToSection('portfolio')}>Portfolio</NavLink>
            <NavLink onClick={() => scrollToSection('about')}>About</NavLink>
            <Link to="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">Blog</Link>
            <NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          {/* Contact Button */}
          <a
            href="tel:+1234567890"
            className="hidden md:flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>Call Now</span>
          </a>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              <MobileNavLink onClick={() => scrollToSection('services')}>
                Services
              </MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection('portfolio')}>
                Portfolio
              </MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection('about')}>
                About
              </MobileNavLink>
              <Link 
                to="/blog" 
                className="text-gray-600 hover:text-blue-600 transition-colors block px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <MobileNavLink onClick={() => scrollToSection('contact')}>
                Contact
              </MobileNavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

function NavLink({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className="text-gray-600 hover:text-blue-600 transition-colors"
    >
      {children}
    </button>
  );
}

function MobileNavLink({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className="text-gray-600 hover:text-blue-600 transition-colors block px-4 py-2 text-left w-full"
    >
      {children}
    </button>
  );
}