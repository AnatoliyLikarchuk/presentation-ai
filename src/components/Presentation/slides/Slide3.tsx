import React from 'react';

const Slide3: React.FC = () => {
  return (
    <>
      <h2>AI похож на знакомую нам технологию T9</h2>
      
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
      
      <p>Основное отличие - это <span className="highlight">масштаб данных</span> и <span className="highlight">сложность паттернов</span></p>
      
      <div className="token-example">
        T9: "Прив" → "Привет"<br/>
        AI: "Столица Франции" → "Париж"
      </div>
    </>
  );
};

export default Slide3;