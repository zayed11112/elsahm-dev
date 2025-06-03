import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import AnimatedSection from './AnimatedSection';

interface Testimonial {
  name: string;
  text: string;
  university: string;
  rating: number;
  avatar?: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length, isAutoPlaying]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span 
        key={i} 
        className={`text-2xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'} animate-pulse`}
        style={{ animationDelay: `${i * 100}ms` }}
      >
        ⭐
      </span>
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-24 h-24 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-75"></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-150"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.1)'}}>
            آراء الطلاب
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ماذا يقول الطلاب عن تجربتهم مع التطبيق وكيف ساعدهم في العثور على السكن المثالي
          </p>
        </AnimatedSection>

        {/* Carousel Container */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Testimonial Card */}
          <AnimatedSection animation="fade-in">
            <Card className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-2xl transition-all duration-500 min-h-[400px]">
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-xl"></div>
              
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-blue-200 opacity-50">
                <Quote className="w-16 h-16" />
              </div>

              <CardContent className="relative z-10 p-12 text-center h-full flex flex-col justify-between">
                <div>
                  {/* Stars */}
                  <div className="flex justify-center mb-8">
                    {renderStars(testimonials[currentIndex]?.rating || 5)}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-2xl md:text-3xl text-gray-700 leading-relaxed mb-8 font-medium">
                    "{testimonials[currentIndex]?.text}"
                  </blockquote>
                </div>
                
                {/* Author Info */}
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg border-2 border-white">
                    <img
                      src="https://i.ibb.co/d09Xb0s9/su.webp"
                      alt="صورة الطالب"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-xl text-gray-800">
                      {testimonials[currentIndex]?.name}
                    </p>
                    <p className="text-gray-600">
                      {testimonials[currentIndex]?.university}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border-white/40 hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
            onClick={goToPrevious}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border-white/40 hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
            onClick={goToNext}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-500 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <AnimatedSection animation="fade-in" delay={600} className="text-center mt-16">
          <div className="inline-flex flex-col md:flex-row items-center gap-4 px-8 py-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/40 shadow-lg">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700 font-medium">تقييم 4.8/5</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-gray-300"></div>
            <span className="text-gray-600 text-sm">من أكثر من 1000 تقييم</span>
            <div className="hidden md:block w-px h-6 bg-gray-300"></div>
            <span className="text-gray-600 text-sm">معدل رضا 95%</span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
