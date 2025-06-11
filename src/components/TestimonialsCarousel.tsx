import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote, Star, User } from "lucide-react";

interface Testimonial {
  name: string;
  text: string;
  university: string;
  rating: number;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [activeCard, setActiveCard] = useState(0);

  // Auto-play functionality with smoother timing
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000); // Slightly longer interval for better reading

    return () => clearInterval(interval);
  }, [testimonials.length, isAutoPlaying]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setActiveCard(currentIndex + 1 === testimonials.length ? 0 : currentIndex + 1);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setActiveCard(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setActiveCard(index);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 md:w-5 md:h-5 transition-all duration-300 ${
          i < rating
            ? 'text-yellow-400 fill-yellow-400'
            : 'text-gray-300'
        }`}
        style={{ animationDelay: `${i * 50}ms` }}
      />
    ));
  };

  // Calculate indexes for visible testimonials in the carousel
  const getVisibleIndexes = () => {
    const total = testimonials.length;
    if (total <= 1) return [currentIndex];
    
    // Calculate previous and next indexes with wrap-around
    const prevIndex = currentIndex === 0 ? total - 1 : currentIndex - 1;
    const nextIndex = currentIndex === total - 1 ? 0 : currentIndex + 1;
    
    return [prevIndex, currentIndex, nextIndex];
  };

  const visibleIndexes = getVisibleIndexes();

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-75"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-150"></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(to_right,#3b82f61a_1px,transparent_1px),linear-gradient(to_bottom,#3b82f61a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
            آراء الطلاب
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full shadow-lg"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            تجارب حقيقية من طلاب استخدموا التطبيق ووجدوا سكنهم المثالي
          </p>
        </div>

        {/* Carousel Container with Multi-Card Display */}
        <div
          className="relative max-w-full mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Cards Container with 3D Effect */}
          <div className="flex justify-center items-stretch gap-4 md:gap-6 h-[400px] md:h-[450px] my-10 px-4">
            {/* Only render 3 cards for performance on all devices */}
            {visibleIndexes.map((index, i) => {
              const testimonial = testimonials[index];
              const isCurrent = index === currentIndex;
              // Dynamic classes based on position
              const cardPositionClasses = i === 0 
                ? "hidden md:flex opacity-60 scale-85 -translate-x-1/4 rotate-[-5deg] z-0" 
                : i === 2 
                  ? "hidden md:flex opacity-60 scale-85 translate-x-1/4 rotate-[5deg] z-0" 
                  : "opacity-100 scale-100 z-10 shadow-2xl";
              
              return (
                <Card 
                  key={index}
                  className={`group flex-1 relative overflow-hidden border-0 bg-white/90 backdrop-blur-md transition-all duration-700 rounded-3xl 
                    ${cardPositionClasses}
                    ${isCurrent ? 'shadow-xl hover:shadow-2xl' : 'shadow-lg'}
                    max-w-lg mx-auto md:mx-0
                  `}
                >
                  {/* Modern Gradient Border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl"></div>
                  <div className="absolute inset-[1px] bg-white/95 backdrop-blur-md rounded-3xl"></div>

                  {/* Floating Quote Icon - Positioned Based on Card */}
                  <div className={`absolute top-6 ${i === 0 ? 'right-6' : i === 2 ? 'left-6' : 'right-6'} text-blue-500/20 group-hover:text-blue-500/30 transition-colors duration-500`}>
                    <Quote className="w-8 h-8 md:w-12 md:h-12" />
                  </div>

                  <CardContent className="relative z-10 p-6 md:p-8 text-center h-full flex flex-col justify-between">
                    <div className="space-y-6">
                      {/* Avatar Circle */}
                      <div className="mx-auto w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center shadow-md">
                        <User className="w-8 h-8 md:w-10 md:h-10 text-indigo-500" strokeWidth={1.5} />
                      </div>

                      {/* Stars Rating */}
                      <div className="flex justify-center gap-1">
                        {renderStars(testimonial?.rating || 5)}
                      </div>

                      {/* Quote Text */}
                      <blockquote className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium max-w-md mx-auto">
                        "{testimonial?.text}"
                      </blockquote>
                    </div>

                    {/* Author Info */}
                    <div className="mt-6 pt-4 border-t border-gray-200/50">
                      <div className="text-center space-y-1">
                        <h4 className="font-bold text-lg md:text-xl text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          {testimonial?.name}
                        </h4>
                        <p className="text-gray-600 text-base md:text-lg">
                          {testimonial?.university}
                        </p>
                      </div>
                    </div>
                  </CardContent>

                  {/* Subtle Glow Effect - Only on active card */}
                  {isCurrent && (
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
                  )}
                </Card>
              );
            })}
          </div>

          {/* Modern Navigation Buttons with Improved Positioning */}
          <div className="flex justify-center gap-4 md:gap-6 mt-2">
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/90 backdrop-blur-md border-gray-200/50 hover:bg-white hover:scale-110 hover:shadow-xl transition-all duration-300 shadow-lg group"
              onClick={goToPrevious}
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
              <span className="sr-only">السابق</span>
            </Button>

            {/* Modern Dots Indicator */}
            <div className="flex justify-center items-center gap-2 md:gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  aria-label={`انتقل إلى الشريحة ${index + 1}`}
                  className={`relative transition-all duration-300 focus:outline-none ${
                    index === currentIndex
                      ? 'w-6 md:w-8 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full'
                      : 'w-3 h-3 bg-gray-300 hover:bg-gray-400 rounded-full hover:scale-125'
                  }`}
                >
                  {index === currentIndex && (
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></span>
                  )}
                </button>
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/90 backdrop-blur-md border-gray-200/50 hover:bg-white hover:scale-110 hover:shadow-xl transition-all duration-300 shadow-lg group"
              onClick={goToNext}
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
              <span className="sr-only">التالي</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
