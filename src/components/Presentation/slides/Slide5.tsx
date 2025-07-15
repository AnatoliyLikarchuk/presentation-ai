import React from 'react';
import AnimatedElement from '../../AnimatedElement';
import collabImage from '../../../assets/collabwork_with_ai.png';

interface Slide5Props {
  currentStep: number;
}

const Slide5: React.FC<Slide5Props> = ({ currentStep }) => {
  return (
    <>
      <AnimatedElement step={0} currentStep={currentStep} animationType="fade">
        <h2>AI - это не интеллект, а технология предсказания</h2>
      </AnimatedElement>
      
      <AnimatedElement step={1} currentStep={currentStep} animationType="slideUp" delay={100}>
        <p>🤝 AI работает лучше всего в <span className="highlight">партнерстве с человеком</span></p>
      </AnimatedElement>
      
      <AnimatedElement step={2} currentStep={currentStep} animationType="slideLeft" delay={200}>
        <ul>
          <li>🧠 Человек задает направление и цели</li>
          <li>🤖 AI обрабатывает данные и предлагает варианты</li>
          <li>👥 Вместе мы получаем лучший результат</li>
        </ul>
      </AnimatedElement>
      
      <AnimatedElement step={3} currentStep={currentStep} animationType="fade" delay={300}>
        <img 
          src={collabImage} 
          alt="Совместная работа с AI" 
          className="slide-image"
          onError={(e) => {
            console.error('Ошибка загрузки изображения:', e);
            e.currentTarget.style.display = 'none';
          }}
          onLoad={() => console.log('Изображение collabwork_with_ai.png загружено')}
        />
        
        <p>Это не замена человеческого интеллекта, а его <span className="highlight">усиление</span></p>
      </AnimatedElement>
    </>
  );
};

export default Slide5;