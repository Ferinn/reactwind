"use client";
import React, { useState } from "react";

export default function Home() {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [message, setMessage] = useState("First to reach 5 points wins!");
  
  const isGameOver = playerScore >= 5 || computerScore >= 5;

  const play = (playerChoice: string) =>
  {
    if (isGameOver) {return;}

    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    if (playerChoice === computerChoice)
    {
      setMessage(`It's a tie! Both chose ${playerChoice}.`);
    }
    else if ((playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper"))
    {
      const newScore = playerScore + 1;
      setPlayerScore(newScore);
      if (newScore === 5) setMessage("You won the game!");
      else setMessage(`You win! ${playerChoice} beats ${computerChoice}.`);
    }
    else 
    {
      const newScore = computerScore + 1;
      setComputerScore(newScore);
      if (newScore === 5) setMessage(`Game Over! Computer won with ${computerChoice}.`);
      else setMessage(`Computer wins! ${computerChoice} beats ${playerChoice}.`);
    }
  };

  const resetGame = () =>
  {
    setPlayerScore(0);
    setComputerScore(0);
    setMessage("First to reach 5 points wins!");
  };

  return (
    <div className="bg-sky-500 min-h-screen flex flex-col items-center py-10">
      <MainHeader message={message} pScore={playerScore} cScore={computerScore} />

      <GameArea onPlay={play} isGameOver={isGameOver} onReset={resetGame} />
    </div>
  );
}



function MainHeader({ message, pScore, cScore }: { message: string, pScore: number, cScore: number }) {
  return (
    <div className="flex flex-col items-center gap-4 mb-10 text-white">
      <h1 className="text-6xl text-center bg-sky-900 p-4 rounded-xl shadow-lg font-bold">
        Rock Paper Scissors
      </h1>
      
      <div className="flex gap-10 text-2xl font-mono bg-sky-800 px-6 py-2 rounded-full border-2 border-sky-300">
        <div>Player: {pScore}</div>
        <div>CPU: {cScore}</div>
      </div>

      <div className="text-xl font-bold bg-sky-900 p-3 rounded-lg min-w-[300px] text-center italic">
        {message}
      </div>
    </div>
  );
}

function GameArea({ onPlay, isGameOver, onReset }: { onPlay: (choice: string) => void, isGameOver: boolean, onReset: () => void }) {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-row items-stretch gap-10">

        <div className="flex flex-col border-2 border-sky-900 rounded-xl bg-sky-100 w-[400px] h-[500px] overflow-hidden shadow-2xl">
          <div className="text-3xl text-black text-center font-bold p-4 bg-sky-200 border-b-2 border-sky-900">
            Legend
          </div>
          <div className="flex-1 p-4 flex items-center justify-center">
            <img className="max-h-full max-w-full object-contain" src="/images/rps-diagram.png" alt="Legend" />
          </div>
        </div>

        <RPSButtons onPlay={onPlay} />
      </div>
    </div>
  );
}

function RPSButtons({ onPlay}: { onPlay: (choice: string) => void })
{
  const btnStyle = "flex-1 bg-sky-900 text-white text-2xl font-bold rounded-xl transition-all" +
                    "hover:bg-sky-800 active:bg-sky-950 active:scale-95";
  
  return (
    <div className="flex flex-col items-stretch gap-4 w-[200px]">
      <button onClick={() => onPlay("rock")} className={btnStyle}>Rock</button>
      <button onClick={() => onPlay("paper")} className={btnStyle}>Paper</button>
      <button onClick={() => onPlay("scissors")} className={btnStyle}>Scissors</button>
    </div>
  );
}