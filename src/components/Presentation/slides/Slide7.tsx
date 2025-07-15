import React from 'react';
import AnimatedElement from '../../AnimatedElement';

interface Slide7Props {
  currentStep: number;
}

const Slide7: React.FC<Slide7Props> = ({ currentStep }) => {
  return (
    <>
      <AnimatedElement step={0} currentStep={currentStep} animationType="fade">
        <h2>Практические примеры использования AI</h2>
      </AnimatedElement>
      
      <div className="tools-grid">
        <AnimatedElement step={1} currentStep={currentStep} animationType="slideLeft" delay={100}>
          <div className="tool-card">
            <h3>🎙️ NotebookLM</h3>
            <p>Отлично структурируют материал</p>
            <p>Два AI-ведущих обсуждают ваш материал</p>
            <p>Идеально для изучения сложных тем</p>
          </div>
        </AnimatedElement>
        
        <AnimatedElement step={2} currentStep={currentStep} animationType="slideRight" delay={200}>
          <div className="tool-card">
            <h3>🌐 YouTube Перевод</h3>
            <p>Закадровый перевод в браузере Chrome</p>
            <p>Работает в реальном времени</p>
            <p>Мужские и женские голоса</p>
          </div>
        </AnimatedElement>
      </div>
      
      <AnimatedElement step={3} currentStep={currentStep} animationType="slideUp" delay={300}>
        <p>Оба инструмента показывают как AI может <span className="highlight">упростить нашу жизнь</span> уже сегодня</p>
        
        <p>Далее рассмотрим каждый подробнее 👉</p>
      </AnimatedElement>
    </>
  );
};

export default Slide7;