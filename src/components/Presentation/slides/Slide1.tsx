import React from 'react';

interface Slide1Props {
  currentStep?: number;
}

const Slide1: React.FC<Slide1Props> = ({ currentStep }) => {
  return (
    <>
      <h1>Что такое AI и отнимет ли он у нас работу?</h1>
      <div className="emoji">🤖</div>
      <p>Современный взгляд на искусственный интеллект в 2025 году</p>
      <p>Презентация для коллег</p>
    </>
  );
};

export default Slide1;