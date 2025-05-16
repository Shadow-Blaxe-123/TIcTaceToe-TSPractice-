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
    public winner: boolean = false;
    addMove(board: string[], i: number, player: string) {
      const newBoard: string[] = [...board];
      if (!newBoard[i]) {
        newBoard[i] = player;
        setBoard(newBoard);
      } else console.log("cell");
    }

    checkWin(board: string[]) {
      console.log(board);
      if (board[0] !== "" && board[0] === board[1] && board[0] === board[2]) {
        this.winner = true;
        console.log("winnner");
      }
    }
  }

  const game = new Game();
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
                game.addMove(board, index, player);
                setPlayer(player === "X" ? "O" : "X");
                game.checkWin(board);
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
