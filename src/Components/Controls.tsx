import { useState } from "react";
import type Game from "../gameclass";

type Props = { game: Game };

export default function Controls({ game }: Props) {
  const [music] = useState(new Audio("music.mp3"));

  return (
    <div>
      <h1 className="text-5xl font-bold m-2">
        Tic Tac Toe Game for Typesript Practice
      </h1>
      <h2 className="m-2 text-4xl font-mono font-bold text-indigo-500">
        Player Turn: {game.player}
      </h2>
      {game.isGameOver && (
        <h2 className="m-2 text-4xl font-mono font-bold text-indigo-500">
          {game.winningPlayer}
        </h2>
      )}

      <div className="mt-40">
        <button
          className="cursor bg-red-500 text-white text-3xl font-extrabold px-5 py-2 m-4 border-4 border-indigo-700 hover:bg-lime-500"
          onClick={() => {
            game.resetBoard();
          }}
        >
          Reset
        </button>
        <button
          className="cursor bg-red-500 text-white text-3xl font-extrabold px-5 py-2 m-4 border-4 border-indigo-700 hover:bg-lime-500"
          onClick={() => {
            if (music.paused) {
              music.play();
            } else {
              music.pause();
            }
          }}
        >
          Music ON/OFF
        </button>
      </div>
    </div>
  );
}
