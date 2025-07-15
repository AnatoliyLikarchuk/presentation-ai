import React, { useEffect, useState } from 'react';

interface AnimatedElementProps {
  step: number;
  currentStep: number;
  children: React.ReactNode;
  animationType?: 'fade' | 'slideLeft' | 'slideUp' | 'slideRight';
  delay?: number;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  step,
  currentStep,
  children,
  animationType = 'fade',
  delay = 0
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (currentStep >= step) {
      setShouldRender(true);
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
      setShouldRender(false);
    }
  }, [currentStep, step, delay]);

  if (!shouldRender) {
    return null;
  }

  const getAnimationClass = () => {
    const baseClass = 'animated-element';
    const typeClass = `animated-element--${animationType}`;
    const visibleClass = isVisible ? 'animated-element--visible' : '';
    
    return `${baseClass} ${typeClass} ${visibleClass}`.trim();
  };

  return (
    <div className={getAnimationClass()}>
      {children}
    </div>
  );
};

export default AnimatedElement;