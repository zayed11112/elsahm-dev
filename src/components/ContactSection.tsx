
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Users, CheckCircle } from "lucide-react";
import AnimatedSection from './AnimatedSection';

// Custom WhatsApp Icon Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
  </svg>
);

const ContactSection = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-7 h-7" />,
      title: "اتصل بنا مباشرة",
      subtitle: "خدمة عملاء متميزة",
      value: "01093130120",
      displayValue: "01093130120",
      link: "tel:01093130120",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      description: "متاح 24/7 لخدمتك",
      features: ["استشارة مجانية", "رد فوري", "دعم متخصص"]
    },
    {
      icon: <WhatsAppIcon className="w-7 h-7" />,
      title: "تواصل عبر واتساب",
      subtitle: "الطريقة الأسرع للتواصل",
      value: "+201093130120",
      displayValue: "واتساب مباشر",
      link: "https://wa.me/201093130120?text=مرحباً، أريد الاستفسار عن تطبيق السهم",
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100",
      description: "رد خلال دقائق",
      features: ["دردشة مباشرة", "مشاركة الصور", "متاح دائماً"]
    },
    {
      icon: <Mail className="w-7 h-7" />,
      title: "البريد الإلكتروني",
      subtitle: "للاستفسارات التفصيلية",
      value: "elsahm.arish@gmail.com",
      displayValue: "elsahm.arish@gmail.com",
      link: "mailto:elsahm.arish@gmail.com?subject=استفسار عن تطبيق السهم",
      gradient: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      iconBg: "bg-red-100",
      description: "دعم فني متخصص",
      features: ["رد خلال 24 ساعة", "حلول مفصلة", "متابعة مستمرة"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-200/20 to-emerald-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-75"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-150"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            فريق دعم متخصص
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.1)'}}>
            تواصل معنا
          </h2>

          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
          </div>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            نحن هنا لمساعدتك في كل خطوة من رحلة البحث عن السكن المثالي
            <br />
            <span className="text-blue-600 font-semibold">فريق دعم محترف متاح على مدار الساعة</span>
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {contactMethods.map((method, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={index * 200}
            >
              <Card className={`group relative overflow-hidden border border-gray-200/50 ${method.bgColor} hover:bg-white shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-[1.02] h-full`}>
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>

                {/* Top Border Accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${method.gradient}`}></div>

                <CardContent className="relative z-10 p-8">
                  <div className="text-center mb-6">
                    <div className={`${method.iconBg} p-4 rounded-2xl inline-flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-sm mb-4`}>
                      <div className="text-gray-700">
                        {method.icon}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                      {method.title}
                    </h3>

                    <p className="text-sm text-gray-600 mb-4">
                      {method.subtitle}
                    </p>

                    <p className="text-xs text-gray-500 mb-6">
                      {method.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {method.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-gray-700 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Contact Button */}
                  <a
                    href={method.link}
                    target={method.link.startsWith('http') ? '_blank' : undefined}
                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`block w-full text-center py-3 px-4 bg-gradient-to-r ${method.gradient} text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105`}
                  >
                    {method.displayValue}
                  </a>
                </CardContent>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Enhanced Bottom Section */}
        <AnimatedSection animation="fade-in" delay={800} className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-50 via-white to-green-50 rounded-3xl p-8 border border-gray-200/50 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-800 mb-1">التغطية الجغرافية</h4>
                  <p className="text-gray-600 text-sm">شمال سيناء - العريش</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-800 mb-1">وقت الاستجابة</h4>
                  <p className="text-gray-600 text-sm">أقل من 30 دقيقة</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-800 mb-1">فريق الدعم</h4>
                  <p className="text-gray-600 text-sm">متاح 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
