import React, { useState } from 'react';
import './Dice.css';
import diceRollSound from "../assets/dice.mp3"

const Dice = ({ onRoll }) => {
  const [diceValue, setDiceValue] = useState(0);
  const [rolling, setRolling] = useState(false);

  
  const playSound = (sound) => {
    const audio = new Audio(sound);
    audio.play();
  };

  const rollDice = () => {
    playSound(diceRollSound);
    const newValue = Math.floor(Math.random() * 6) + 1;
    setRolling(true);
    setTimeout(() => {
      setDiceValue(newValue);
      setRolling(false);
      onRoll(newValue);
    }, 500); 
  };

  return (
    <div className="dice-container">
      <div className={`dice ${rolling ? 'rolling' : ''}`}>{diceValue}</div>
      <button className="button-78" onClick={rollDice}>Play</button>
    </div>
  );
};

export default Dice;
