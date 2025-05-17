import { useEffect } from "react";
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

  const clickAudio = new Audio("ting.mp3");
  useEffect(() => {
    setTimeout(() => {
      game.makeBotMove();
    }, 500);
  }, [game, game.player]);

  return (
    <div className="flex items-center">
      <div className="grid grid-cols-[repeat(3,10vw)] grid-rows-[repeat(3,10vw)] w-full h-full">
        {game.board.map((value: string, index: number) => {
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
                  game.addMove(index);
                  clickAudio.play();
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
