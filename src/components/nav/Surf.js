import React, { useEffect } from 'react';
import sunShineBack from '../../assets/SunnyBeach/sunShineBack.png';
import BaseGame from '../machinery/BaseGame';
import SurfBoard from '../../assets/SunnyBeach/SurfBoard.png';
import Buoy from '../../assets/SunnyBeach/Buoy.png';
import BeachForeGround from '../../assets/SunnyBeach/BeachForeGround.png';
import SandButton from '../../assets/SunnyBeach/SandButton.png';

function Beach() {
  useEffect(() => {
    document.body.style.overflow = 'hidden'; // Hide scroll bar on body element
    return () => {
      document.body.style.overflow = ''; // Restore scroll bar on unmount
    };
  }, []);

  const baseGameStyles = {
    container: {
      backgroundColor: '',
      top: '49%',
      left: '30%',
    },
    input: {
      backgroundColor: 'transparent',
      borderColor: 'rgba(0, 0, 0, 0)',
      minWidth: '27.1%',
      position: 'relative',
      right: '-1.4%',
      minHeight: '3.5%',
      textAlign: 'left',
      width: '160%',
    },
    button: {
      backgroundColor: 'pink',
    },
    hint: {
      color: 'red', // Apply red color to the hint element
      top: '-39%',
      position: 'absolute',
      left: '62%',
      transform: 'translateX(-50%)',
    },
    message: {
      color: 'purple', // Apply purple color to the message element
    },
  };
  

  return (
    <div className="backgroundContainer" style={styles.backgroundContainer}>
      <img src={sunShineBack} alt="sunShineBack" style={styles.backgroundImage} />
      <img src={SurfBoard} alt="oWo" style={styles.SurfBoard} />
      <img src={Buoy} alt="oWo" style={styles.Buoy} />
      <div className="container" style={{ ...styles.container, ...baseGameStyles.container }}>
        <BaseGame
          styles={{
            input: baseGameStyles.input,
            button: baseGameStyles.button,
            hint: baseGameStyles.hint, // Pass the hint style
            messageStyle: baseGameStyles.message, // Pass the message style
          }}
        />
      </div>
      <img src={BeachForeGround} alt="oWo" style={styles.ForeGround} />
      <img src={SandButton} alt="oWo" style={styles.SandButton} />
    </div>
  );
}

const styles = {
  backgroundContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex', // Add this line to enable flexbox
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  SurfBoard: {
    position: 'absolute',
    height: '130%',
    width: '130%',
    objectFit: 'contain',
    top: 0,
    left: '-15%',
  },
  Buoy: {
    position: 'absolute',
    height: '130%',
    width: '130%',
    objectFit: 'contain',
    top: 0,
    left: '-15%',
    zIndex: 0,
  },
  container: {
    position: 'absolute',
    height: '25%',
    width: '30%',
    borderRadius: '16%',
    padding: '1.6%',
    borderWidth: '0.8%',
    borderColor: 'rgba(0,0,0,0.2)',
    backgroundColor: '#e1e4e8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    zIndex: 1,
  },
  ForeGround: {
    position: 'absolute',
    height: '130%',
    width: '100vw',
    objectFit: 'cover',
    top: 0,
    left: 0,
  },
  SandButton: {
    position: 'absolute',
    height: '130%',
    width: '130%',
    objectFit: 'contain',
    top: 0,
    left: '-15%',
  },
};

export default Beach;
