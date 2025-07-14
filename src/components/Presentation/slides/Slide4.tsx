import React from 'react';

const Slide4: React.FC = () => {
  return (
    <>
      <h2>Как работает предсказание следующего токена</h2>
      
      <p>Простой пример:</p>
      
      <div className="token-example">
        <strong>Вход:</strong> "Я хочу съесть..."<br/>
        <strong>AI анализирует:</strong> контекст, время, предпочтения<br/>
        <strong>Возможные варианты:</strong><br/>
        • "пиццу" (30%)<br/>
        • "яблоко" (25%)<br/>
        • "суп" (20%)<br/>
        • "мороженое" (15%)<br/>
        • другое (10%)<br/>
        <strong>Выбирает:</strong> "пиццу"
      </div>
      
      <p>📝 Когда вы набираете текст и видите подсказки - это та же технология!</p>
      
      <p>Это не "понимание" в человеческом смысле, а <span className="highlight">статистическое предсказание</span> на основе паттернов</p>
      
      <div className="emoji">🎯</div>
    </>
  );
};

export default Slide4;