import React from 'react';

interface Slide4Props {
  currentStep?: number;
}

const Slide4: React.FC<Slide4Props> = ({ currentStep }) => {
  return (
    <>
      <h2>Как работает предсказание следующего токена</h2>
      
      <p>Простой пример:</p>
      
      <div className="token-example">
        <strong>Вход:</strong> "В субботу я буду..."<br/>
        <strong>AI анализирует:</strong> день недели, время года, профиль пользователя<br/>
        <strong>Возможные варианты:</strong><br/>
        • "встречаться с друзьями" (25%)<br/>
        • "отдыхать" (20%)<br/>
        • "готовить" (15%)<br/>
        • "работать" (15%)<br/>
        • "читать" (10%)<br/>
        • "смотреть фильм" (8%)<br/>
        • другое (7%)<br/>
        <strong>Выбирает:</strong> "встречаться с друзьями"
      </div>
      
      <p>📝 Когда вы набираете текст и видите подсказки - это та же технология!</p>
      
      <p>Это не "понимание" в человеческом смысле, а <span className="highlight">статистическое предсказание</span> на основе паттернов</p>
      
      <div className="emoji">🎯</div>
    </>
  );
};

export default Slide4;