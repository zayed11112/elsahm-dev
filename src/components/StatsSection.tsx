import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Users, Home, Star, Shield } from "lucide-react";
import AnimatedSection from './AnimatedSection';
import AnimatedCounter from './AnimatedCounter';

const StatsSection = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "10,000+",
      label: "طالب مسجل",
      description: "ينضم إلينا يومياً",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      icon: <Home className="w-8 h-8" />,
      number: "2,500+",
      label: "وحدة سكنية",
      description: "متاحة للحجز",
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50"
    },
    {
      icon: <Star className="w-8 h-8" />,
      number: "4.8/5",
      label: "تقييم المستخدمين",
      description: "رضا عالي",
      gradient: "from-amber-500 to-orange-500",
      bgGradient: "from-amber-50 to-orange-50"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      number: "99.9%",
      label: "معدل الأمان",
      description: "حماية البيانات",
      gradient: "from-purple-500 to-violet-500",
      bgGradient: "from-purple-50 to-violet-50"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-75"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-150"></div>
        <div className="absolute bottom-40 right-1/4 w-28 h-28 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-300"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(to_right,#3b82f61a_1px,transparent_1px),linear-gradient(to_bottom,#3b82f61a_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.1)'}}>
            أرقام تتحدث عن نفسها
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نفخر بثقة آلاف الطلاب الذين اختاروا السهم كشريك موثوق في رحلة البحث عن السكن المثالي
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={index * 80}
            >
              <Card className={`group relative overflow-hidden border-0 bg-gradient-to-br ${stat.bgGradient} shadow-xl hover:shadow-2xl transition-all duration-400 hover:scale-105 h-full`}>
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-400`}></div>
                
                {/* Floating Orbs */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/20 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/20 rounded-full translate-y-8 -translate-x-8 group-hover:scale-150 transition-transform duration-700"></div>

                <CardContent className="relative z-10 p-8 text-center h-full flex flex-col justify-between">
                  <div>
                    {/* Icon */}
                    <div className={`mx-auto mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <div className="text-white">
                        {stat.icon}
                      </div>
                    </div>
                    
                    {/* Animated Number */}
                    <AnimatedCounter
                      value={stat.number}
                      duration={2500}
                      delay={index * 150}
                      gradient={stat.gradient}
                    />
                    
                    {/* Label */}
                    <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-gray-900 transition-colors">
                      {stat.label}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors">
                    {stat.description}
                  </p>
                </CardContent>

                {/* Glow Effect */}
                <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r ${stat.gradient} blur-xl`}></div>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection animation="fade-in" delay={600} className="text-center mt-16">
          <div className="inline-flex flex-col md:flex-row items-center gap-4 px-8 py-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/40 shadow-lg">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700 font-medium">نمو مستمر</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-gray-300"></div>
            <span className="text-gray-600 text-sm">ينضم إلينا +100 طالب يومياً</span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default StatsSection;
