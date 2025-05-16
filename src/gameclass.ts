import type { SetStateAction } from "react";
import type React from "react";

export default class Game {
    public isGameOver: boolean = false;
    public winningPlayer: string = "This is a Draw";
    public board: string[];
    setBoard: React.Dispatch<SetStateAction<string[]>>;

    constructor(board: string[],
      setBoard: React.Dispatch<SetStateAction<string[]>>) {
        this.board = board;
        this.setBoard = setBoard
    }

    addMove( i: number, player: string) {
      const newBoard: string[] = [...this.board];
      if (!newBoard[i] && !this.isGameOver) {
        newBoard[i] = player;
        this.setBoard(newBoard);
      } else console.log("cell");
    }

    checkWin() {
      const winCombo: number[][] = [
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
      winCombo.forEach(([a, b, c]) => {
        if (this.board[a] !== "" && this.board[a] === this.board[b] && this.board[b] === this.board[c]) {
          this.isGameOver = true;
          this.winningPlayer = 'The Winner is ' + this.board[a];
        //   console.log(this.winningPlayer);
        } else if (this.board.every(cell => cell !== '')) {
            this.isGameOver = true;
        }
      });

    }

    resetBoard(){
        const newBoard: string[] = this.board.map(() => '')
        this.setBoard(newBoard)
    }
  }