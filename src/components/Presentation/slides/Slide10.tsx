import React from 'react';

const Slide10: React.FC = () => {
  return (
    <>
      <h2>Ключевые выводы</h2>
      
      <div className="key-takeaways-grid">
        <div className="takeaway-card">
          <div className="takeaway-icon">🤖</div>
          <h3>Технология предсказания</h3>
          <p>AI - это не замена человека, а мощный инструмент прогнозирования</p>
        </div>
        
        <div className="takeaway-card">
          <div className="takeaway-icon">🤝</div>
          <h3>Партнерство с людьми</h3>
          <p>Лучший результат достигается в сотрудничестве с человеком</p>
        </div>
        
        <div className="takeaway-card">
          <div className="takeaway-icon">⚡</div>
          <h3>Быстрый старт</h3>
          <p>AI дает преимущество в начале, человек побеждает в долгосрочной</p>
        </div>
        
        <div className="takeaway-card">
          <div className="takeaway-icon">🛠️</div>
          <h3>Готовые инструменты</h3>
          <p>Полезные AI-решения уже доступны для использования сегодня</p>
        </div>
      </div>
      
      <div className="emoji">💬</div>
      
      <h3>Ваши вопросы:</h3>
    </>
  );
};

export default Slide10;