// src/App.tsx
import React from 'react';
import InputForm from './components/InputForm';
import GameBoard from './components/GameBoard';
import './App.css'

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-10">
      <h1 className="text-4xl font-bold mb-6 text-center capitalize">dynamic number matching game</h1>
      <InputForm />
      <GameBoard />
    </div>
  );
};

export default App;
