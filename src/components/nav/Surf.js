import React from 'react';
import sunShineBack from '../../assets/SunnyBeach/sunShineBack.png';
import oWo from '../../assets/oWo.gif';
import BaseGame from '../machinery/BaseGame';

function Beach() {
  return (
    <div className="backgroundContainer" style={styles.backgroundContainer}>
      <img src={sunShineBack} alt="sunShineBack" style={styles.backgroundImage} />
      <img src={oWo} alt="oWo" style={styles.oWoImage} />

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
  oWoImage: {
    position: 'absolute',
    height: 200,
    width: 200,
    objectFit: 'contain',
    top: 50,
  },
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
