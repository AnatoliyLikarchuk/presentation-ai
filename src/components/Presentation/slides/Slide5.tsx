import React from 'react';
import collabImage from '../../../assets/collabwork_with_ai.png';

const Slide5: React.FC = () => {
  return (
    <>
      <h2>AI - это не интеллект, а технология предсказания</h2>
      
      <p>🤝 AI работает лучше всего в <span className="highlight">партнерстве с человеком</span></p>
      
      <ul>
        <li>🧠 Человек задает направление и цели</li>
        <li>🤖 AI обрабатывает данные и предлагает варианты</li>
        <li>👥 Вместе мы получаем лучший результат</li>
      </ul>
      
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
    </>
  );
};

export default Slide5;