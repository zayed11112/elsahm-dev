import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Search, CreditCard, Key, MessageSquare, Star, Users } from "lucide-react";
import AnimatedSection from './AnimatedSection';

const TimelineSection = () => {
  const steps = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "ابحث واستكشف",
      description: "تصفح آلاف الوحدات السكنية المتاحة بالقرب من جامعتك",
      details: ["فلترة متقدمة حسب السعر والموقع", "صور عالية الجودة وجولات افتراضية", "تقييمات حقيقية من الطلاب"],
      gradient: "from-blue-500 to-cyan-500",
      position: "right"
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "احجز وادفع بأمان",
      description: "نظام دفع إلكتروني آمن ومحفظة رقمية متطورة",
      details: ["دفع آمن بالفيزا والماستركارد", "محفظة رقمية للمدفوعات السريعة", "ضمان استرداد الأموال"],
      gradient: "from-emerald-500 to-teal-500",
      position: "left"
    },
    {
      icon: <Key className="w-6 h-6" />,
      title: "استلم مفاتيحك",
      description: "عملية تسليم سلسة ومنظمة مع فريق الدعم",
      details: ["تنسيق موعد التسليم", "فحص الوحدة مع المالك", "توثيق حالة الوحدة"],
      gradient: "from-purple-500 to-violet-500",
      position: "right"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "تواصل مع المجتمع",
      description: "انضم لمجتمع الطلاب وشارك تجربتك",
      details: ["مجموعات طلابية حسب الجامعة", "نصائح ومشاركة التجارب", "فعاليات وأنشطة طلابية"],
      gradient: "from-orange-500 to-red-500",
      position: "left"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "قيّم تجربتك",
      description: "ساعد الطلاب الآخرين من خلال تقييمك الصادق",
      details: ["تقييم الوحدة والمالك", "مشاركة الصور والتجربة", "نصائح للطلاب الجدد"],
      gradient: "from-pink-500 to-rose-500",
      position: "right"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "كن سفيراً للتطبيق",
      description: "احصل على مكافآت من خلال دعوة أصدقائك",
      details: ["برنامج الإحالة والمكافآت", "خصومات حصرية للسفراء", "شارات وألقاب مميزة"],
      gradient: "from-indigo-500 to-blue-500",
      position: "left"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-75"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-150"></div>
      </div>

      {/* Stars Background */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            رحلتك مع السهم
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            من البحث إلى الاستقرار، نرافقك في كل خطوة للوصول إلى السكن المثالي
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 rounded-full hidden lg:block"></div>

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => (
              <AnimatedSection
                key={index}
                animation={step.position === 'right' ? 'slide-right' : 'slide-left'}
                delay={index * 100}
              >
                <div className={`flex flex-col lg:flex-row items-center gap-8 ${step.position === 'left' ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className="flex-1 lg:w-1/2">
                    <Card className="group relative overflow-hidden border-0 bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-all duration-500 hover:scale-105">
                      {/* Gradient Border */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl`}></div>
                      <div className="absolute inset-0.5 bg-slate-900/50 rounded-lg"></div>
                      
                      <CardContent className="relative z-10 p-8">
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                            <div className="text-white">
                              {step.icon}
                            </div>
                          </div>
                          <div className="text-2xl font-bold text-white group-hover:text-blue-100 transition-colors">
                            {index + 1}
                          </div>
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-100 transition-colors">
                          {step.title}
                        </h3>
                        
                        <p className="text-blue-200 mb-6 leading-relaxed">
                          {step.description}
                        </p>
                        
                        <ul className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-center gap-3 text-blue-300 text-sm">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.gradient}`}></div>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </CardContent>

                      {/* Hover Effects */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-700"></div>
                    </Card>
                  </div>

                  {/* Timeline Node */}
                  <div className="hidden lg:block relative">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg border-4 border-white/20 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {step.icon}
                      </div>
                    </div>
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.gradient} opacity-30 animate-pulse`}></div>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 lg:w-1/2"></div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <AnimatedSection animation="fade-in" delay={600} className="text-center mt-20">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white font-medium">ابدأ رحلتك اليوم</span>
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-75"></div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TimelineSection;
