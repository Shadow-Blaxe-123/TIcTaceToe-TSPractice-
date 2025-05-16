import type { SetStateAction } from "react";
import type React from "react";

export default class Game {
    public isGameOver: boolean = false;

    public board: string[];
    private setBoard: React.Dispatch<SetStateAction<string[]>>

    constructor(board:string[], setboard:React.Dispatch<SetStateAction<string[]>>) {
        this.board = board;
        this.setBoard = setboard;
    }

    addMove(i: number, player: string) {
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
          console.log('Winner is Player' + this.board[a])
        } else if (this.board.every(cell => cell !== '')) {
            this.isGameOver = true;
            console.log('draw')
        }
      });

      // console.log(board);
      // console.log("winnner");
      // if (board[0] !== "" && board[0] === board[1] && board[0] === board[2]) {
      //   this.winner = true;
      // } else if (
      //   board[3] !== "" &&
      //   board[3] === board[4] &&
      //   board[4] === board[5]
      // ) {
      //   this.winner = true;
      // }
    }
  }