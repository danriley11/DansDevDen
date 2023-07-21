import { ReactNode, useEffect, useRef, useState } from 'react';
import { FadingDivUp } from '../blocks/FadingDiv.styles';

interface IntersectionProps {
  children: ReactNode;
  threshold?: number;
}

const IntersectionWrapper = ({ children, threshold = 0.5 }: IntersectionProps) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: threshold },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <FadingDivUp ref={elementRef} isVisible={isVisible}>
      {children}
    </FadingDivUp>
  );
};

export default IntersectionWrapper;
