import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  delay?: number;
  className?: string;
  gradient?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 2000,
  delay = 0,
  className = "",
  gradient = "from-blue-500 to-purple-500"
}) => {
  const [displayValue, setDisplayValue] = useState('0');
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  // استخراج الرقم من النص
  const extractNumber = (str: string): number => {
    // التعامل مع الأرقام العربية والإنجليزية
    const arabicToEnglish = str.replace(/[٠-٩]/g, (d) => '٠١٢٣٤٥٦٧٨٩'.indexOf(d).toString());
    const match = arabicToEnglish.match(/[\d,.]+/);
    if (match) {
      // تحويل الفواصل والنقاط
      return parseFloat(match[0].replace(/,/g, '').replace('+', ''));
    }
    return 0;
  };

  // استخراج النص غير الرقمي
  const extractNonNumeric = (str: string): { prefix: string; suffix: string } => {
    const arabicToEnglish = str.replace(/[٠-٩]/g, (d) => '٠١٢٣٤٥٦٧٨٩'.indexOf(d).toString());
    const match = arabicToEnglish.match(/^([^\d]*)([.\d,]+)(.*)$/);
    if (match) {
      return {
        prefix: str.substring(0, match[1].length),
        suffix: str.substring(str.length - match[3].length)
      };
    }
    return { prefix: '', suffix: str };
  };

  // تنسيق الرقم مع الفواصل
  const formatNumber = (num: number): string => {
    // إذا كان الرقم صحيحًا، نستخدم التنسيق العادي
    if (Number.isInteger(num)) {
      return num.toLocaleString('en-US');
    }
    // إذا كان الرقم عشرياً، نحافظ على رقم عشري واحد
    return num.toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  // إعادة تعيين Intersection Observer
  useEffect(() => {
    // دائماً نعيد محاولة الظهور عند التحميل
    setHasAnimated(false);
    setIsVisible(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.1, // تقليل قيمة العتبة لتنشيط الرصد بشكل أسرع
        rootMargin: '0px 0px -10% 0px'
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [value]); // إعادة التشغيل عند تغيير القيمة

  // انيميشن العد
  useEffect(() => {
    if (!isVisible) return;

    const targetNumber = extractNumber(value);
    const { prefix, suffix } = extractNonNumeric(value);

    if (targetNumber === 0) {
      setDisplayValue(value);
      return;
    }

    // تعيين القيمة المبدئية
    setDisplayValue(`${prefix}0${suffix}`);

    // إضافة تأخير قبل بدء الانيميشن
    const startAnimation = () => {
      setIsAnimating(true);
      let startTime: number;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;

        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // استخدام easing function للحصول على انيميشن أكثر سلاسة
        const easeOutQuint = 1 - Math.pow(1 - progress, 5);
        const currentNumber = targetNumber * easeOutQuint;

        setDisplayValue(`${prefix}${formatNumber(currentNumber)}${suffix}`);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          setDisplayValue(value);
          setIsAnimating(false);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    };

    // بدء الانيميشن مع التأخير
    const timeoutId = setTimeout(startAnimation, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isVisible, value, duration, delay]);

  return (
    <div
      ref={counterRef}
      className={`${className} w-full flex items-center justify-center`}
    >
      <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent overflow-visible`}>
        {displayValue}
      </div>
    </div>
  );
};

export default AnimatedCounter;
