import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const NotFound = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  const scrollToSection = (id: string) => {
    window.location.href = '/#' + id;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-serif font-bold text-lg">R</span>
            </div>
            <div>
              <h1 className="font-serif font-bold text-black hidden md:block">The Royalty</h1>
              <p className="text-gold-500 text-xs font-semibold">Beauty Salon</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-gold-500 font-medium transition">Services</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-gold-500 font-medium transition">About</button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-gold-500 font-medium transition">Gallery</button>
            <button onClick={() => scrollToSection('booking')} className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-2 rounded-lg font-medium transition">Book Now</button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 hover:text-gold-500 font-medium">Services</button>
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-gold-500 font-medium">About</button>
              <button onClick={() => scrollToSection('gallery')} className="text-left text-gray-700 hover:text-gold-500 font-medium">Gallery</button>
              <button onClick={() => scrollToSection('booking')} className="bg-gold-500 text-white px-6 py-2 rounded-lg font-medium w-full">Book Now</button>
            </div>
          </div>
        )}
      </nav>

      {/* Content */}
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          <h1 className="heading-serif text-6xl md:text-7xl text-black mb-4">404</h1>
          <p className="text-2xl md:text-3xl text-gray-800 mb-4 font-semibold">Page Not Found</p>
          <p className="text-lg text-gray-600 mb-8">
            The page you're looking for doesn't exist. This page is currently under development. If you'd like us to create specific content for this section, please let us know!
          </p>
          <a href="/" className="inline-block btn-gold">
            ← Back to Home
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm">
          <p>&copy; 2024 The Royalty Beauty Salon. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default NotFound;
