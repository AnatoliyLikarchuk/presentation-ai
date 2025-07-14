import React from 'react';

const Slide10: React.FC = () => {
  return (
    <>
      <h2>Ключевые выводы</h2>
      
      <div className="modern-list">
        <div className="list-item">
          <span className="list-emoji">🤖</span>
          <span className="list-text">AI - это <strong>технология предсказания</strong>, не замена человека</span>
        </div>
        
        <div className="list-item">
          <span className="list-emoji">🤝</span>
          <span className="list-text">Лучше всего работает в <strong>партнерстве с людьми</strong></span>
        </div>
        
        <div className="list-item">
          <span className="list-emoji">⚡</span>
          <span className="list-text">Дает <strong>быстрый старт</strong>, но человек выигрывает долгосрочно</span>
        </div>
        
        <div className="list-item">
          <span className="list-emoji">🛠️</span>
          <span className="list-text">Уже сейчас есть <strong>полезные инструменты</strong> для работы</span>
        </div>
      </div>
      
      <div className="emoji">💬</div>
      
      <h3>Ваши вопросы:</h3>
    </>
  );
};

export default Slide10;