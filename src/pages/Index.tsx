
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
  const downloadUrl = "https://github.com/zayed11112/elsahm-dev/releases/download/v1.0.0/Elsahm-App-v1.0.0.apk";
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
        title="تطبيق السهم للتسكين الطلابي - منصة شاملة للإسكان الطلابي في مصر"
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
        <section id="home" className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-orange-500 min-h-screen flex items-center" role="banner" aria-label="القسم الرئيسي لتطبيق السهم للتسكين الطلابي">
        <div className="container mx-auto px-4 py-8 md:py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pt-16 md:pt-20">
            <div className={`lg:w-1/2 text-center lg:text-right transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6 leading-relaxed">
                <span className="text-white drop-shadow-2xl shadow-black/50 block" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 10px rgba(255,255,255,0.3)'}}>
                  تطبيق <TypewriterEffect
                    text="شركة السهم"
                    speed={100}
                    deleteSpeed={60}
                    pauseDuration={2000}
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
              <div className={`relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* Phone Container with Enhanced Design */}
                <div className="relative">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>

                  {/* Phone Frame */}
                  <div className="relative w-64 md:w-80 h-96 md:h-[500px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-2 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-800 float">
                    {/* Screen */}
                    <div className="w-full h-full bg-black rounded-2xl overflow-hidden relative">
                      {/* Phone Image */}
                      <img
                        src="https://i.ibb.co/mCdYb4r2/phone-2.png"
                        alt="تطبيق السهم"
                        className="w-full h-full object-cover rounded-2xl"
                        onError={(e) => {
                          // Fallback if image doesn't load
                          e.currentTarget.style.display = 'none';
                          const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                          if (nextElement) {
                            nextElement.style.display = 'flex';
                          }
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
