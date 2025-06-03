
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, ArrowDown, Smartphone } from "lucide-react";
import { useEffect, useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import FeaturesSection from "@/components/FeaturesSection";
import ContactSection from "@/components/ContactSection";
import StatsSection from "@/components/StatsSection";
import TimelineSection from "@/components/TimelineSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import TypewriterEffect from "@/components/TypewriterEffect";
import SEOHead from "@/components/SEOHead";

import Navbar from "@/components/Navbar";

const Index = () => {
  const downloadUrl = "https://github.com/zayed11112/Elsahm/releases/download/dart/Elsahm_V1.apk";
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials = [
    {
      name: "أحمد حسن",
      text: "تطبيق رائع! وجدت سكن مناسب بسهولة وبسعر مناسب قريب من جامعتي. الواجهة سهلة والدفع آمن.",
      university: "جامعة سيناء",
      rating: 5
    },
    {
      name: "فاطمة محمود",
      text: "التطبيق سهل الاستخدام والدفع الإلكتروني آمن جداً. أنصح به كل الطلاب. خدمة العملاء ممتازة.",
      university: "جامعة سيناء",
      rating: 5
    },
    {
      name: "عمر الشاذلي",
      text: "المجتمع الطلابي في التطبيق مفيد جداً، تعرفت على أصدقاء جدد وحصلت على نصائح قيمة.",
      university: "جامعة سيناء",
      rating: 5
    },
    {
      name: "نور الدين محمد",
      text: "البحث المتقدم ساعدني كثيراً في العثور على السكن المثالي. التطبيق يوفر الوقت والجهد.",
      university: "جامعة سيناء",
      rating: 4
    },
    {
      name: "سارة أحمد",
      text: "تجربة رائعة من البداية للنهاية. الصور واضحة والمعلومات دقيقة. حجزت شقتي في دقائق.",
      university: "جامعة سيناء",
      rating: 5
    }
  ];

  // Structured Data for the application
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "تطبيق السهم للتسكين الطلابي",
    "alternateName": "السهم للتسكين",
    "description": "منصة متكاملة للإسكان الطلابي تجعل البحث عن السكن سهلاً وآمناً وفعالاً",
    "url": "https://zayed11112.github.io/elsahm-dev",
    "applicationCategory": "LifestyleApplication",
    "operatingSystem": "Android",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EGP"
    },
    "author": {
      "@type": "Organization",
      "name": "شركة السهم للتسكين الطلابي",
      "url": "https://zayed11112.github.io/elsahm-dev"
    },
    "publisher": {
      "@type": "Organization",
      "name": "شركة السهم للتسكين الطلابي",
      "logo": {
        "@type": "ImageObject",
        "url": "https://i.ibb.co/rK72d17/app-1.png"
      }
    },
    "inLanguage": "ar",
    "audience": {
      "@type": "Audience",
      "audienceType": "Students"
    },
    "featureList": [
      "البحث المتقدم عن السكن",
      "عرض تفاصيل شاملة للسكن",
      "الحجز والدفع الإلكتروني",
      "حساب شخصي متكامل",
      "نظام الإشعارات والتنبيهات",
      "نظام تقديم الشكاوى والدعم",
      "المجموعات والتواصل"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1250",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50" dir="rtl">
      {/* SEO Head Component */}
      <SEOHead
        title="تطبيق السهم للتسكين الطلابي - منصة شاملة للإسكان الطلابي في مصر"
        description="منصة متكاملة للإسكان الطلابي تجعل البحث عن السكن سهلاً وآمناً وفعالاً. بحث متقدم، حجز إلكتروني، دفع آمن، ومجتمع طلابي متفاعل. حمّل التطبيق مجاناً الآن!"
        keywords="تسكين طلابي, سكن طلاب, إسكان جامعي, تطبيق السهم, سكن طلابي مصر, حجز سكن طلابي, شقق طلابية, غرف مشتركة, استوديوهات طلابية, سكن جامعة سيناء, تطبيق سكن, منصة إسكان"
        image="https://i.ibb.co/rK72d17/app-1.png"
        url="https://zayed11112.github.io/elsahm-dev/"
        structuredData={structuredData}
      />

      {/* Navigation Bar */}
      <Navbar downloadUrl={downloadUrl} />

      {/* Enhanced Fixed Floating Download Button for Mobile */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
        <Button
          asChild
          className="btn-gradient-primary px-8 py-4 text-lg font-bold rounded-full shadow-glow pulse-glow border-2 border-white/20 backdrop-blur-sm"
        >
          <a href={downloadUrl} download>
            <Download className="ml-2 w-6 h-6" />
            حمّل التطبيق مجاناً
          </a>
        </Button>
      </div>

      {/* Enhanced Fixed Download Button for Desktop */}
      <div className="fixed bottom-6 left-6 z-50 hidden md:block">
        <Button
          asChild
          className="btn-gradient-primary px-6 py-3 text-lg font-bold rounded-full shadow-glow-purple hover:shadow-glow transition-all duration-300 hover:scale-110"
        >
          <a href={downloadUrl} download>
            <Download className="ml-2 w-5 h-5" />
            حمّل التطبيق الآن
          </a>
        </Button>
      </div>

      {/* Hero Section */}
      <main>
        <section id="home" className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-orange-500 min-h-screen flex items-center" role="banner" aria-label="القسم الرئيسي لتطبيق السهم للتسكين الطلابي">
        <div className="container mx-auto px-4 py-8 md:py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pt-16 md:pt-20">
            <div className={`lg:w-1/2 text-center lg:text-right transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6 leading-relaxed">
                <span className="text-white drop-shadow-2xl shadow-black/50 block" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 10px rgba(255,255,255,0.3)'}}>
                  تطبيق <TypewriterEffect
                    text="شركة السهم"
                    speed={150}
                    deleteSpeed={100}
                    pauseDuration={3000}
                    className="text-yellow-300 font-bold"
                    showCursor={true}
                    loop={true}
                  />
                </span>
              </h1>

              {/* Animated White Line */}
              <div className="flex justify-center lg:justify-start mb-8">
                <div className="relative">
                  <div className="w-32 md:w-40 lg:w-48 h-1 bg-white/30 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-white via-yellow-200 to-white rounded-full animate-pulse shadow-lg"></div>
                  </div>
                  <div className="absolute inset-0 w-32 md:w-40 lg:w-48 h-1 bg-gradient-to-r from-transparent via-white to-transparent rounded-full animate-ping opacity-75"></div>
                </div>
              </div>
              <p className="text-base md:text-lg lg:text-xl text-blue-100 mb-8 leading-relaxed px-4 lg:px-0 drop-shadow-md">
                <span className="block mb-2">منصة شاملة للإسكان الطلابي تجعل البحث عن السكن</span>
                <span className="text-yellow-200 font-semibold drop-shadow-md block">سهلاً وآمناً وفعالاً</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start px-4 lg:px-0 mb-6">
                <Button
                  asChild
                  size="lg"
                  className="btn-gradient-primary text-lg md:text-xl px-8 md:px-10 py-4 md:py-5 font-bold rounded-full shadow-glow pulse-glow"
                >
                  <a href={downloadUrl} download>
                    <Download className="ml-2 w-5 md:w-6 h-5 md:h-6" />
                    حمّل التطبيق مجاناً
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="glass border-2 border-white/30 text-white bg-white/10 hover:bg-white hover:text-blue-600 text-lg md:text-xl px-8 md:px-10 py-4 md:py-5 font-bold rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  اكتشف المميزات
                  <ArrowDown className="mr-2 w-5 md:w-6 h-5 md:h-6" />
                </Button>
              </div>

              {/* Android Only Notice - Moved below buttons with smaller text */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-800 px-4 py-2 rounded-full mx-4 lg:mx-0 text-sm font-medium shadow-lg">
                <span className="animate-bounce text-sm">📱</span>
                <span>متاح للأندرويد حالياً • نسخة iOS قريباً</span>
              </div>
            </div>
            
            <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
              <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* Phone Container with Enhanced Design */}
                <div className="relative">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>

                  {/* Phone Frame */}
                  <div className="relative w-64 md:w-80 h-96 md:h-[500px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-2 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 float">
                    {/* Screen */}
                    <div className="w-full h-full bg-black rounded-2xl overflow-hidden relative">
                      {/* Phone Image */}
                      <img
                        src="https://i.ibb.co/mCdYb4r/phone-2.png"
                        alt="تطبيق السهم"
                        className="w-full h-full object-cover rounded-2xl"
                        onError={(e) => {
                          // Fallback if image doesn't load
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling.style.display = 'flex';
                        }}
                      />

                      {/* Fallback Content */}
                      <div className="hidden w-full h-full flex-col bg-gradient-to-b from-blue-50 to-purple-50">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-16 md:h-20 flex items-center justify-center relative">
                          <h3 className="text-white font-bold text-lg md:text-xl">السهم</h3>
                          <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white w-5 h-5" />
                        </div>
                        <div className="flex-1 p-3 md:p-4 space-y-2 md:space-y-3">
                          <div className="bg-white h-6 md:h-8 rounded shadow-sm"></div>
                          <div className="bg-gradient-to-r from-blue-100 to-purple-100 h-16 md:h-24 rounded shadow-sm"></div>
                          <div className="bg-white h-4 md:h-6 rounded w-3/4 shadow-sm"></div>
                          <div className="bg-gradient-to-r from-green-100 to-blue-100 h-8 md:h-12 rounded shadow-sm"></div>
                          <div className="bg-white h-4 md:h-6 rounded w-1/2 shadow-sm"></div>
                        </div>
                      </div>

                      {/* Screen Reflection */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-2xl"></div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce delay-100"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-bounce delay-300"></div>
                  <div className="absolute top-1/2 -left-8 w-4 h-4 bg-cyan-500 rounded-full animate-bounce delay-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-20 md:h-auto">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
        </section>

        {/* Stats Section */}
        <StatsSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* Timeline Section */}
        <TimelineSection />

        {/* Enhanced Competitive Advantages */}
        <section id="about" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden" role="region" aria-labelledby="about-heading">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-75"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-150"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 id="about-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.1)'}}>
              لماذا تختار السهم؟
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              نقدم حلولاً مبتكرة ومتطورة تجعل تجربة البحث عن السكن أسهل وأكثر أماناً
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                emoji: "💰",
                title: "أسعار مناسبة للطلاب",
                description: "أسعار صديقة للطلاب مع التركيز على الخصوصية والأمان والجودة العالية",
                gradient: "from-emerald-500 to-teal-500",
                bgGradient: "from-emerald-50 to-teal-50"
              },
              {
                emoji: "⚡",
                title: "عملية مبسطة",
                description: "اكتشاف وحجز ودفع مبسط للإسكان مع واجهة سهلة الاستخدام",
                gradient: "from-blue-500 to-cyan-500",
                bgGradient: "from-blue-50 to-cyan-50"
              },
              {
                emoji: "🎯",
                title: "جمهور مستهدف",
                description: "مثالي لمقدمي الإسكان للوصول للطلاب المستهدفين بفعالية",
                gradient: "from-purple-500 to-violet-500",
                bgGradient: "from-purple-50 to-violet-50"
              }
            ].map((item, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 150}>
                <Card className={`group relative overflow-hidden border-0 bg-gradient-to-br ${item.bgGradient} shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 h-full card-elevated`}>
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                  {/* Floating Orbs */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/30 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/30 rounded-full translate-y-8 -translate-x-8 group-hover:scale-150 transition-transform duration-700"></div>

                  <CardContent className="relative z-10 p-8 text-center h-full flex flex-col justify-between">
                    <div>
                      {/* Emoji with Enhanced Styling */}
                      <div className="text-6xl md:text-7xl mb-6 group-hover:scale-110 transition-transform duration-300 float">
                        {item.emoji}
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 group-hover:text-gray-900 transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 text-base leading-relaxed group-hover:text-gray-700 transition-colors">
                      {item.description}
                    </p>
                  </CardContent>

                  {/* Glow Effect */}
                  <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r ${item.gradient} blur-xl`}></div>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          {/* Enhanced Bottom Decoration */}
          <AnimatedSection animation="fade-in" delay={600} className="text-center mt-16">
            <div className="inline-flex flex-col md:flex-row items-center gap-4 px-8 py-4 glass rounded-2xl shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700 font-medium">مميزات حصرية</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-gray-300"></div>
              <span className="text-gray-600 text-sm">تجربة فريدة ومتطورة للطلاب</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Enhanced Testimonials Carousel */}
      <div id="testimonials">
        <TestimonialsCarousel testimonials={testimonials} />
      </div>

      {/* Contact Us Section */}
      <div id="contact">
        <ContactSection />
      </div>

      {/* Enhanced Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-75"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-300/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-150"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 10px rgba(255,255,255,0.3)'}}>
              ابدأ رحلتك في العثور على السكن المثالي
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto leading-relaxed text-blue-100">
              انضم إلى آلاف الطلاب الذين وجدوا سكنهم المثالي باستخدام تطبيق السهم
              <br />
              <span className="text-yellow-300 font-semibold">تحميل مجاني • بدون رسوم خفية</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-yellow-50 hover:text-blue-700 text-xl md:text-2xl px-12 md:px-16 py-6 md:py-8 font-bold rounded-full shadow-2xl transition-all duration-300 hover:scale-110 pulse-glow"
              >
                <a href={downloadUrl} download>
                  <Download className="ml-3 w-7 md:w-9 h-7 md:h-9" />
                  حمّل التطبيق مجاناً
                </a>
              </Button>

              <div className="flex items-center gap-3 text-blue-100">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full border-2 border-white flex items-center justify-center text-white font-bold">أ</div>
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full border-2 border-white flex items-center justify-center text-white font-bold">م</div>
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full border-2 border-white flex items-center justify-center text-white font-bold">س</div>
                </div>
                <span className="text-sm">+10,000 طالب يثق بنا</span>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { icon: "🔒", text: "آمن 100%" },
                { icon: "⚡", text: "سريع وسهل" },
                { icon: "💰", text: "مجاني تماماً" },
                { icon: "📱", text: "متاح الآن" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-2 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
        </section>
      </main>

    </div>
  );
};

export default Index;
