import React, { useState, useEffect } from 'react';
import Keyboard from './KeyBoard';

function BaseGame({ styles, messageStyle, hintStyle }) {
  const WORDS = {
    "BERRY": ["Fruit", "Drupe", "Pome", "Hip", "Achenes"],
    "TEMPLE": ["Sanctuary", "Shrine", "Tabernacle", "Cathedral", "Church"],
    "YARD": ["Lawn", "Garden", "Courtyard", "Grounds", "Grassland"],
    "BEACH": ["Shore", "Coast", "Seashore", "Seaboard", "Sands"],
    "WASHINGTON": ["Capitol", "Congress", "Government", "Legislature", "Authority"],
    "TABLE": ["Desk", "Bench", "Counter", "Stand", "Worktop"],
    "UNICORN": ["Myth", "Phantasy", "Chimera", "Legend", "Fable"]
  };

  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [gameWord, setGameWord] = useState('');
  const [tries, setTries] = useState(5);
  const [hint, setHint] = useState('');

  // Select a word at random when the component is mounted
  useEffect(() => {
    const wordsArray = Object.keys(WORDS);
    const randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    setGameWord(randomWord);
  }, []);

  const checkPassword = () => {
    if (password.toUpperCase() === gameWord.toUpperCase()) {
      displayMessage('Correct password! You win!');
    } else {
      setTries(tries - 1);
      if (tries <= 1) {
        displayMessage('Game Over.');
        setHint('');
      } else {
        displayMessage('Wrong password. Try again.');
        const hints = WORDS[gameWord];
        setHint(hints[5 - tries]);
      }
    }
  };

  const displayMessage = (msg) => {
    setMessage(msg);
  };

  const playAgain = () => {
    const wordsArray = Object.keys(WORDS);
    const randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    setGameWord(randomWord);
    setPassword('');
    setMessage('');
    setTries(5);
    setHint('');
  };
  const handleVirtualKeyPress = (key) => {
    setPassword(password + key);
  };

  return (
    <div>

      <div>
      <span className="beachBoard" alt="NOTICE" style={{ height: '40px', margin: '0', ...messageStyle }}>{message}</span>
      </div>
      <div>
        <p alt="SUGGESTION" style={{ ...styles.hint, ...hintStyle }}>{hint}</p>
      </div>
      <div>
        <div>
          <input
            alt="alpha"
            type="text"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            style={styles.input}
          />
          <button onClick={checkPassword} style={styles.button}>
            Start
          </button>
        </div>
        <button onClick={playAgain} style={styles.button}>
          Play Again
        </button>
      </div>
      <div className='onscreenKeyboard' style={{ width: '100%' }}>
        <Keyboard onKeyPress={handleVirtualKeyPress} />
      </div>
    </div>
  );
}

export default BaseGame;
