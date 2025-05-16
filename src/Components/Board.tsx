import type { SetStateAction } from "react";
import type React from "react";
import type Game from "../gameclass";

export type GameProps = {
  board: string[];
  player: string;
  game: Game;
  setPlayer: React.Dispatch<SetStateAction<string>>;
};

export default function Board({ board, player, setPlayer, game }: GameProps) {
  const cellBorders: string[] = [
    "border-t-0 border-l-0",
    "border-t-0",
    "border-r-0 border-t-0",
    "border-l-0",
    "",
    "border-r-0",
    "border-b-0 border-l-0",
    "border-b-0",
    "border-r-0 border-b-0",
  ];

  return (
    <div className="flex items-center">
      <div className="grid grid-cols-[repeat(3,10vw)] grid-rows-[repeat(3,10vw)] w-full h-full">
        {board.map((value: string, index: number) => {
          game.checkWin();
          return (
            <span
              key={index}
              className={`${
                !game.isGameOver ? "hover:bg-gray-400" : ""
              } border-4 border-black border-solid text-8xl flex justify-center items-center font-bold ${
                cellBorders[index]
              }`}
              onClick={() => {
                if (game.isGameOver) {
                  return;
                } else {
                  game.addMove(index, player);
                  setPlayer(player === "X" ? "O" : "X");
                }
              }}
            >
              {value}
            </span>
          );
        })}
      </div>
    </div>
  );
}
