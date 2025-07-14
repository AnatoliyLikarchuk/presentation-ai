import React from 'react';
import productivityImage from '../../../assets/time_work_productivity.png';

const Slide6: React.FC = () => {
  return (
    <>
      <h2>Интересный эксперимент с производительностью</h2>
      
      <p>Группа ученых работала параллельно с AI над одинаковыми задачами</p>
      
      <img 
        src={productivityImage} 
        alt="Эксперимент с производительностью" 
        className="slide-image"
        onError={(e) => {
          console.error('Ошибка загрузки изображения:', e);
          e.currentTarget.style.display = 'none';
        }}
        onLoad={() => console.log('Изображение time_work_productivity.png загружено')}
      />
      
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
      
    </>
  );
};

export default Slide6;