import React from 'react';
import '../App.css';
import ProgressBar from '../UI Images/progress bar4.png';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const Lyrics = () => {
  const navigate = useNavigate();
  
  const handleRecreate = () => {
    // if (petName !== "" && angry !== "" && funny !== "") {
    //   setFrame1(false);
    // }
  }
  const handleCreateSong = () => {
    navigate('./song');
  };
  return (
    <div className='register-page'>
      <Header />
      <div className='logo'>
        <img className='progress-bar-img' src={ProgressBar} alt="ProgressBar" />
        <div className='about-text'>Your song's lyrics are ready!</div>
        {/* <img className='capgift-img' src={Message} alt="Message Logo" /> */}
      </div>
      <div className='lyrics-div'>
        <div className='lyrics'>
          <div className='lyrics-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
        <div className='buttons'>
          <button className='answer-button' onClick={handleRecreate}>
            Recreate Lyrics
          </button>
          <button className='proceed-button' onClick={handleCreateSong}>
            Create Song
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lyrics;
