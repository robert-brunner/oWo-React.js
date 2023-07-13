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

  return (
    <div id="game-keyboard">
      <div className="keyboard-row">
        <button className="keyboard-button" onClick={() => handleClick('q')}>
          q
        </button>
        <button className="keyboard-button" onClick={() => handleClick('w')}>
          w
        </button>
        <button className="keyboard-button" onClick={() => handleClick('e')}>
          e
        </button>
        <button className="keyboard-button" onClick={() => handleClick('r')}>
          r
        </button>
        <button className="keyboard-button" onClick={() => handleClick('t')}>
          t
        </button>
        <button className="keyboard-button" onClick={() => handleClick('y')}>
          y
        </button>
        <button className="keyboard-button" onClick={() => handleClick('u')}>
          u
        </button>
        <button className="keyboard-button" onClick={() => handleClick('i')}>
          i
        </button>
        <button className="keyboard-button" onClick={() => handleClick('o')}>
          o
        </button>
        <button className="keyboard-button" onClick={() => handleClick('p')}>
          p
        </button>
      </div>
      <div className="keyboard-row">
        <button className="keyboard-button" onClick={() => handleClick('a')}>
          a
        </button>
        <button className="keyboard-button" onClick={() => handleClick('s')}>
          s
        </button>
        <button className="keyboard-button" onClick={() => handleClick('d')}>
          d
        </button>
        <button className="keyboard-button" onClick={() => handleClick('f')}>
          f
        </button>
        <button className="keyboard-button" onClick={() => handleClick('g')}>
          g
        </button>
        <button className="keyboard-button" onClick={() => handleClick('h')}>
          h
        </button>
        <button className="keyboard-button" onClick={() => handleClick('j')}>
          j
        </button>
        <button className="keyboard-button" onClick={() => handleClick('k')}>
          k
        </button>
        <button className="keyboard-button" onClick={() => handleClick('l')}>
          l
        </button>
      </div>
      <div className="keyboard-row">
        <button className="keyboard-button" onClick={() => handleClick('Enter')}>
          Enter
        </button>
        <button className="keyboard-button" onClick={() => handleClick('z')}>
          z
        </button>
        <button className="keyboard-button" onClick={() => handleClick('x')}>
          x
        </button>
        <button className="keyboard-button" onClick={() => handleClick('c')}>
          c
        </button>
        <button className="keyboard-button" onClick={() => handleClick('v')}>
          v
        </button>
        <button className="keyboard-button" onClick={() => handleClick('b')}>
          b
        </button>
        <button className="keyboard-button" onClick={() => handleClick('n')}>
          n
        </button>
        <button className="keyboard-button" onClick={() => handleClick('m')}>
          m
        </button>
        <button className="keyboard-button" onClick={() => handleClick('Del')}>
          Del
        </button>
      </div>
    </div>
  );
};

export default Keyboard2;
