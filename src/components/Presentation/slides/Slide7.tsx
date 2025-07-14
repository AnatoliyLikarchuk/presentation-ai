import React from 'react';

const Slide7: React.FC = () => {
  return (
    <>
      <h2>Практические примеры использования AI</h2>
      
      <p>Два крутых инструмента... и это не ChatGPT! <span className="emoji">😉</span></p>
      
      <div className="tools-grid">
        <div className="tool-card">
          <h3>🎙️ NotebookLM</h3>
          <p>Превращает ваши документы в подкаст</p>
          <p>Два AI-ведущих обсуждают ваш материал</p>
          <p>Идеально для изучения сложных тем</p>
        </div>
        
        <div className="tool-card">
          <h3>🌐 YouTube Перевод</h3>
          <p>Закадровый перевод в браузере Chrome</p>
          <p>Работает в реальном времени</p>
          <p>Сохраняет голос оригинала</p>
        </div>
      </div>
      
      <p>Оба инструмента показывают как AI может <span className="highlight">упростить нашу жизнь</span> уже сегодня</p>
      
      <p>Далее рассмотрим каждый подробнее 👉</p>
    </>
  );
};

export default Slide7;