import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Users, 
  CheckCircle,
  Instagram,
  Facebook,
  MessageCircle
} from "lucide-react";

// Custom WhatsApp Icon Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
  </svg>
);

const ContactSection = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "اتصل بنا مباشرة",
      subtitle: "خدمة عملاء متميزة",
      value: "01093130120",
      displayValue: "01093130120",
      link: "tel:01093130120",
      gradient: "from-blue-500 to-cyan-500",
      btnColor: "bg-blue-600 hover:bg-blue-700",
      iconBoxColor: "bg-blue-100 text-blue-600",
      description: "متاح 24/7 لخدمتك"
    },
    {
      icon: <WhatsAppIcon className="w-6 h-6" />,
      title: "تواصل عبر واتساب",
      subtitle: "الطريقة الأسرع للتواصل",
      value: "+201093130120",
      displayValue: "واتساب مباشر",
      link: "https://wa.me/201093130120?text=مرحباً، أريد الاستفسار عن تطبيق السهم",
      gradient: "from-green-500 to-emerald-500",
      btnColor: "bg-green-600 hover:bg-green-700",
      iconBoxColor: "bg-green-100 text-green-600",
      description: "رد خلال دقائق"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "البريد الإلكتروني",
      subtitle: "للاستفسارات التفصيلية",
      value: "elsahm.arish@gmail.com",
      displayValue: "elsahm.arish@gmail.com",
      link: "mailto:elsahm.arish@gmail.com?subject=استفسار عن تطبيق السهم",
      gradient: "from-red-500 to-pink-500",
      btnColor: "bg-red-600 hover:bg-red-700",
      iconBoxColor: "bg-red-100 text-red-600",
      description: "دعم فني متخصص"
    }
  ];

  // Designer social links
  const designerSocials = [
    {
      icon: <WhatsAppIcon className="w-5 h-5" />,
      name: "واتساب",
      link: "https://wa.me/201003193622",
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      name: "انستجرام",
      link: "https://www.instagram.com/eslamz11/",
      color: "bg-pink-500 hover:bg-pink-600"
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      name: "فيس بوك",
      link: "https://www.facebook.com/eslammosalah",
      color: "bg-blue-500 hover:bg-blue-600"
    }
  ];

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Modern Background with Animated Gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-50 via-white to-green-50"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxODE4MTgiIGZpbGwtb3BhY2l0eT0iMC4wMSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NWgtMXYtNXptNiAwaDF2NWgtMXYtNXptLTExIDBoMXYzaC0xdi0zeiIvPjwvZz48L2c+PC9zdmc+')] bg-[length:60px_60px]"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-300"></div>
      </div>

      <div className="container relative mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <span className="inline-block py-1.5 px-4 bg-blue-100 bg-opacity-60 text-blue-700 rounded-full text-sm font-medium">
              تواصل معنا
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700">
            نحن هنا لمساعدتك
          </h2>
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-10 h-1 rounded-full bg-blue-600"></div>
            <div className="w-3 h-3 rounded-full bg-blue-600"></div>
            <div className="w-10 h-1 rounded-full bg-blue-600"></div>
          </div>
          
          <p className="text-gray-600 text-lg mb-0 max-w-2xl mx-auto">
            فريق دعم متخصص وجاهز لمساعدتك في أي وقت. تواصل معنا بالطريقة التي تناسبك.
          </p>
        </div>

        {/* Contact Methods Cards */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1 duration-300">
              <div className="relative">
                <div className={`absolute top-0 right-0 w-32 h-32 rounded-full ${method.iconBoxColor} opacity-10 transform translate-x-10 -translate-y-10`}></div>
                
                <CardContent className="p-8">
                  <div className="flex flex-col items-center mb-4">
                    <div className={`${method.iconBoxColor} rounded-xl p-4 mb-5`}>
                      {method.icon}
                    </div>
                    
                    <h3 className="font-bold text-2xl mb-2 text-center">{method.title}</h3>
                    <p className="text-gray-500 text-sm mb-4 text-center">{method.subtitle}</p>
                    <p className="text-gray-700 text-center mb-6">{method.description}</p>
                  </div>
                  
                  <a
                    href={method.link}
                    target={method.link.startsWith('http') ? '_blank' : undefined}
                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`block w-full text-center py-3 px-4 ${method.btnColor} text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105`}
                  >
                    {method.displayValue}
                  </a>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Location and Extra Info */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="text-lg font-semibold mb-2">الموقع</h4>
            <p className="text-gray-600">شمال سيناء - العريش</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="text-lg font-semibold mb-2">ساعات العمل</h4>
            <p className="text-gray-600">السبت - الخميس: ٩ ص - ٥ م</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300">
            <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <h4 className="text-lg font-semibold mb-2">فريق الدعم</h4>
            <p className="text-gray-600">متاح على مدار الساعة</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300">
            <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 text-amber-600" />
            </div>
            <h4 className="text-lg font-semibold mb-2">الاستجابة</h4>
            <p className="text-gray-600">رد سريع خلال دقائق</p>
          </div>
        </div>

        {/* Designer Information Section */}
        <div className="mt-24 max-w-6xl mx-auto">
          <div className="relative overflow-hidden bg-white rounded-3xl shadow-xl">
            {/* Background patterns */}
            <div className="absolute inset-0 z-0">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-30 transform translate-x-20 -translate-y-20"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-100 rounded-full opacity-30 transform -translate-x-20 translate-y-20"></div>
            </div>
            
            <div className="relative z-10 p-6 md:p-10 flex flex-col md:flex-row items-center gap-10">
              {/* Designer Image */}
              <div className="shrink-0">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src="https://i.ibb.co/gLdV6nLr/scaled-1000165177.jpg" 
                    alt="Eslam Zayed"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Designer Info */}
              <div className="flex-1 text-center md:text-right">
                <div className="inline-block py-1 px-3 bg-blue-100 text-blue-600 rounded-full text-xs font-medium mb-3">
                  مصمم التطبيق
                </div>
                <h3 className="text-3xl font-bold mb-3 text-gray-800">إسلام زايد</h3>
                <p className="text-gray-600 mb-6 max-w-lg">مصمم ومطوّر واجهات مستخدم محترف متخصص في تطوير تطبيقات الويب والموبايل بتقنيات متطورة وتجربة مستخدم استثنائية.</p>
                
                {/* Social Links */}
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  {designerSocials.map((social, index) => (
                    <a 
                      key={index}
                      href={social.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-white transition-all hover:scale-105 ${social.color}`}
                    >
                      {social.icon}
                      <span>{social.name}</span>
                    </a>
                  ))}
                </div>
                
                {/* Professional Info */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex flex-col items-center bg-gray-50 p-4 rounded-xl">
                    <span className="text-3xl font-bold text-blue-600">+5</span>
                    <span className="text-gray-600 text-sm">سنوات خبرة</span>
                  </div>
                  <div className="flex flex-col items-center bg-gray-50 p-4 rounded-xl">
                    <span className="text-3xl font-bold text-blue-600">+50</span>
                    <span className="text-gray-600 text-sm">مشروع مكتمل</span>
                  </div>
                  <div className="flex flex-col items-center bg-gray-50 p-4 rounded-xl">
                    <span className="text-3xl font-bold text-blue-600">100%</span>
                    <span className="text-gray-600 text-sm">رضا العملاء</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
