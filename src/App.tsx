import "./App.css";
import Board from "./Components/Board";
import { useState } from "react";
import Game from "./gameclass";

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
  const [whichPlayerWon, setWhichPlayeWon] = useState<string>("Its a Draw");

  const game = new Game(board, setBoard, whichPlayerWon, setWhichPlayeWon);
  const [player, setPlayer] = useState<string>("X");
  if (game.isGameOver) {
    alert(game.whichPlayerWon);
  }
  return (
    <>
      <div className="w-full p-2 text-5xl font-extrabold bg-purple-950">
        <h1 className="m-2.5 text-amber-100">Tic Tac Toe</h1>
      </div>
      <div className="flex justify-center h-screen">
        {/* TODO: Board */}
        <div className="w-1/2 flex justify-center items-center">
          <Board
            board={board}
            player={player}
            setPlayer={setPlayer}
            game={game}
          />
        </div>
        {/* TODO: Welcome, Turn, Reset & Music btn, dancing gif, leaderboard */}
        <div className="bg-red-300 p-1 w-1/2 font-black text-6xl m-2">
          THE CONTROLS
        </div>
      </div>
    </>
  );
}

export default App;
