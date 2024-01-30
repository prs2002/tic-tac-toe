import React from 'react';

function Box({ index, onClick }) {
  return (
    <div className="box" onClick={onClick}>
      {/*  Box content*/}
    </div>
  );
}

export default Box;
