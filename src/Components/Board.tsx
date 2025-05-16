import { useState } from "react";
import type Game from "../gameclass";

type Props = {
  game: Game;
};

export default function Board({ game }: Props) {
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

  const [board, setBoard] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  // const [whichPlayerWon, setWhichPlayeWon] = useState<string>("Its a Draw");

  const [player, setPlayer] = useState<string>("X");

  return (
    <div className="flex items-center">
      <div className="grid grid-cols-[repeat(3,10vw)] grid-rows-[repeat(3,10vw)] w-full h-full">
        {board.map((value: string, index: number) => {
          game.checkWin(board);
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
                  game.addMove(board, index, player, setBoard);
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
