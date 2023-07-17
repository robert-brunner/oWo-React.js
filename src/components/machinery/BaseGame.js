import React, {useState, useEffect} from 'react';
import Keyboard2 from './VirtKeyboard2';
import '../../App.css';

function BaseGame({styles, messageStyle, hintStyle, sceneId}) {
    const WORDS = {
        "BERRY": [
            "Fruit",
            "Drupe",
            "Pome",
            "Hip",
            "Achenes"
        ],
        "TEMPLE": [
            "Sanctuary",
            "Shrine",
            "Tabernacle",
            "Cathedral",
            "Church"
        ],
        "YARD": [
            "Lawn",
            "Garden",
            "Courtyard",
            "Grounds",
            "Grassland"
        ],
        "BEACH": [
            "Shore",
            "Coast",
            "Seashore",
            "Seaboard",
            "Sands"
        ],
        "WASHINGTON": [
            "Capitol",
            "Congress",
            "Government",
            "Legislature",
            "Authority"
        ],
        "TABLE": [
            "Desk",
            "Bench",
            "Counter",
            "Stand",
            "Worktop"
        ],
        "UNICORN": [
            "Myth",
            "Phantasy",
            "Chimera",
            "Legend",
            "Fable"
        ]
    };

    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [gameWord, setGameWord] = useState('');
    const [tries, setTries] = useState(5);
    const [hint, setHint] = useState('');
    const [gameStarted, setGameStarted] = useState(false);
    const [correctWordEntered, setCorrectWordEntered] = useState(false);
    const [attempts, setAttempts] = useState([]);

    useEffect(() => {
        const wordsArray = Object.keys(WORDS);
        const randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
        setGameWord(randomWord);
        setHint(WORDS[randomWord][0]);

        const storedAttempts = JSON.parse(localStorage.getItem('Attempts')) || [];
        setAttempts(storedAttempts);
    }, []);

    const checkPassword = () => {
        if (password.toUpperCase() === gameWord.toUpperCase()) {
            displayMessage(`Correct! ${gameWord}`);
            setCorrectWordEntered(true);

            // Clear localStorage when correct word is guessed
            localStorage.removeItem('Attempts');
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

        const updatedAttempts = [
            ...attempts,
            password
        ];
        setAttempts(updatedAttempts);
        localStorage.setItem('Attempts', JSON.stringify(updatedAttempts));

        setPassword('');
    };

    const displayMessage = (msg) => {
        setMessage(msg);
    };

    const playAgain = () => {
        const wordsArray = Object.keys(WORDS);
        const randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
        setGameWord(randomWord);
        setHint(WORDS[randomWord][0]);
        setPassword('');
        setMessage('');
        setTries(5);
        setGameStarted(true);
        setCorrectWordEntered(false);

        // Clear localStorage when starting a new game
        localStorage.removeItem('Attempts');
    };

    const handleVirtualKeyPress = (key) => {
        if (key === 'Enter') {
            checkPassword();
        } else if (key === 'Del') {
            setPassword(password.slice(0, -1));
        } else {
            setPassword(password + key);
        }
    };

    return (
        <div id={sceneId}>
            <div>
                <span className="beachBoard" alt="NOTICE"
                    style={
                        {
                            height: '40px',
                            margin: '0',
                            ...messageStyle
                        }
                }>
                    {message} </span>
            </div>
            <div>
                <p alt="SUGGESTION"
                    style={
                        {
                            ...styles.hint,
                            ...hintStyle
                        }
                }>
                    {hint} </p>
            </div>
            <div> {
                !gameStarted && (
                    <button onClick={
                            () => setGameStarted(true)
                        }
                        style={
                            styles.button
                    }>
                        Play
                    </button>
                )
            }
                {
                gameStarted && (
                    <div>
                        <input alt="alpha" type="text"
                            onChange={
                                (event) => setPassword(event.target.value)
                            }
                            value={password}
                            style={
                                {
                                    ...styles.input,
                                    pointerEvents: 'none'
                                }
                            }/> {
                        correctWordEntered && (
                            <button onClick={playAgain}
                                style={
                                    styles.button
                            }>
                                Play Again
                            </button>
                        )
                    } </div>
                )
            } </div>
            {
            gameStarted && (
                <div className="onscreenKeyboard"
                    style={
                        {width: '100%'}
                }>
                    <Keyboard2 onKeyPress={handleVirtualKeyPress}/>
                </div>
            )
        }

            {/* Display attempts with scene-specific styling */}
            <div className="Beach">
                <h3>Previous Attempts:</h3>
                {
                attempts.map((attempt, index) => (
                    <p key={index}>
                        {attempt}</p>
                ))
            } </div>
        </div>
    );
}

export default BaseGame;

