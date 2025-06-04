import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Download, Menu, X, Home, Star, Users, Phone } from "lucide-react";

interface NavbarProps {
  downloadUrl: string;
}

const Navbar: React.FC<NavbarProps> = ({ downloadUrl }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "الرئيسية", href: "#home", icon: Home },
    { name: "المميزات", href: "#features", icon: Star },
    { name: "آراء الطلاب", href: "#testimonials", icon: Users },
    { name: "تواصل معنا", href: "#contact", icon: Phone }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-white/20'
          : 'bg-black/20 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg border border-white/20">
                <img
                  src="https://i.ibb.co/rK72d17L/app-1.png"
                  alt="لوجو السهم"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-gray-800' : 'text-white drop-shadow-lg'
                }`}>
                  السهم
                </h1>
                <p className={`text-xs transition-colors duration-300 ${
                  isScrolled ? 'text-gray-600' : 'text-blue-100 drop-shadow-md'
                }`}>
                  للتسكين الطلابي
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
                    isScrolled
                      ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                      : 'text-blue-100 hover:text-white hover:bg-white/10 drop-shadow-md'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="font-medium">{item.name}</span>
                </button>
              ))}
            </div>

            {/* Desktop Download Button */}
            <div className="hidden md:block">
              <Button 
                asChild 
                className={`btn-gradient-primary rounded-full shadow-lg transition-all duration-300 hover:scale-105 ${
                  isScrolled ? 'shadow-glow-purple' : ''
                }`}
              >
                <a href={downloadUrl} download>
                  <Download className="ml-2 w-4 h-4" />
                  حمّل التطبيق
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white drop-shadow-lg'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white drop-shadow-lg'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-lg border-t border-white/20 shadow-lg">
            <div className="container mx-auto px-4 py-4">
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(item.href)}
                    className="flex items-center gap-3 w-full px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </button>
                ))}
                
                {/* Mobile Download Button */}
                <div className="pt-4 border-t border-gray-200">
                  <Button 
                    asChild 
                    className="btn-gradient-primary w-full rounded-full shadow-lg"
                  >
                    <a href={downloadUrl} download>
                      <Download className="ml-2 w-5 h-5" />
                      حمّل التطبيق مجاناً
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Scroll to Top Button */}
      {isScrolled && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-20 right-6 z-40 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center border border-gray-200"
        >
          <img
            src="https://i.ibb.co/rK72d17L/app-1.png"
            alt="العودة للأعلى"
            className="w-8 h-8 object-cover rounded-full"
          />
        </button>
      )}
    </>
  );
};

export default Navbar;
