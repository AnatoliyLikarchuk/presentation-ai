import React from 'react';
import AnimatedElement from '../../AnimatedElement';
import productivityImage from '../../../assets/time_work_productivity.png';

interface Slide6Props {
  currentStep: number;
}

const Slide6: React.FC<Slide6Props> = ({ currentStep }) => {
  return (
    <>
      <AnimatedElement step={0} currentStep={currentStep} animationType="fade">
        <h2>Интересный эксперимент с производительностью</h2>
      </AnimatedElement>
      
      <AnimatedElement step={1} currentStep={currentStep} animationType="slideUp" delay={100}>
        <p>Группа ученых работала параллельно с AI над одинаковыми задачами</p>
      </AnimatedElement>
      
      <img 
        src={productivityImage} 
        alt="Эксперимент с производительностью" 
        className="slide-image"
        onError={(e) => {
          console.error('Ошибка загрузки изображения на slide 6:', e);
          console.log('Пытаюсь резервный путь...');
          e.currentTarget.src = '/images/time_work_productivity.png';
        }}
        onLoad={() => console.log('Изображение time_work_productivity.png успешно загружено на slide 6')}
      />
      
      <AnimatedElement step={2} currentStep={currentStep} animationType="slideUp" delay={200}>
        <div className="experiment-table">
          <div className="experiment-item">
            <h4>Первые дни</h4>
            <p>🚀 AI опережал людей</p>
            <p>⚡ Быстрые результаты</p>
            <p>🎯 Стандартные решения</p>
          </div>
          
          <div className="experiment-item">
            <h4>Через время</h4>
            <p>📈 Люди догнали AI</p>
            <p>🎨 Творческие решения</p>
            <p>🔄 Адаптация к изменениям</p>
          </div>
          
          <div className="experiment-item">
            <h4>Итог</h4>
            <p>🏆 Люди превзошли AI</p>
            <p>🧠 Глубокое понимание</p>
            <p>💡 Инновационные подходы</p>
          </div>
        </div>
      </AnimatedElement>
    </>
  );
};

export default Slide6;