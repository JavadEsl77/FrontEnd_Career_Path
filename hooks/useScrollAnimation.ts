// Fix: Import 'React' to make the 'React' namespace available for types like 'React.RefObject'.
import React, { useState, useEffect, useRef } from 'react';

type ObserverOptions = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
};

export const useScrollAnimation = <T extends HTMLElement,>(options?: ObserverOptions): [React.RefObject<T>, boolean] => {
  const elementRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        ...options,
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return [elementRef, isVisible];
};
