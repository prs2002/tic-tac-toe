import React from 'react';
import Box from './Box';

function Board({ onBoxClick }) {
  const renderBox = (index) => (
    <Box key={index} index={index} onClick={() => onBoxClick(index)} />
  );

  return (
    <div className="board">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(renderBox)}
    </div>
  );
}

export default Board;