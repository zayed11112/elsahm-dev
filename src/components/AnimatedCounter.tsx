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
    const match = arabicToEnglish.match(/[\d,]+/);
    if (match) {
      return parseInt(match[0].replace(/,/g, ''), 10);
    }
    return 0;
  };

  // استخراج النص غير الرقمي
  const extractNonNumeric = (str: string): { prefix: string; suffix: string } => {
    const arabicToEnglish = str.replace(/[٠-٩]/g, (d) => '٠١٢٣٤٥٦٧٨٩'.indexOf(d).toString());
    const match = arabicToEnglish.match(/^([^\d]*)([\d,]+)(.*)$/);
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
    return num.toLocaleString('en-US');
  };

  // Intersection Observer للكشف عن ظهور العنصر
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
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
  }, [hasAnimated]);

  // انيميشن العد
  useEffect(() => {
    if (!isVisible) return;

    const targetNumber = extractNumber(value);
    const { prefix, suffix } = extractNonNumeric(value);

    if (targetNumber === 0) {
      setDisplayValue(value);
      return;
    }

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
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const currentNumber = Math.floor(targetNumber * easeOutCubic);

        setDisplayValue(`${prefix}${formatNumber(currentNumber)}${suffix}`);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          setDisplayValue(value);
          setIsAnimating(false);
          // إضافة تأثير bounce عند انتهاء العد
          setTimeout(() => {
            if (counterRef.current) {
              counterRef.current.classList.add('counter-bounce');
              setTimeout(() => {
                if (counterRef.current) {
                  counterRef.current.classList.remove('counter-bounce');
                }
              }, 600);
            }
          }, 100);
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
      className={`${className} transition-all duration-500 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
    >
      <div className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r ${gradient} bg-clip-text text-transparent transition-all duration-300 ${isAnimating ? 'counter-shimmer' : ''}`}>
        <span className="inline-block">
          {displayValue}
        </span>
      </div>
    </div>
  );
};

export default AnimatedCounter;
