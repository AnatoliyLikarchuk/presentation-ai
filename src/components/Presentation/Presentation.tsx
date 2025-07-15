import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
import Slide3 from './slides/Slide3';
import Slide4 from './slides/Slide4';
import Slide5 from './slides/Slide5';
import Slide6 from './slides/Slide6';
import Slide7 from './slides/Slide7';
import Slide8 from './slides/Slide8';
import Slide10 from './slides/Slide10';
import { getTotalSteps } from './slideConfig';

const slides = [
  { component: Slide1, title: "Титульный слайд" },
  { component: Slide2, title: "AI, AGI, ASI" },
  { component: Slide3, title: "Сравнение с T9" },
  { component: Slide4, title: "Предсказание токенов" },
  { component: Slide5, title: "AI как технология" },
  { component: Slide6, title: "Эксперимент с производительностью" },
  { component: Slide8, title: "Применение технологии" },
  { component: Slide7, title: "Практические примеры" },
  { component: Slide10, title: "Вопросы и ответы" }
];

const Presentation: React.FC = () => {
  const { slideNumber } = useParams<{ slideNumber: string }>();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const nextSlide = useCallback(() => {
    const totalSteps = getTotalSteps(currentSlide);
    
    if (currentStep < totalSteps - 1) {
      // Переход к следующему подшагу
      setCurrentStep(currentStep + 1);
    } else if (currentSlide < slides.length - 1) {
      // Переход к следующему слайду
      const newSlide = currentSlide + 1;
      setCurrentSlide(newSlide);
      setCurrentStep(0);
      navigate(`/slide/${newSlide + 1}`);
    }
  }, [currentSlide, currentStep, navigate]);

  const prevSlide = useCallback(() => {
    if (currentStep > 0) {
      // Переход к предыдущему подшагу
      setCurrentStep(currentStep - 1);
    } else if (currentSlide > 0) {
      // Переход к предыдущему слайду
      const newSlide = currentSlide - 1;
      const totalSteps = getTotalSteps(newSlide);
      setCurrentSlide(newSlide);
      setCurrentStep(totalSteps - 1);
      navigate(`/slide/${newSlide + 1}`);
    }
  }, [currentSlide, currentStep, navigate]);

  useEffect(() => {
    if (slideNumber) {
      const slideNum = parseInt(slideNumber, 10) - 1;
      if (slideNum >= 0 && slideNum < slides.length) {
        setCurrentSlide(slideNum);
        setCurrentStep(0);
      }
    }
  }, [slideNumber]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'f' || event.key === 'F') {
        toggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide, nextSlide, prevSlide]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const CurrentSlideComponent = slides[currentSlide].component;
  const totalSteps = getTotalSteps(currentSlide);

  return (
    <div className="presentation-container">
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
      
      <div className="slide-counter">
        {currentSlide + 1} / {slides.length}
      </div>

      {totalSteps > 1 && (
        <div className="substep-indicator">
          {Array.from({ length: totalSteps }, (_, index) => (
            <div
              key={index}
              className={`substep-dot ${
                index < currentStep ? 'substep-dot--completed' : 
                index === currentStep ? 'substep-dot--active' : ''
              }`}
            />
          ))}
        </div>
      )}

      <div className="slide">
        <CurrentSlideComponent currentStep={currentStep} />
      </div>

      <div className="navigation">
        <button 
          className="nav-button"
          onClick={prevSlide}
          disabled={currentSlide === 0}
        >
          ← Назад
        </button>
        
        <button 
          className="nav-button"
          onClick={toggleFullscreen}
        >
          Полный экран
        </button>
        
        <button 
          className="nav-button"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
        >
          Далее →
        </button>
      </div>
    </div>
  );
};

export default Presentation;