import "./App.css";
import Board from "./Components/Board";
import { useState } from "react";
import Game from "./gameclass";
import Controls from "./Components/Controls";

function App() {
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

  const [player, setPlayer] = useState<string>("X");
  const game = new Game(board, player, setPlayer, setBoard);
  return (
    <>
      <div className="w-full p-2 text-5xl font-extrabold bg-purple-950">
        <h1 className="m-2.5 text-amber-100">Tic Tac Toe</h1>
      </div>
      <div className="flex justify-center h-screen">
        <div className="w-1/2 flex justify-center items-center">
          <Board game={game} />
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <Controls game={game} />
        </div>
      </div>
    </>
  );
}

export default App;
