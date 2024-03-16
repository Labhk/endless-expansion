import React from 'react';

function Square({ corners, letter }) {
  const x1 = corners[0][0];
  const y1 = corners[0][1];
  const x2 = corners[2][0];
  const y2 = corners[2][1];

  // Calculate the width and height of the square
  const width = x2 - x1;
  const height = y2 - y1;

  // Calculate the position of the square within the 143x191 rectangle
  const left = x1 * (143 / 47);
  const top = y1 * (191 / 47);

  return (
    <div
      style={{
        position: 'absolute',
        left: `${left* 0.2}px`,
        top: `${top* 0.2}px`,
        width: `${width * (143 / 47) * 0.2}px`, // Adjusted width
        height: `${height * (191 / 47) * 0.2}px`, // Adjusted height
        backgroundColor: 'gray',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span>{letter}</span>
    </div>
  );
}

function WordsInRectangle() {
  const squares = [
    { corners: [[97, 145], [143, 145], [143, 191], [97, 191]], letter: 'A' },
    { corners: [[97, 97], [143, 97], [143, 143], [97, 143]], letter: 'R' },
    { corners: [[49, 97], [95, 97], [95, 143], [49, 143]], letter: 'A' },
    { corners: [[1, 97], [47, 97], [47, 143], [1, 143]], letter: 'E' },
    { corners: [[97, 49], [143, 49], [143, 95], [97, 95]], letter: 'E' },
    { corners: [[1, 49], [47, 49], [47, 95], [1, 95]], letter: 'R' },
    { corners: [[1, 1], [47, 1], [47, 47], [1, 47]], letter: 'A' },
  ];

  return (
    <div
      style={{
        position: 'relative',
        width: '143px',
        height: '191px',
      }}
    >
      {squares.map((square, index) => (
        <Square key={index} corners={square.corners} letter={square.letter} />
      ))}
    </div>
  );
}

export default WordsInRectangle;
