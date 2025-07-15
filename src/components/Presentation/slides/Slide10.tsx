import React from 'react';
import AnimatedElement from '../../AnimatedElement';

interface Slide10Props {
  currentStep: number;
}

const Slide10: React.FC<Slide10Props> = ({ currentStep }) => {
  return (
    <>
      <AnimatedElement step={0} currentStep={currentStep} animationType="fade">
        <h2>Ключевые выводы</h2>
      </AnimatedElement>
      
      <div className="modern-list">
        <AnimatedElement step={1} currentStep={currentStep} animationType="slideLeft" delay={100}>
          <div className="list-item">
            <span className="list-emoji">🤖</span>
            <span className="list-text">AI - это <strong>технология предсказания</strong>, не замена человека</span>
          </div>
        </AnimatedElement>
        
        <AnimatedElement step={2} currentStep={currentStep} animationType="slideLeft" delay={200}>
          <div className="list-item">
            <span className="list-emoji">🤝</span>
            <span className="list-text">Лучше всего работает в <strong>партнерстве с людьми</strong></span>
          </div>
        </AnimatedElement>
        
        <AnimatedElement step={3} currentStep={currentStep} animationType="slideLeft" delay={300}>
          <div className="list-item">
            <span className="list-emoji">⚡</span>
            <span className="list-text">Дает <strong>быстрый старт</strong>, но человек выигрывает долгосрочно</span>
          </div>
        </AnimatedElement>
        
        <AnimatedElement step={4} currentStep={currentStep} animationType="slideLeft" delay={400}>
          <div className="list-item">
            <span className="list-emoji">🛠️</span>
            <span className="list-text">Уже сейчас есть <strong>полезные инструменты</strong> для работы</span>
          </div>
        </AnimatedElement>
      </div>
      
      <AnimatedElement step={5} currentStep={currentStep} animationType="slideUp" delay={500}>
        <div className="emoji">💬</div>
        
        <h3>Ваши вопросы:</h3>
      </AnimatedElement>
    </>
  );
};

export default Slide10;