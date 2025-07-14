import React from 'react';

const Slide2: React.FC = () => {
  return (
    <>
      <h2>AI, AGI и ASI - что это такое?</h2>
      
      <div className="ai-concepts-table">
        <div className="ai-concept-item">
          <h4>AI (ANI)</h4>
          <p><strong>Artificial Narrow Intelligence</strong></p>
          <p>Узкоспециализированные системы</p>
          <p>Решают конкретные задачи</p>
          <p>Например: распознавание речи, рекомендации</p>
        </div>
        
        <div className="ai-concept-item">
          <h4>AGI</h4>
          <p><strong>Artificial General Intelligence</strong></p>
          <p>Общий интеллект как у человека</p>
          <p>Может учиться любым задачам</p>
          <p>Пока не существует</p>
        </div>
        
        <div className="ai-concept-item">
          <h4>ASI</h4>
          <p><strong>Artificial Super Intelligence</strong></p>
          <p>Превосходит человеческий интеллект</p>
          <p>Во всех областях</p>
          <p>Теоретическая концепция</p>
        </div>
      </div>
      
      <p>Сегодня мы имеем дело только с <span className="highlight">AI (ANI)</span></p>
    </>
  );
};

export default Slide2;