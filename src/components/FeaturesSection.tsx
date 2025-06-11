import React from 'react';
import { Search, Image, Shield, User, MessageSquare, Book, CheckCircle } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Search strokeWidth={2} />,
      title: "البحث الذكي المتقدم",
      description: "تقنية بحث متطورة تساعدك في العثور على السكن المثالي",
      details: [
        "فلترة حسب المسافة من الجامعة",
        "البحث بالسعر والمرافق المتاحة",
        "خرائط تفاعلية مع المواصلات",
        "حفظ عمليات البحث المفضلة"
      ],
      gradient: "from-blue-600 to-cyan-600",
      color: "blue",
      shadow: "shadow-blue-900/5"
    },
    {
      icon: <Image strokeWidth={2} />,
      title: "معاينة شاملة وتفاعلية",
      description: "استكشف كل تفاصيل السكن قبل اتخاذ القرار",
      details: [
        "صور عالية الدقة 360 درجة",
        "جولات افتراضية تفاعلية",
        "فيديوهات توضيحية للمرافق",
        "مخططات الوحدات السكنية"
      ],
      gradient: "from-teal-600 to-emerald-600",
      color: "emerald",
      shadow: "shadow-emerald-900/5"
    },
    {
      icon: <Shield strokeWidth={2} />,
      title: "أمان وحماية متقدمة",
      description: "نظام حماية شامل لضمان أمان معاملاتك",
      details: [
        "تشفير متقدم للبيانات الشخصية",
        "نظام دفع آمن معتمد دولياً",
        "ضمان استرداد الأموال",
        "التحقق من هوية المالكين"
      ],
      gradient: "from-violet-600 to-purple-600",
      color: "purple",
      shadow: "shadow-purple-900/5"
    },
    {
      icon: <User strokeWidth={2} />,
      title: "إدارة ذكية للحساب",
      description: "تحكم كامل في حسابك وتجربة مخصصة",
      details: [
        "لوحة تحكم شخصية متقدمة",
        "تتبع حالة الحجوزات",
        "إشعارات ذكية مخصصة",
        "تاريخ كامل للمعاملات"
      ],
      gradient: "from-amber-500 to-orange-600",
      color: "orange",
      shadow: "shadow-orange-900/5"
    },
    {
      icon: <MessageSquare strokeWidth={2} />,
      title: "دعم فني متميز",
      description: "فريق دعم محترف متاح على مدار الساعة",
      details: [
        "دعم فوري عبر الدردشة المباشرة",
        "نظام تذاكر الدعم المتقدم",
        "مكتبة شاملة للأسئلة الشائعة",
        "دعم متعدد اللغات"
      ],
      gradient: "from-pink-600 to-rose-600",
      color: "rose",
      shadow: "shadow-rose-900/5"
    },
    {
      icon: <Book strokeWidth={2} />,
      title: "مجتمع طلابي نشط",
      description: "انضم لمجتمع من آلاف الطلاب وشارك التجارب",
      details: [
        "مجموعات حسب الجامعة والمدينة",
        "منتديات نقاش متخصصة",
        "مشاركة النصائح والتجارب",
        "فعاليات ومسابقات طلابية"
      ],
      gradient: "from-blue-600 to-indigo-600",
      color: "indigo",
      shadow: "shadow-indigo-900/5"
    }
  ];

  return (
    <section id="features" className="py-24 relative">
      {/* Modern Background */}
      <div className="absolute inset-0 bg-slate-50/70"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(210,210,250,0.2),transparent)]"></div>
      
      {/* Light Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>
      
      {/* Subtle Top Border */}
      <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        {/* Modern Heading */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50/50 backdrop-blur-sm px-4 py-1.5 mb-5">
            <span className="text-sm font-medium text-blue-600 mx-auto">مميزات متميزة</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
            <span className="text-gray-900">مميزات </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">التطبيق</span>
          </h2>
          
          <p className="text-gray-600 md:text-lg max-w-3xl mx-auto">
            تم تصميم هذه المميزات لتوفير تجربة سكن طلابي لا مثيل لها،
            <span className="text-blue-600 font-medium"> سهلة وآمنة وفعالة</span>
          </p>
        </div>

        {/* Modern Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-5 lg:gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card group h-full"
            >
              <div className={`h-full relative rounded-2xl bg-white ${feature.shadow} shadow-xl backdrop-blur-sm overflow-hidden transition-all duration-300`}>
                {/* Top gradient bar */}
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${feature.gradient}`}></div>
                
                {/* Card content with modern spacing */}
                <div className="p-6 sm:p-7">
                  {/* Icon area */}
                  <div className="mb-6 flex items-center">
                    <div className={`relative w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${feature.gradient} text-white`}>
                      {feature.icon}
                      <div className="absolute inset-0 rounded-xl bg-white opacity-90 group-hover:opacity-80 transition-opacity"></div>
                      <div className={`absolute inset-0 flex items-center justify-center text-transparent bg-clip-text bg-gradient-to-br ${feature.gradient}`}>
                        {feature.icon}
                      </div>
                    </div>
                    
                    <div className="mr-4 flex-1">
                      <h3 className="text-xl font-bold text-gray-900 tracking-tight mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Feature details with elegant styling */}
                  <div className="space-y-3">
                    {feature.details.map((detail, detailIndex) => (
                      <div 
                        key={detailIndex} 
                        className="flex items-center gap-2.5"
                      >
                        <div className={`text-${feature.color}-500 flex-shrink-0`}>
                          <CheckCircle size={16} />
                        </div>
                        <span className="text-gray-700 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Bottom subtle decorative shadow */}
                <div className={`absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r ${feature.gradient} opacity-[0.15]`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for feature cards */}
      <style jsx global>{`
        .feature-card {
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        
        .feature-card:hover {
          transform: translateY(-5px);
        }
        
        .text-blue-500 { color: rgb(59, 130, 246); }
        .text-emerald-500 { color: rgb(16, 185, 129); }
        .text-purple-500 { color: rgb(139, 92, 246); }
        .text-orange-500 { color: rgb(249, 115, 22); }
        .text-rose-500 { color: rgb(244, 63, 94); }
        .text-indigo-500 { color: rgb(99, 102, 241); }
      `}</style>
    </section>
  );
};

export default FeaturesSection;
