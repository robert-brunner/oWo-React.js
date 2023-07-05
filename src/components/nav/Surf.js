import React, { useEffect } from 'react';
import sunShineBack from '../../assets/SunnyBeach/sunShineBack.png';
import oWo from '../../assets/oWo.gif';
import BaseGame from '../machinery/BaseGame';
import SurfBoard from '../../assets/SunnyBeach/SurfBoard.png';
import Buoy from '../../assets/SunnyBeach/Buoy.png'; 
import BeachForeGround from '../../assets/SunnyBeach/BeachForeGround.png'; 

function Beach() {
  useEffect(() => {
    document.body.style.overflow = 'hidden'; // Hide scroll bar on body element
    return () => {
      document.body.style.overflow = ''; // Restore scroll bar on unmount
    };
  }, []);

  return (
    <div className="backgroundContainer" style={styles.backgroundContainer}>
      <img src={sunShineBack} alt="sunShineBack" style={styles.backgroundImage} />
      <img src={SurfBoard} alt="oWo" style={styles.SurfBoard} />
      <img src={Buoy} alt="oWo" style={styles.Buoy} />
      <img src={BeachForeGround} alt="oWo" style={styles.ForeGround} />

      <div style={styles.container}>
        <BaseGame />
      </div>
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
  },
  ForeGround: {
    position: 'absolute',
    height: 1300,
    width: '100vw', // Adjusted to full viewport width
    objectFit: 'cover',
    top: 0,
    left: 0, // Adjusted to start from the left edge
  }
  ,
  container: {
    height: 200,
    width: 200,
    borderRadius: 16,
    padding: 16,
    borderWidth: 8,
    borderColor: 'rgba(0,0,0,0.2)',
    backgroundColor: '#e1e4e8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: -20,
  },
};

export default Beach;
