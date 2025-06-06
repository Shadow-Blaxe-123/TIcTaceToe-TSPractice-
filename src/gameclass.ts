import type { SetStateAction } from "react";
import type React from "react";

export default class Game {
  //properties
  public isGameOver: boolean = false;
  public winningPlayer: string = "This is a Draw";
  public board: string[];
  private setBoard: React.Dispatch<SetStateAction<string[]>>;
  public player: string;
  private setPlayer: React.Dispatch<SetStateAction<string>>;
  private winCombo: number[][] = [
    // Horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //Diagonal
    [0, 4, 8],
    [2, 4, 6],
  ];

  constructor(
    board: string[],
    player: string,
    setPlayer: React.Dispatch<SetStateAction<string>>,
    setBoard: React.Dispatch<SetStateAction<string[]>>
  ) {
    // super();
    this.board = board;
    this.setBoard = setBoard;
    this.player = player;
    this.setPlayer = setPlayer;
  }

  // Adds a move whether bot or player.
  addMove(i: number) {
    const newBoard: string[] = [...this.board];
    if (!newBoard[i] && !this.isGameOver) {
      newBoard[i] = this.player;
      this.setBoard(newBoard);
      this.setPlayer(this.player === "X" ? "O" : "X");
    } else console.log("cell");
  }

  // Constantly checking whether the Game should be over.

  // Searches for a winner
  getWinner(): string | null {
    for (const [a, b, c] of this.winCombo) {
      if (
        this.board[a] !== "" &&
        this.board[a] === this.board[b] &&
        this.board[b] === this.board[c]
      ) {
        return this.board[a]; // "X" or "O"
      }
    }

    return null;
  }
  checkWin() {
    const winner = this.getWinner();
    if (winner) {
      this.isGameOver = true;
      this.winningPlayer = "The Winner is " + winner;
    } else if (this.board.every((cell) => cell !== "")) {
      this.isGameOver = true;
    }
  }

  resetBoard() {
    this.setBoard(["", "", "", "", "", "", "", "", ""]);
    this.setPlayer("X");
  }

  // MinMax Bot that will always play the optimal move to Win/Draw.
  makeBotMove() {
    if (this.isGameOver || this.player !== "O") return;

    const bestMove = this.findBestMove();
    if (bestMove !== -1) {
      this.addMove(bestMove);
    }
  }
  findBestMove(): number {
    let bestScore = -Infinity;
    let move = -1;

    for (let i = 0; i < this.board.length; i++) {
      if (this.board[i] === "") {
        this.board[i] = "O"; // Bot is O
        const score = this.minimax(0, false);
        this.board[i] = "";

        if (score > bestScore) {
          bestScore = score;
          move = i;
        }
      }
    }

    return move;
  }
  minimax(depth: number, isMaximizing: boolean): number {
    const winner = this.getWinner();
    if (winner === "O") return 10 - depth;
    if (winner === "X") return depth - 10;
    if (this.board.every((cell) => cell !== "")) return 0;

    if (isMaximizing) {
      let maxEval = -Infinity;
      for (let i = 0; i < this.board.length; i++) {
        if (this.board[i] === "") {
          this.board[i] = "O";
          const evaluation = this.minimax(depth + 1, false);
          this.board[i] = "";
          maxEval = Math.max(maxEval, evaluation);
        }
      }
      return maxEval;
    } else {
      let minEval = Infinity;
      for (let i = 0; i < this.board.length; i++) {
        if (this.board[i] === "") {
          this.board[i] = "X";
          const evaluation = this.minimax(depth + 1, true);
          this.board[i] = "";
          minEval = Math.min(minEval, evaluation);
        }
      }
      return minEval;
    }
  }
}
