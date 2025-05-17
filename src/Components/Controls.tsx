import type Game from "../gameclass";

type Props = { game: Game };

export default function Controls({ game }: Props) {
  return (
    <div
      onClick={() => {
        game.resetBoard();
      }}
    >
      Controls
    </div>
  );
}
