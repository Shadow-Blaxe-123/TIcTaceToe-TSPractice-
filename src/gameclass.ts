import type { SetStateAction } from "react";
import type React from "react";

export default class Game {
    public isGameOver: boolean = false;
    // public whichPlayerWon: string;
    // private setWhichPlayerWon: React.Dispatch<SetStateAction<string>>;
    // public board: string[];
    // private setBoard: React.Dispatch<SetStateAction<string[]>>

    // constructor(board:string[], setboard:React.Dispatch<SetStateAction<string[]>>, whichPlayerWon:string, setWhichPlayerWon:React.Dispatch<SetStateAction<string>>) {
    //     this.board = board;
    //     this.setBoard = setboard;
    //     this.whichPlayerWon = whichPlayerWon;
    //     this.setWhichPlayerWon = setWhichPlayerWon;
    // }

    addMove(board: string[], i: number, player: string, setboard:React.Dispatch<SetStateAction<string[]>>) {
      const newBoard: string[] = [...board];
      if (!newBoard[i] && !this.isGameOver) {
        newBoard[i] = player;
        // this.setBoard(newBoard);
        setboard(newBoard);
      } else console.log("cell");
    }

    checkWin(board: string[]) {
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
        // if (this.board[a] !== "" && this.board[a] === this.board[b] && this.board[b] === this.board[c]) {
        if (board[a] !== "" && board[a] === board[b] && board[b] === board[c]) {
          this.isGameOver = true;
        //   this.setWhichPlayerWon('Winner is Player' + this.board[a]);
        //   alert(this.whichPlayerWon)
        // this.whichPlayerWon = 'Winner is' + this.board[a]
        // alert(this.whichPlayerWon)
        } else if (board.every(cell => cell !== '')) {
            this.isGameOver = true;
            // alert(this.whichPlayerWon)
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