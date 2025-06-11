import React, { useRef, useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Users, Home, Star, Shield, TrendingUp } from "lucide-react";

import AnimatedCounter from './AnimatedCounter';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(false);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "8,742+",
      label: "طالب مسجل",
      description: "ينضم إلينا عشرات الطلاب يومياً من مختلف الجامعات",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      badgeText: "متزايد",
      badgeColor: "bg-blue-100 text-blue-700",
      borderColor: "border-blue-500"
    },
    {
      icon: <Home className="w-8 h-8" />,
      number: "2,376",
      label: "وحدة سكنية",
      description: "وحدات سكنية متنوعة تناسب احتياجات ومتطلبات كل طالب",
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
      badgeText: "متاح",
      badgeColor: "bg-emerald-100 text-emerald-700",
      borderColor: "border-emerald-500"
    },
    {
      icon: <Star className="w-8 h-8" />,
      number: "4.8/5",
      label: "تقييم المستخدمين",
      description: "نفخر بتقييمات الطلاب العالية لخدماتنا المتميزة",
      gradient: "from-amber-500 to-orange-500",
      bgGradient: "from-amber-50 to-orange-50",
      badgeText: "رضا عالٍ",
      badgeColor: "bg-amber-100 text-amber-700",
      borderColor: "border-amber-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      number: "99.9%",
      label: "معدل الأمان",
      description: "أولويتنا القصوى هي حماية بياناتك وضمان تجربة آمنة",
      gradient: "from-purple-500 to-violet-500",
      bgGradient: "from-purple-50 to-violet-50",
      badgeText: "موثوق",
      badgeColor: "bg-purple-100 text-purple-700",
      borderColor: "border-purple-500"
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full translate-x-1/2 -translate-y-1/3 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-200/20 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-purple-200/20 rounded-full blur-2xl"></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading with Static Display */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-4">
            <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
            <span className="mx-4 text-blue-600 font-medium text-lg">إحصائيات السهم</span>
            <div className="h-1 w-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800 bg-clip-text bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900" style={{textShadow: '0px 2px 4px rgba(0,0,0,0.05)'}}>
            أرقام تتحدث عن نفسها
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نفخر بثقة آلاف الطلاب الذين اختاروا <span className="text-blue-600 font-medium">السهم</span> كشريك موثوق في رحلة البحث عن السكن المثالي
          </p>
        </div>

        {/* Stats Grid Layout - No Transition Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index}>
              <Card className="relative overflow-hidden border border-gray-100 bg-white hover:border-transparent shadow-md hover:shadow-2xl h-full">
                {/* Card Background Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Diagonal Pattern Background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-[radial-gradient(circle,_#00000003_1px,_transparent_1px)] [background-size:12px_12px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
                </div>

                <CardContent className="relative z-10 p-6">
                  {/* Badge */}
                  <div className="flex justify-end mb-2">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${stat.badgeColor}`}>
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {stat.badgeText}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="text-center">
                    {/* Icon with Ring Effect */}
                    <div className="relative mx-auto mb-4">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${stat.bgGradient} flex items-center justify-center`}>
                        <div className={`text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient}`}>
                          {stat.icon}
                        </div>
                      </div>
                      <div className={`absolute inset-0 rounded-full border-2 border-dashed ${stat.borderColor} border-opacity-50 animate-spin-slow`}></div>
                    </div>
                    
                    {/* Number Counter with Fixed Height Container */}
                    <div className="h-16 flex items-center justify-center mb-2">
                      {isVisible && (
                        <AnimatedCounter
                          value={stat.number}
                          duration={2500}
                          delay={index * 100}
                          gradient={stat.gradient}
                        />
                      )}
                    </div>
                    
                    {/* Label */}
                    <h3 className="text-lg font-bold mb-2 text-gray-800">
                      {stat.label}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-sm">
                      {stat.description}
                    </p>
                  </div>
                </CardContent>

                {/* Bottom Border */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient}`}></div>
              </Card>
            </div>
          ))}
        </div>
        
        {/* Summary - No Transition */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600">
            نستمر في النمو والتطور لخدمة  
            <span className="mx-1 font-bold text-blue-600"> مجتمع الطلاب </span>
            بأفضل الحلول السكنية
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
