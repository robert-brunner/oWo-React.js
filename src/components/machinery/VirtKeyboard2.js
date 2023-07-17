import React, { useEffect } from 'react';

const Keyboard2 = ({ onKeyPress }) => {
  useEffect(() => {
    const handleKeyPress = (e) => {
      let pressedKey = String(e.key);

      if (pressedKey === 'Backspace') {
        onKeyPress('Del');
        return;
      }

      if (pressedKey === 'Enter') {
        onKeyPress('Enter');
        return;
      }

      let validKey = pressedKey.match(/[a-z]/gi);
      if (!validKey || validKey.length > 1) {
        return;
      } else {
        onKeyPress(pressedKey.toLowerCase());
      }
    };

    document.addEventListener('keyup', handleKeyPress);

    return () => {
      document.removeEventListener('keyup', handleKeyPress);
    };
  }, [onKeyPress]);

  const handleClick = (key) => {
    if (key === 'Del') {
      key = 'Backspace';
    }

    document.dispatchEvent(new KeyboardEvent('keyup', { key }));
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
  };
  

  const letters = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
  ];

  return (
    <div id="game-keyboard">
      {letters.map((row, index) => (
        <div className="keyboard-row" key={index}>
          {row.map((letter) => (
            <button
              className="keyboard-button"
              onClick={() => handleClick(letter)}
              onTouchStart={handleTouchStart}
              key={letter}
            >
              <span className="keyboard-button-text" style={{ userSelect: 'none' }}>
                {letter}
              </span>
            </button>
          ))}
        </div>
      ))}
      <div className="keyboard-row">
        <button className="keyboard-button" onClick={() => handleClick('Enter')} onTouchStart={handleTouchStart}>
          <span className="keyboard-button-text" style={{ userSelect: 'none' }}>
            Enter
          </span>
        </button>
        <button className="keyboard-button" onClick={() => handleClick('Del')} onTouchStart={handleTouchStart}>
          <span className="keyboard-button-text" style={{ userSelect: 'none' }}>
            Del
          </span>
        </button>
      </div>
    </div>
  );
};

export default Keyboard2;
