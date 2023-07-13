import React from 'react';

function Keyboard({ onKeyPress }) {
  const keyboardKeys = [
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
    'Z', 'X', 'C', 'V', 'B', 'N', 'M'
  ];

  const handleKeyPress = (key) => {
    onKeyPress(key);
  };

  return (
    <div style={{ display: 'flex' }}>
      {keyboardKeys.map((key) => (
        <button
          key={key}
          onClick={() => handleKeyPress(key)}
          style={{
            flex: '1 0 auto',
            height: '10vw',
            fontSize: '3vw',
            fontWeight: 'bold',
            borderRadius: '1.5vw',
            border: 'none',
            background: '#f2f2f7',
            color: '#000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {key}
        </button>
      ))}
    </div>
  );
}

export default Keyboard;
