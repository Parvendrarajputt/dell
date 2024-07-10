import React, { useState } from 'react';
import './App.css';
import Board from './components/Board';
import Dice from './components/Dice';

function App() {
  const [diceValue, setDiceValue] = useState(0);

  const handleRollDice = (newValue) => {
    setDiceValue(newValue);
  };

  return (
    <div className="App">
      <div className="board-container">
        <Board diceValue={diceValue} />
      </div>
      <Dice onRoll={handleRollDice} />
    </div>
  );
}

export default App;




