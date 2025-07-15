import React from 'react';
import AnimatedElement from '../../AnimatedElement';

interface Slide3Props {
  currentStep: number;
}

const Slide3: React.FC<Slide3Props> = ({ currentStep }) => {
  return (
    <>
      <AnimatedElement step={0} currentStep={currentStep} animationType="fade">
        <h2>AI похож на знакомую нам технологию T9</h2>
      </AnimatedElement>
      
      <AnimatedElement step={1} currentStep={currentStep} animationType="slideUp" delay={100}>
        <div className="comparison-table">
          <div className="comparison-item">
            <h4>T9 на телефоне</h4>
            <p>📱 Предсказывает следующее слово</p>
            <p>📝 Основан на частоте использования</p>
            <p>🔤 Работает с ограниченным словарем</p>
            <p>⚡ Быстро и просто</p>
          </div>
          
          <div className="comparison-item">
            <h4>Современный AI</h4>
            <p>🧠 Предсказывает следующий токен</p>
            <p>📊 Основан на паттернах в данных</p>
            <p>🌐 Работает с огромными объемами текста</p>
            <p>🚀 Очень сложно, но принцип тот же</p>
          </div>
        </div>
      </AnimatedElement>
      
      <AnimatedElement step={2} currentStep={currentStep} animationType="slideUp" delay={200}>
        <p>Основное отличие - это <span className="highlight">масштаб данных</span> и <span className="highlight">сложность паттернов</span></p>
      </AnimatedElement>
      
      <AnimatedElement step={3} currentStep={currentStep} animationType="fade" delay={300}>
        <div className="token-example">
          T9: "Прив" → "Привет"<br/>
          AI: "Столица Франции" → "Париж"
        </div>
      </AnimatedElement>
    </>
  );
};

export default Slide3;