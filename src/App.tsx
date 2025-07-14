import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Presentation from './components/Presentation/Presentation';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Presentation />} />
        <Route path="/slide/:slideNumber" element={<Presentation />} />
      </Routes>
    </div>
  );
}

export default App;