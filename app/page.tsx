import React from "react";

export default function Home() {
  return (
    <div className="bg-sky-500 min-h-screen flex flex-col items-center py-10">
      <MainHeader />
      <GameArea />
    </div>
  );
}

function MainHeader() {
  return (
    <div className="flex flex-col items-center gap-4 mb-10">
      <div className="text-6xl text-center bg-sky-900 text-white p-4 rounded-xl shadow-lg">
        Rock Paper Scissors
      </div>
      <div className="text-base font-bold bg-sky-900 text-white p-2 rounded-lg">
        Compete with the computer! First to reach 5 points wins!
      </div>
    </div>
  );
}

function GameArea() {
  return (
    <div className="flex flex-row items-stretch gap-10">
      <div className="flex flex-col border-2 border-sky-900 rounded-xl bg-sky-100 w-[400px] h-[500px] overflow-hidden">
        <div className="text-3xl text-black text-center font-bold p-4 bg-sky-200 border-b-2 border-sky-900">
          Legend
        </div>
        <div className="flex-1 p-4 flex items-center justify-center">
          <img 
            className="max-h-full max-w-full object-contain"
            src="/images/rps-diagram.png" 
            alt="Legend"
          />
        </div>
      </div>

      <RPSButtons />
    </div>
  );
}

function RPSButtons() {
  const btnStyle = "flex-1 bg-sky-900 text-white text-2xl font-bold rounded-xl transition-all hover:bg-sky-800 active:bg-sky-950 active:scale-95";
  
  return (
    <div className="flex flex-col items-stretch gap-4 w-[200px]">
      <button className={btnStyle}>Rock</button>
      <button className={btnStyle}>Paper</button>
      <button className={btnStyle}>Scissors</button>
    </div>
  );
}