import React, { useState } from 'react';
import '../App.css';
import ProgressBar from '../UI Images/progress bar3.png';
import Message from '../UI Images/Message.png';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const Questions = () => {
  const navigate = useNavigate();
  const [petName, setPetName] = useState("");
  const [angry, setAngry] = useState();
  const [funny, setFunny] = useState('');
  const [smile, setSmile] = useState('');
  const [movie, setMovie] = useState('');
  const [sport, setSport] = useState('');
  const [frame1, setFrame1] = useState(true);

  const handlePetName = (event) => {
    const newName = event.target.value;
    setPetName(newName);
  };
  const handleAngry = (event) => {
    const newAngry = event.target.value;
    setAngry(newAngry);
  };
  const handleFunny = (event) => {
    const newFunny = event.target.value;
    setFunny(newFunny);
  };
  const handleSmile = (event) => {
    const newSmile = event.target.value;
    setSmile(newSmile);
  };
  const handleMovie = (event) => {
    const newMovie = event.target.value;
    setMovie(newMovie);
  };
  const handleSport = (event) => {
    const newSport = event.target.value;
    setSport(newSport);
  };
  const handleAnswer = () => {
    if(petName!=="" && angry!=="" && funny!==""){
      setFrame1(false);
    }
  }
  const handleProceed = () => {
    if(petName!=="" && angry!=="" && funny!==""){
      navigate('./lyrics');
    }
  };
  return (
    <div className='register-page'>
      <Header />
      <div className='logo'>
      <img className='progress-bar-img' src={ProgressBar} alt="ProgressBar" />
      <div className='about-text'>Tell us a little more about them...</div>
      <img className='capgift-img' src={Message} alt="Message Logo" />
      </div>
          {
            frame1 ? (
<div className='about-div'>
        <div className='about-questions'>
        What's your pet name for them?
        </div>
        <div>
        <input
        type="text"
        placeholder="xxxxxxxxxxxxxx"
        onChange={handlePetName}
        value={petName}
        className='input-value'
      />
      <div className='about-questions'>
        What makes them angry?
      </div>
      <input
        type="text"
        placeholder="xxxxxxxxxxxxxxx"
        onChange={handleAngry}
        value={angry}
        className='input-value'
      />
      <div className='about-questions'>
        What is the funniest thing they do?
      </div>
      <input
        type="text"
        placeholder="xxxxxxxxxxxxxxx"
        onChange={handleFunny}
        value={funny}
        className='input-value'
      />
        </div>
        <div className='buttons'>
          <button className='answer-button' onClick={handleAnswer}>
            Answer More
          </button>
          <button className='proceed-button' onClick={handleProceed}>
            Proceed
          </button>
        </div>
      </div>
            ) : (
              <div className='about-div'>
        <div className='about-questions'>
        What makes them smile?
        </div>
        <div>
        <input
        type="text"
        placeholder="xxxxxxxxxxxxxx"
        onChange={handleSmile}
        value={smile}
        className='input-value'
      />
      <div className='about-questions'>
        What is their favourite movie?
      </div>
      <input
        type="text"
        placeholder="xxxxxxxxxxxxxxx"
        onChange={handleMovie}
        value={movie}
        className='input-value'
      />
      <div className='about-questions'>
        Their favourite sport?
      </div>
      <input
        type="text"
        placeholder="xxxxxxxxxxxxxxx"
        onChange={handleSport}
        value={sport}
        className='input-value'
      />
        </div>
        <div className='buttons'>
          <button className='answer-button'>
            Answer More
          </button>
          <button className='proceed-button' onClick={handleProceed}>
            Proceed
          </button>
        </div>
      </div>
            )
          }
      
        </div>
  );
};

export default Questions;
