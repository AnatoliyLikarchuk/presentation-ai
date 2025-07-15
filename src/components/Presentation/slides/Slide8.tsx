import React from 'react';

interface Slide8Props {
  currentStep?: number;
}

const Slide8: React.FC<Slide8Props> = ({ currentStep }) => {
  return (
    <>
      <div className="slide-content-center">
        <h2 className="big-question">Как же эту технологию применить прямо сегодня?</h2>
        
        <div className="question-divider">
          <span className="highlight-symbol">⚡</span>
        </div>
        
        <h3 className="sub-question">Два крутых инструмента... и это не ChatGPT! <span className="emoji">😉</span></h3>
      </div>
    </>
  );
};

export default Slide8;