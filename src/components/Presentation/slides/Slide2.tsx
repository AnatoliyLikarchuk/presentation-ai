import React from 'react';
import AnimatedElement from '../../AnimatedElement';

interface Slide2Props {
  currentStep: number;
}

const Slide2: React.FC<Slide2Props> = ({ currentStep }) => {
  return (
    <>
      <AnimatedElement step={0} currentStep={currentStep} animationType="fade">
        <h2>AI, AGI и ASI - что это такое?</h2>
      </AnimatedElement>
      
      <div className="ai-concepts-table">
        <AnimatedElement step={1} currentStep={currentStep} animationType="slideLeft" delay={100}>
          <div className="ai-concept-item">
            <h4>AI (ANI)</h4>
            <p><strong>Artificial Narrow Intelligence</strong></p>
            <p>Узкоспециализированные системы</p>
            <p>Решают конкретные задачи</p>
            <p>Например: распознавание речи, рекомендации</p>
          </div>
        </AnimatedElement>
        
        <AnimatedElement step={2} currentStep={currentStep} animationType="slideUp" delay={200}>
          <div className="ai-concept-item">
            <h4>AGI</h4>
            <p><strong>Artificial General Intelligence</strong></p>
            <p>Общий интеллект как у человека</p>
            <p>Может учиться любым задачам</p>
            <p>Пока не существует</p>
          </div>
        </AnimatedElement>
        
        <AnimatedElement step={3} currentStep={currentStep} animationType="slideRight" delay={300}>
          <div className="ai-concept-item">
            <h4>ASI</h4>
            <p><strong>Artificial Super Intelligence</strong></p>
            <p>Превосходит человеческий интеллект</p>
            <p>Во всех областях</p>
            <p>Теоретическая концепция</p>
          </div>
        </AnimatedElement>
      </div>
      
      <AnimatedElement step={4} currentStep={currentStep} animationType="fade" delay={400}>
        <p>Сегодня мы имеем дело только с <span className="highlight">AI (ANI)</span></p>
      </AnimatedElement>
    </>
  );
};

export default Slide2;