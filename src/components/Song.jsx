import React from 'react';
import '../App.css';
import Guitar from '../UI Images/Guitar 12th screen.png';
import Header from './Header';

const Song = () => {

  return (
    <div className='register-page'>
      <Header />
      <div className='logo'>
      <div className='loading-text'>Please Wait</div>
      <div className='loading-text2'>while we compose your song...</div>
      <img className='guitar-img' src={Guitar} alt="Message Logo" />
      </div>
        </div>
  );
};

export default Song;
