import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";


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

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

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
      <Star
        key={i}
        className={`w-5 h-5 transition-all duration-300 ${
          i < rating
            ? 'text-yellow-400 fill-yellow-400'
            : 'text-gray-300'
        }`}
        style={{ animationDelay: `${i * 50}ms` }}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-75"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-150"></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(to_right,#3b82f61a_1px,transparent_1px),linear-gradient(to_bottom,#3b82f61a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text">
            آراء الطلاب
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full shadow-lg"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            تجارب حقيقية من طلاب استخدموا التطبيق ووجدوا سكنهم المثالي
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Testimonial Card */}
          <div>
            <Card className="group relative overflow-hidden border-0 bg-white/90 backdrop-blur-md shadow-2xl hover:shadow-3xl transition-all duration-700 min-h-[350px] rounded-3xl">
              {/* Modern Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl"></div>
              <div className="absolute inset-[1px] bg-white/95 backdrop-blur-md rounded-3xl"></div>

              {/* Floating Quote Icon */}
              <div className="absolute top-8 right-8 text-blue-500/20 group-hover:text-blue-500/30 transition-colors duration-500">
                <Quote className="w-12 h-12" />
              </div>

              <CardContent className="relative z-10 p-8 md:p-12 text-center h-full flex flex-col justify-between">
                <div className="space-y-8">
                  {/* Stars Rating */}
                  <div className="flex justify-center gap-1 mb-6">
                    {renderStars(testimonials[currentIndex]?.rating || 5)}
                  </div>

                  {/* Quote Text */}
                  <blockquote className="text-xl md:text-2xl lg:text-3xl text-gray-700 leading-relaxed font-medium max-w-3xl mx-auto">
                    "{testimonials[currentIndex]?.text}"
                  </blockquote>
                </div>

                {/* Author Info - Without Image */}
                <div className="mt-8 pt-6 border-t border-gray-200/50">
                  <div className="text-center space-y-2">
                    <h4 className="font-bold text-xl md:text-2xl text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {testimonials[currentIndex]?.name}
                    </h4>
                    <p className="text-gray-600 text-lg">
                      {testimonials[currentIndex]?.university}
                    </p>
                  </div>
                </div>
              </CardContent>

              {/* Subtle Glow Effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
            </Card>
          </div>

          {/* Modern Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 md:left-6 top-1/2 transform -translate-y-1/2 w-14 h-14 rounded-full bg-white/90 backdrop-blur-md border-gray-200/50 hover:bg-white hover:scale-110 hover:shadow-xl transition-all duration-300 shadow-lg group"
            onClick={goToPrevious}
          >
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 md:right-6 top-1/2 transform -translate-y-1/2 w-14 h-14 rounded-full bg-white/90 backdrop-blur-md border-gray-200/50 hover:bg-white hover:scale-110 hover:shadow-xl transition-all duration-300 shadow-lg group"
            onClick={goToNext}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
          </Button>

          {/* Modern Dots Indicator */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`relative transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full'
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400 rounded-full hover:scale-125'
                }`}
                onClick={() => goToSlide(index)}
              >
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default TestimonialsCarousel;
