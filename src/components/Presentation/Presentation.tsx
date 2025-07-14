import React, { useState, useEffect } from 'react';
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

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      const newSlide = currentSlide + 1;
      setCurrentSlide(newSlide);
      navigate(`/slide/${newSlide + 1}`);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      const newSlide = currentSlide - 1;
      setCurrentSlide(newSlide);
      navigate(`/slide/${newSlide + 1}`);
    }
  };

  useEffect(() => {
    if (slideNumber) {
      const slideNum = parseInt(slideNumber, 10) - 1;
      if (slideNum >= 0 && slideNum < slides.length) {
        setCurrentSlide(slideNum);
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

      <div className="slide">
        <CurrentSlideComponent />
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