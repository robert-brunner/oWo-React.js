import React, { useEffect } from 'react';
import sunShineBack from '../../assets/SunnyBeach/sunShineBack.png';
import BaseGame from '../machinery/BaseGame';
import SurfBoard from '../../assets/SunnyBeach/SurfBoard.png';
import Buoy from '../../assets/SunnyBeach/Buoy.png';
import BeachForeGround from '../../assets/SunnyBeach/BeachForeGround.png';
import SandButton from '../../assets/SunnyBeach/SandButton.png';
import '../../App.css';


function BeachMenu() {
  useEffect(() => {
    document.body.style.overflow = 'hidden'; // Hide scroll bar on body element
    return () => {
      document.body.style.overflow = ''; // Restore scroll bar on unmount
    };
  }, []);

    // Import the Google Fonts directly in Beach.js
  useEffect(() => {
    const link = document.createElement('link');
    link.href =
      '//fonts.googleapis.com/css2?family=Akaya+Telivigala:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);



  return (
    <div className="backgroundContainer" style={styles.backgroundContainer}>
      <img src={sunShineBack} alt="sunShineBack" style={styles.backgroundImage} />
      <img src={SurfBoard} alt="oWo" style={styles.SurfBoard} />
      <img src={Buoy} alt="oWo" style={styles.Buoy} />
      <div className="container" style={{ ...styles.container, ...baseGameStyles.container }}>
        <BaseGame
          styles={{
            input: baseGameStyles.input,
            // button: baseGameStyles.button,
            button: baseGameStyles.button,
            hint: baseGameStyles.hint, // hint style
            messageStyle: baseGameStyles.message, // message style
          }}
        />
      </div>
      <img src={BeachForeGround} alt="oWo" style={styles.ForeGround} />
      <img id='oNe' src={SandButton} alt="oWo" style={styles.SandButton} />
      {/* <img id='tWo' src={SandButton} alt="oWo" style={styles.tWo} /> */}
    </div>
  );
}



export default BeachMenu;



//STYLES


  const baseGameStyles = {
    container: {
      backgroundColor: '',
      top: '49%',
      left: '30%',
    },
    input: {  // Input field 
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
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      position: 'absolute',
      height: '33%',
      width: '190%',
      objectFit: 'contain',
      top: '32%',
      left: '-30%',
      fontFamily: 'Akaya Telivigala',
      fontSize: '20px',
      fontColor: 'white',
    },
    hint: {  //center of buoy
      color: 'black',
      top: '-39%',
      position: 'absolute',
      left: '62%',
      transform: 'translateX(-50%)',
    },
    message: {
      color: 'blue',
      position: 'absolute',
      top: '-39%',
    },
    p: {
      fontFamily: 'Akaya Telivigala',
      display: '',
      fontSize: '20px',
      lineHeight: '70%',
    },
  };

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

    // tWo: {
    //   position: 'absolute',
    //   height: '130%',
    //   width: '130%',
    //   objectFit: 'contain',
    //   top: '11%',
    //   left: '-15%',
    // },
  };
  