
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Image, Shield, User, MessageSquare, Book, CheckCircle } from "lucide-react";
import AnimatedSection from './AnimatedSection';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "البحث الذكي المتقدم",
      description: "تقنية بحث متطورة تساعدك في العثور على السكن المثالي",
      details: [
        "فلترة حسب المسافة من الجامعة",
        "البحث بالسعر والمرافق المتاحة",
        "خرائط تفاعلية مع المواصلات",
        "حفظ عمليات البحث المفضلة"
      ],
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100"
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: "معاينة شاملة وتفاعلية",
      description: "استكشف كل تفاصيل السكن قبل اتخاذ القرار",
      details: [
        "صور عالية الدقة 360 درجة",
        "جولات افتراضية تفاعلية",
        "فيديوهات توضيحية للمرافق",
        "مخططات الوحدات السكنية"
      ],
      gradient: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
      iconBg: "bg-emerald-100"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "أمان وحماية متقدمة",
      description: "نظام حماية شامل لضمان أمان معاملاتك",
      details: [
        "تشفير متقدم للبيانات الشخصية",
        "نظام دفع آمن معتمد دولياً",
        "ضمان استرداد الأموال",
        "التحقق من هوية المالكين"
      ],
      gradient: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100"
    },
    {
      icon: <User className="w-8 h-8" />,
      title: "إدارة ذكية للحساب",
      description: "تحكم كامل في حسابك وتجربة مخصصة",
      details: [
        "لوحة تحكم شخصية متقدمة",
        "تتبع حالة الحجوزات",
        "إشعارات ذكية مخصصة",
        "تاريخ كامل للمعاملات"
      ],
      gradient: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-100"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "دعم فني متميز",
      description: "فريق دعم محترف متاح على مدار الساعة",
      details: [
        "دعم فوري عبر الدردشة المباشرة",
        "نظام تذاكر الدعم المتقدم",
        "مكتبة شاملة للأسئلة الشائعة",
        "دعم متعدد اللغات"
      ],
      gradient: "from-rose-500 to-pink-500",
      bgColor: "bg-rose-50",
      iconBg: "bg-rose-100"
    },
    {
      icon: <Book className="w-8 h-8" />,
      title: "مجتمع طلابي نشط",
      description: "انضم لمجتمع من آلاف الطلاب وشارك التجارب",
      details: [
        "مجموعات حسب الجامعة والمدينة",
        "منتديات نقاش متخصصة",
        "مشاركة النصائح والتجارب",
        "فعاليات ومسابقات طلابية"
      ],
      gradient: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50",
      iconBg: "bg-indigo-100"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-75"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-150"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4" />
            مميزات حصرية ومتطورة
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.1)'}}>
            مميزات التطبيق
          </h2>

          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
          </div>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            اكتشف مجموعة شاملة من المميزات المتطورة التي تجعل تجربة البحث عن السكن الطلابي
            <br />
            <span className="text-blue-600 font-semibold">سهلة وآمنة وممتعة</span>
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={index * 150}
            >
              <Card className={`group relative overflow-hidden border border-gray-200/50 ${feature.bgColor} hover:bg-white shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-[1.02] h-full`}>
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>

                {/* Top Border Accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient}`}></div>

                <CardHeader className="relative z-10 pb-4">
                  <div className="flex items-start gap-4">
                    <div className={`${feature.iconBg} p-4 rounded-2xl group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                      <div className="text-gray-700">
                        {feature.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                        {feature.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 text-sm leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="relative z-10 pt-0">
                  <div className="space-y-3">
                    {feature.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center gap-3 text-gray-700 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="leading-relaxed">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Enhanced Bottom Section */}
        <AnimatedSection animation="fade-in" delay={900} className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-50 via-white to-purple-50 rounded-3xl p-8 border border-gray-200/50 shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-800 font-semibold">جميع المميزات متاحة مجاناً</span>
              </div>

              <div className="hidden md:block w-px h-8 bg-gray-300"></div>

              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-blue-500" />
                <span className="text-gray-600">تحديثات مستمرة</span>
              </div>

              <div className="hidden md:block w-px h-8 bg-gray-300"></div>

              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-75"></div>
                <span className="text-gray-600">دعم فني 24/7</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FeaturesSection;
