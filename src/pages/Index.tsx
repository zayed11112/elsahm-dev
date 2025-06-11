import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, ArrowDown, Smartphone } from "lucide-react";
import { useEffect, useState } from "react";

import FeaturesSection from "@/components/FeaturesSection";
import ContactSection from "@/components/ContactSection";
import StatsSection from "@/components/StatsSection";

import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import TypewriterEffect from "@/components/TypewriterEffect";
import SEOHead from "@/components/SEOHead";



const Index = () => {
  const downloadUrl = "https://github.com/zayed11112/elsahm-dev/releases/download/v1.0.0/Elsahm-App-v1.0.1.apk";
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials = [
    {
      name: "أحمد حسن",
      text: "والله التطبيق ده جامد جداً! لقيت شقة حلوة وقريبة من الكلية وبسعر كويس. سهل في الاستخدام والدفع مأمون.",
      university: "جامعة سيناء",
      rating: 5
    },
    {
      name: "فاطمة محمود",
      text: "التطبيق سهل أوي والدفع الإلكتروني آمن جداً. بنصح بيه كل الطلبة. خدمة العملاء محترمة جداً.",
      university: "جامعة سيناء",
      rating: 5
    },
    {
      name: "عمر الشاذلي",
      text: "الجروبات الطلابية في التطبيق مفيدة جداً، اتعرفت على صحاب جداد وخدت نصايح حلوة أوي.",
      university: "جامعة سيناء",
      rating: 5
    },
    {
      name: "نور الدين محمد",
      text: "البحث المتقدم ساعدني جداً ألاقي السكن اللي عايزه. التطبيق بيوفر وقت ومجهود كتير.",
      university: "جامعة سيناء",
      rating: 4
    },
    {
      name: "سارة أحمد",
      text: "تجربة جميلة من الأول للآخر. الصور واضحة والمعلومات صحيحة. حجزت شقتي في دقايق معدودة.",
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
    "description": "منصة متكاملة للإسكان الطلابي تجعل البحث عن السكن  سهلاً وآمناً وفعالاً",
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
        "url": "https://i.ibb.co/rK72d17L/app-1.png"
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
        title="تطبيق السهم للتسكين الطلابي - منصة شاملة للإسكان الطلابي في العريش"
        description="منصة متكاملة للإسكان الطلابي تجعل البحث عن السكن سهلاً وآمناً وفعالاً. بحث متقدم، حجز إلكتروني، دفع آمن، ومجتمع طلابي متفاعل. حمّل التطبيق مجاناً الآن!"
        keywords="تسكين طلابي, سكن طلاب, إسكان جامعي, تطبيق السهم, سكن طلابي مصر, حجز سكن طلابي, شقق طلابية, غرف مشتركة, استوديوهات طلابية, سكن جامعة سيناء, تطبيق سكن, منصة إسكان"
        image="https://i.ibb.co/rK72d17L/app-1.png"
        url="https://zayed11112.github.io/elsahm-dev/"
        structuredData={structuredData}
      />

    
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
        <section id="home" className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600" role="banner" aria-label="القسم الرئيسي لتطبيق السهم للتسكين الطلابي">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Large Gradient Circles */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 opacity-20 blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-purple-500 to-pink-400 opacity-20 blur-3xl translate-y-1/3 -translate-x-1/4"></div>
            
            {/* Animated Particles */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white rounded-full opacity-80 animate-ping"></div>
              <div className="absolute top-1/3 left-2/3 w-2 h-2 bg-cyan-300 rounded-full opacity-80 animate-ping" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-2/3 left-1/4 w-2 h-2 bg-yellow-300 rounded-full opacity-80 animate-ping" style={{animationDelay: '1.5s'}}></div>
              <div className="absolute top-3/4 left-3/4 w-3 h-3 bg-pink-300 rounded-full opacity-80 animate-ping" style={{animationDelay: '0.7s'}}></div>
            </div>
            
            {/* Grid overlay for depth */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:20px_20px]"></div>
          </div>

          <div className="container mx-auto px-4 py-8 md:py-16 lg:py-20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pt-16 md:pt-20 relative z-10">
              <div className={`lg:w-1/2 text-center lg:text-right transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* Highlighted Badge */}
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6 text-white/90 text-sm">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
               تطبيق السكن الطلابي الأول في العريش 
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="text-white inline-block" style={{textShadow: '0px 2px 20px rgba(0,0,0,0.3)'}}>
                    اكتشف <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">أفضل</span> سكن طلابي
                  </span>
                </h1>
                
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white opacity-95" style={{textShadow: '0px 2px 10px rgba(0,0,0,0.2)'}}>
                    مع تطبيق <TypewriterEffect
                      text="الــســهــم"
                      speed={100}
                      deleteSpeed={60}
                      pauseDuration={2000}
                      className="text-yellow-300 font-extrabold inline"
                      showCursor={true}
                      loop={true}
                    />
                  </h2>
                </div>
                
                {/* Animated Divider with Glow */}
                <div className="flex justify-center lg:justify-start mb-6">
                  <div className="relative h-1 w-40 md:w-48 overflow-hidden rounded-full bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-pulse rounded-full"></div>
                    <div className="absolute inset-0 w-20 h-full bg-white/50 animate-[shimmer_2s_infinite] blur-sm" style={{
                      backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%)',
                      animation: 'shimmer 2s infinite',
                      transform: 'translateX(-100%)'
                    }}></div>
                  </div>
                </div>
                
                <p className="text-base md:text-lg lg:text-xl text-blue-50 mb-8 leading-relaxed px-4 lg:px-0">
                منصة متكاملة للإسكان الطلابي والتعامل من خلالنا
                  <span className="text-yellow-200 font-semibold mx-1"> سهلاً وآمناً وفعالاً </span>
                  من خلال نظام متطور وواجهة مستخدم سلسة
                </p>

                {/* CTA Buttons with Enhanced Design */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start px-4 lg:px-0 mb-8">
                  <Button
                    asChild
                    size="lg"
                    className="relative overflow-hidden bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 text-lg md:text-xl px-8 md:px-10 py-4 md:py-6 font-bold rounded-full shadow-[0_0_15px_rgba(255,190,0,0.5)] hover:shadow-[0_0_25px_rgba(255,190,0,0.7)] transition-all duration-500 hover:-translate-y-1 hover:scale-105 border-2 border-yellow-300/30 animate-pulse-slow group"
                  >
                    <a href={downloadUrl} download className="flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-orange-500/20 to-red-500/20 group-hover:opacity-75 transition-opacity duration-300"></div>
                      <div className="relative flex items-center justify-center">
                        <Download className="ml-3 w-6 md:w-7 h-6 md:h-7 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                        <span>حمّل التطبيق مجاناً</span>
                      </div>
                      <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/0 via-yellow-400/40 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-md animate-shimmer"></div>
                    </a>
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    className="group glass border-2 border-white/30 text-white bg-white/10 hover:bg-white/20 text-lg md:text-xl px-8 md:px-10 py-4 md:py-6 font-bold rounded-full transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
                    onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <span>اكتشف المميزات</span>
                    <ArrowDown className="mr-3 w-5 md:w-6 h-5 md:h-6 group-hover:translate-y-1 transition-transform duration-300" />
                  </Button>
                </div>

                {/* Enhanced Platform Availability Badge */}
                <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-sm border border-white/20 px-5 py-3 rounded-xl shadow-lg">
                  <div className="flex items-center gap-1">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-white font-medium">متاح حالياً</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20">
                      <img 
                        src="https://img.icons8.com/?size=100&id=P2AnGyiJxMpp&format=png&color=000000" 
                        alt="أندرويد"
                        className="w-4 h-4"
                      />
                    </span>
                    <span className="text-white/90 text-sm">أندرويد</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20">
                      <img 
                        src="https://img.icons8.com/?size=100&id=30840&format=png&color=000000" 
                        alt="آي أو إس"
                        className="w-4 h-4"
                      />
                    </span>
                    <span className="text-white/70 text-sm">iOS قريباً</span>
                  </div>
                </div>
              </div>
              
              {/* Phone Mockup - Enhanced */}
              <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
                <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <div className="relative">
                    {/* Upgraded Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-40 animate-pulse"></div>
                    
                    {/* Orbiting Elements */}
                    <div className="absolute w-full h-full">
                      <div className="absolute top-0 right-0 w-16 h-16 border-4 border-dashed border-cyan-400/30 rounded-full animate-spin-slow" style={{width: '120%', height: '120%', top: '-10%', right: '-10%'}}></div>
                      <div className="absolute top-0 right-0 w-16 h-16 border-4 border-dashed border-purple-400/20 rounded-full animate-spin-slow" style={{width: '140%', height: '140%', top: '-20%', right: '-20%', animationDirection: 'reverse', animationDuration: '15s'}}></div>
                    </div>
                    
                    {/* Main Phone Device */}
                    <div className="relative w-64 md:w-[350px] h-[500px] md:h-[600px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[40px] p-3 md:p-4 shadow-2xl transform hover:rotate-0 transition-all duration-500 rotate-2 hover:-translate-y-2">
                      {/* Inner Screen */}
                      <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-[32px] overflow-hidden relative">
                        {/* Status Bar */}
                        <div className="absolute top-0 left-0 right-0 h-6 md:h-8 bg-black/40 backdrop-blur-sm z-20 flex items-center justify-between px-5">
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-green-400"></div>
                          </div>
                          <div className="text-white text-xs">7:09</div>
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                          </div>
                        </div>
                        
                        {/* App Content */}
                        <img
                          src="https://i.ibb.co/mCdYb4r2/phone-2.png"
                          alt="تطبيق السهم"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                            if (nextElement) {
                              nextElement.style.display = 'flex';
                            }
                          }}
                        />
                        
                        {/* Fallback UI */}
                        <div className="hidden w-full h-full flex-col bg-gradient-to-b from-indigo-50 to-blue-100">
                          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 h-16 md:h-20 flex items-center justify-center relative">
                            <h3 className="text-white font-bold text-lg md:text-xl">السهم</h3>
                            <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white w-5 h-5" />
                          </div>
                          <div className="flex-1 p-4 md:p-6 space-y-3 md:space-y-4">
                            <div className="bg-white h-8 md:h-10 rounded-lg shadow-sm"></div>
                            <div className="bg-gradient-to-r from-blue-100 to-purple-100 h-24 md:h-32 rounded-lg shadow-sm"></div>
                            <div className="bg-white h-5 md:h-6 rounded w-3/4 shadow-sm"></div>
                            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 h-12 md:h-16 rounded-lg shadow-sm"></div>
                            <div className="flex justify-between gap-2">
                              <div className="bg-white h-14 w-1/3 rounded-lg shadow-sm"></div>
                              <div className="bg-white h-14 w-1/3 rounded-lg shadow-sm"></div>
                              <div className="bg-white h-14 w-1/3 rounded-lg shadow-sm"></div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Screen Reflection and Effects */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent_80%)]"></div>
                        
                        {/* Home Indicator */}
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-white/50 rounded-full"></div>
                      </div>
                      
                      {/* Phone Camera Cutout */}
                      <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-full"></div>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-blue-500/30 animate-float"></div>
                    <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-lg shadow-purple-500/30 animate-float" style={{animationDelay: '1s'}}></div>
                    <div className="absolute top-1/2 -left-8 w-6 h-6 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full shadow-lg shadow-amber-500/30 animate-float" style={{animationDelay: '1.5s'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Improved Wave Divider with Gradient */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative w-full h-20 md:h-auto">
              <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
            </svg>
          </div>
        </section>

        {/* Stats Section */}
        <StatsSection />

        {/* Features Section */}
        <FeaturesSection />



      {/* Enhanced Testimonials Carousel */}
      <div id="testimonials">
        <TestimonialsCarousel testimonials={testimonials} />
      </div>

      {/* Contact Us Section */}
      <div id="contact">
        <ContactSection />
      </div>


      </main>

    </div>
  );
};

export default Index;
