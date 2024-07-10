import React, { useState, useEffect } from 'react';
import './Board.css';
import PlayerTwo from './Playertwo';
import PlayerOne from './Playerone';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import snakeBiteSound from "../assets/snake_bite.mp3";
import ladderClimb from "../assets/ladder.mp3";
import win from "../assets/win.mp3";

const snakePosition = [
  {
    currentPosition: 57,
    gotoPosition: 94,
  },
  {
    currentPosition: 2,
    gotoPosition: 91,
  },
  {
    currentPosition: 35,
    gotoPosition: 74,
  },
  {
    currentPosition: 32,
    gotoPosition: 77,
  },
  {
    currentPosition: 63,
    gotoPosition: 97,
  }

];

const ladderPosition = [
  {
    currentPosition: 83, //19 cell 
    gotoPosition: 65,
  },

  {
    currentPosition: 52, //49 cell
    gotoPosition: 21,

  },
  {
    currentPosition: 48, //78 cell
    gotoPosition: 16,
  },
  {
    currentPosition: 28, //72 cell
    gotoPosition: 9,
  },
  {
    currentPosition: 23,
    gotoPosition: 5,
  }



];
const Board = ({ diceValue }) => {
  const homePositionOne = 100;
  const homePositionTwo = 100;
  const [playerOnePosition, setPlayerOnePosition] = useState(homePositionOne);
  const [playerTwoPosition, setPlayerTwoPosition] = useState(homePositionTwo);
  const [currentPlayer, setCurrentPlayer] = useState("playerOne");

  const playSound = (sound) => {
    const audio = new Audio(sound);
    audio.play();
  };
  useEffect(() => {
    if (diceValue > 0) {
      // Player one
      if (currentPlayer === "playerOne") {
        if (playerOnePosition === homePositionOne && diceValue !== 6 && diceValue !== 1) {
          setCurrentPlayer("playerTwo");
          return;
        }

        setPlayerOnePosition(prevPosition => {
          let newPosition;
          if (prevPosition === homePositionOne) {
            newPosition = 99 - diceValue + 1;
            toast.info("Blue escaped")
            setCurrentPlayer("playerTwo");
          } else {
            newPosition = prevPosition - diceValue;
            setCurrentPlayer("playerTwo");
          }
          if (newPosition <= 0) {
            setCurrentPlayer("playerTwo");
            playSound(win);
            toast.success("Blue Won!");
            newPosition = homePositionOne;
            setTimeout(() => {
              window.location.reload();
            }, 4000);
          }

          //test snake
          const snake = snakePosition.find(snake => newPosition === snake.currentPosition);
          if (snake) {
            setCurrentPlayer("playerTwo");
            playSound(snakeBiteSound);
            toast.info("Snake bitten! ");
            setTimeout(() => {
              newPosition = snake.gotoPosition;
              setPlayerOnePosition(snake.gotoPosition);
            }, 2000);
          }


          //test ladder

          const ladder = ladderPosition.find(ladder => newPosition === ladder.currentPosition);
          if (ladder) {
            setCurrentPlayer("playerTwo");
            playSound(ladderClimb);
            toast.info("Found a ladder!");
            setTimeout(() => {
              newPosition = ladder.gotoPosition;
              setPlayerOnePosition(ladder.gotoPosition);
            }, 2000);
          }


          return newPosition;
        });

        setCurrentPlayer("playerTwo");
      } else {
            // Player two
        if (playerTwoPosition === homePositionTwo && diceValue !== 6 && diceValue !== 1) {
          setCurrentPlayer("playerOne");
          return;
        }

        setPlayerTwoPosition(prevPosition => {
          let newPosition;
          if (prevPosition === homePositionTwo) {
            newPosition = 99 - diceValue + 1;
            toast.info("Yellow escaped")
            setCurrentPlayer("playerOne");
            

          } else {
            setCurrentPlayer("playerOne");
            newPosition = prevPosition - diceValue;

          }
          if (newPosition <= 0) {
            setCurrentPlayer("playerOne");
            playSound(win);
            toast.success("Yellow Won!");
            newPosition = homePositionTwo;
            setTimeout(() => {
              window.location.reload();
            }, 4000);
          }


          //test snake
          const snake = snakePosition.find(snake => newPosition === snake.currentPosition);
          if (snake) {
            setCurrentPlayer("playerOne");
            playSound(snakeBiteSound);
            toast.info("Snake bitten! ");
            setTimeout(() => {
              newPosition = snake.gotoPosition;
              setPlayerTwoPosition(snake.gotoPosition);

            }, 2000);
          }

          // test ladder
          const ladder = ladderPosition.find(ladder => newPosition === ladder.currentPosition);
          if (ladder) {
            setCurrentPlayer("playerOne");
            playSound(ladderClimb);
            toast.info("Found a ladder!");
            setTimeout(() => {
              newPosition = ladder.gotoPosition;
              setPlayerTwoPosition(ladder.gotoPosition);

            }, 2000);
          }
          return newPosition;
        });

        setCurrentPlayer("playerOne");
      }
    }
  }, [diceValue]);




  const boardNumbers = Array.from({ length: 100 }, (_, index) => index + 1).reverse();
  const redCells = [44, 99, 66, 69, 38];
  const blueCells = [18, 49, 53, 78, 73];

  return (
    <div className="new-container">
      <div className="board-container">
        <div className="home-container">
          <div className="home-cell">
            Blue&nbsp;
            {playerOnePosition === homePositionOne && <PlayerOne />}
            {currentPlayer === "playerOne" && <div className="turn-indicator">Turn</div>}
          </div>
          <div className="home-cell">
            Yellow&nbsp;
            {playerTwoPosition === homePositionTwo && <PlayerTwo />}
            {currentPlayer === "playerTwo" && <div className="turn-indicator">Turn</div>}
          </div>
        </div>
        <div className="board">
          {boardNumbers.map((number, index) => (
            <div
              key={number}
              className={`board-cell ${redCells.includes(number) ? 'red-cell' : ''} ${blueCells.includes(number) ? 'blue-cell' : ''}`}
            >
              {index + 1 === playerOnePosition && playerOnePosition !== homePositionOne && <PlayerOne diceValue={diceValue} />}
              {index + 1 === playerTwoPosition && playerTwoPosition !== homePositionTwo && <PlayerTwo diceValue={diceValue} />}
              {number}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Board;

