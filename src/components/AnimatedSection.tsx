import React, { useRef, useEffect, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delayMs = 0
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delayMs > 0) {
            setTimeout(() => {
              setIsVisible(true);
            }, delayMs);
          } else {
            setIsVisible(true);
          }
          // Stop observing once it's visible to avoid re-triggering
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.08, // trigger when 8% of element is in view
        rootMargin: '0px 0px -40px 0px' // offset so it triggers slightly before coming fully into view
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delayMs]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) transform ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-10 scale-[0.98]'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
