import React from 'react';

function Keyboard({ onKeyPress }) {
  const keyboardKeys = [
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
    'Z', 'X', 'C', 'V', 'B', 'N', 'M',
    { specialKey: 'Backspace' },
    { specialKey: 'Enter' }
  ];

  const handleKeyPress = (key) => {
    if (key === 'Backspace') {
      onKeyPress(key);
    } else if (key === 'Enter') {
      onKeyPress('\n');
    } else {
      onKeyPress(key);
    }
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {keyboardKeys.map((key) => (
        <button
          key={key.specialKey || key}
          onClick={() => handleKeyPress(key.specialKey || key)}
          style={{
            flex: key.specialKey ? '0 0 20%' : '0 0 10%',
            height: key.specialKey ? '8vw' : '10vw',
            fontSize: key.specialKey ? '3vw' : '3.5vw',
            fontWeight: 'bold',
            borderRadius: key.specialKey ? '1.5vw' : '1.5vw',
            border: 'none',
            background: key.specialKey ? '#ff5c5c' : '#f2f2f7',
            color: key.specialKey ? '#fff' : '#000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0.5vw'
          }}
        >
          {key.specialKey || key}
        </button>
      ))}
    </div>
  );
}

export default Keyboard;
