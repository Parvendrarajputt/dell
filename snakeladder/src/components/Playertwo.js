import React from 'react';
import playertwoImage from '../assets/Playergreen.png'; 
import './player.css';

const Playerone = () => {
  return (
    <div className="player player-two">
      <img src={playertwoImage} alt="Player 1" />
    </div>
  );
};

export default Playerone;
