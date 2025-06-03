import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: object;
}

const SEOHead = ({
  title = "تطبيق السهم للتسكين الطلابي - منصة شاملة للإسكان الطلابي في مصر",
  description = "تطبيق السهم للتسكين هو منصة متكاملة تسعى لتوفير حلول سكنية مناسبة للطلاب بطريقة سهلة وآمنة، بواجهة عربية سلسة ومميزات متعددة تلبي احتياجات الطلاب في مختلف المراحل الدراسية.",
  keywords = "تسكين طلابي, سكن طلاب, إسكان جامعي, تطبيق السهم, سكن طلابي مصر, حجز سكن طلابي, شقق طلابية, غرف مشتركة, استوديوهات طلابية, سكن جامعة سيناء",
  image = "https://i.ibb.co/rK72d17/app-1.png",
  url = "https://zayed11112.github.io/elsahm-dev/",
  type = "website",
  structuredData
}: SEOHeadProps) => {
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);
    
    // Twitter tags
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', image, true);
    updateMetaTag('twitter:url', url, true);
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
    
    // Structured Data
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }
    
  }, [title, description, keywords, image, url, type, structuredData]);

  return null; // This component doesn't render anything
};

export default SEOHead;
