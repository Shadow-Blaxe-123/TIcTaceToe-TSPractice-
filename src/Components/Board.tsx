import { useState } from "react";

export default function Board() {
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

  class Game {
    addMove(board: string[], i: number, player: string) {
      const newBoard: string[] = [...board];
      if (!newBoard[i]) {
        newBoard[i] = player;
        setBoard(newBoard);
      } else console.log("cell");
    }
  }

  const gamme = new Game();
  const [player, setPlayer] = useState<string>("X");

  return (
    <div
      className="flex items-center
    "
    >
      <div className="grid grid-cols-[repeat(3,10vw)] grid-rows-[repeat(3,10vw)] w-full h-full">
        {board.map((value: string, index: number) => {
          return (
            <span
              key={index}
              className={`hover:bg-gray-300 border-4 border-black border-solid text-8xl flex justify-center items-center font-bold ${cellBorders[index]}`}
              onClick={() => {
                gamme.addMove(board, index, player);
                setPlayer(player === "X" ? "O" : "X");
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
