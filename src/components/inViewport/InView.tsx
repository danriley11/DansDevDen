import { ReactNode, useEffect, useRef, useState } from 'react';
import { FadingDivLeft, FadingDivRight, FadingDivUp } from '../blocks/FadingDiv.styles';

interface IntersectionProps {
  children: ReactNode;
  threshold?: number;
  fadeUp?: boolean;
  fadeLeft?: boolean;
  fadeRight?: boolean;
}

const IntersectionWrapper = ({ children, threshold = 0.5, fadeUp, fadeLeft, fadeRight }: IntersectionProps) => {
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

  if (fadeUp) {
    return (
      <FadingDivUp ref={elementRef} isVisible={isVisible}>
        {children}
      </FadingDivUp>
    );
  }

  if (fadeLeft) {
    return (
      <FadingDivLeft ref={elementRef} isVisible={isVisible}>
        {children}
      </FadingDivLeft>
    );
  }

  if (fadeRight) {
    return (
      <FadingDivRight ref={elementRef} isVisible={isVisible}>
        {children}
      </FadingDivRight>
    );
  }
};

export default IntersectionWrapper;
