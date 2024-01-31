import GameState from "./GameState";

function Reset({ gameState, onReset }) {
  if (gameState === GameState.inProgress) {
    return (
        <button onClick={onReset} className="reset-button">
          Refresh
        </button>
      )
  }
  return (
    <button onClick={onReset} className="reset-button">
      Play Again
    </button>
  );
}

export default Reset;