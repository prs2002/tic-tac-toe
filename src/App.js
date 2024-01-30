import React, { useState, useEffect } from 'react';
import Board from './Board';

function App() {
  const [playerSymbol, setPlayerSymbol] = useState('X');
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    console.log("Check winner");
  }, [playerSymbol]);

  const handleBoxClick = (boxIndex) => {
    console.log("Box clicked");
  };

  return (
    <div className="App">
      <h1>TicTacToe Game</h1>
      <Board onBoxClick={handleBoxClick} />
      {winner && <p>Winner: {winner}</p>}
    </div>
  );
}

export default App;
