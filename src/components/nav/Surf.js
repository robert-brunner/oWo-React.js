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
      top: 460,
      left: 300,
      
    },
    input: {
      backgroundColor: 'transparent',
      borderColor: 'rgba(0, 0, 0, 0)',
      minWidth: 271,
      position: 'relative',
      right: -14,
      minHeight: 40,
      textAlign: 'center',
    },
    button: {
      backgroundColor: 'pink',
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
            button: baseGameStyles.button
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
    height: 1300,
    width: 1300,
    objectFit: 'contain',
    top: 0,
    left: -250,
  },
  Buoy: {
    position: 'absolute',
    height: 1300,
    width: 1300,
    objectFit: 'contain',
    top: 0,
    left: -250,
    zIndex: 0,
  },
  container: {
    position: 'absolute',
    height: '20%',
    width: '20%',
    borderRadius: 16,
    padding: 16,
    borderWidth: 8,
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
    height: 1300,
    width: '100vw',
    objectFit: 'cover',
    top: 0,
    left: 0,
  },
  SandButton: {
    position: 'absolute',
    height: 1300,
    width: 1300,
    objectFit: 'contain',
    top: 0,
    left: -250,
  },
};

export default Beach;
