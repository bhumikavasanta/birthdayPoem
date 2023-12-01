import React, { useState } from 'react';
import Header from './Header';
import ProgressBar from '../UI Images/progress bar2.png';
import HeadPhone from '../UI Images/Headphone.png';
import'./Styles.css';
import Happy from '../UI Images/Icons/Happy.png';
import Romantic from '../UI Images/Icons/Romantic.png';
import Funny from '../UI Images/Icons/Funny.png';
import Motivational from '../UI Images/Icons/Motivational.png';
import Calm from '../UI Images/Icons/Calm.png';
import Rap from '../UI Images/Icons/Rap.png';
import Rock from '../UI Images/Icons/Rock.png';
import Pop from '../UI Images/Icons/Pop.png';
import Desi from '../UI Images/Icons/Desi.png';
import EDM from '../UI Images/Icons/EDM.png';
import Male from '../UI Images/Icons/Male.png';
import Female from '../UI Images/Icons/Female.png';
import { useNavigate } from 'react-router-dom';

const Vibe = () => {

  const [mood, setMood] = useState("");
  const [genre, setGenre] = useState("");
  const [voice, setVoice] = useState("");
  const [frame1, setFrame1] = useState(true);
  const navigate = useNavigate();

  const handleProceed = () => {
    if(mood!=="" && genre!=="") {
      setFrame1(false);
    }
    if(mood!=="" && genre!=="" && voice!=="") {
      navigate('./questions');
    }
  };
  return (
    <div className='register-page'>
      <Header />
      <div className='logo'>
      <img className='progress-bar-img' src={ProgressBar} alt="ProgressBar" />
      <div className='vibe-text'>What would you like heir song's vibe to be?</div>
      <img className='headphone-img' src={HeadPhone} alt="Celebrations Logo" />
      </div>
      <div className='vibe-div'>
        {
          frame1 && (<>
          <div className='mood'>
          Mood
        </div>
        <div className='mood-icons'>
          <div className='margin-div'>
          <div className={mood === "happy" ? 'mood-container-click' : 'mood-container'}>
            <img className='mood-icon' src={Happy} alt="Happy" onClick={()=>setMood("happy")}/>
          </div>
          <div className='icon-text'>
            Happy
          </div>
          </div>
          <div className='margin-div'>
          <div className={mood === "romantic" ? 'mood-container-click' : 'mood-container'}>
            <img className='mood-icon' src={Romantic} alt="Romantic" onClick={()=>setMood("romantic")}/>
          </div>
          <div className='icon-text'>
            Romantic
          </div>
          </div>
          <div className='margin-div'>
          <div className={mood === "funny" ? 'mood-container-click' : 'mood-container'}>
            <img className='mood-icon' src={Funny} alt="Funny" onClick={()=>setMood("funny")}/>
          </div>
          <div className='icon-text'>
            Funny
          </div>
          </div>
          <div className='margin-div'>
          <div className={mood === "motivational" ? 'mood-container-click' : 'mood-container'}>
            <img className='mood-icon' src={Motivational} alt="Motivational" onClick={()=>setMood("motivational")}/>
          </div>
          <div className='icon-text'>
            Motivational
          </div>
          </div>
          <div className='margin-div'>
          <div className={mood === "calm" ? 'mood-container-click' : 'mood-container'}>
            <img className='mood-icon' src={Calm} alt="Calm" onClick={()=>setMood("calm")}/>
          </div>
          <div className='icon-text'>
            Calm
          </div>
          </div>
        </div>
          </>)
        }
        <div className='mood'>
          Genre
        </div>
        <div className='mood-icons'>
          <div className='margin-div'>
          <div className={genre === "rap" ? 'mood-container-click' : 'mood-container'}>
            <img className='mood-icon' src={Rap} alt="Rap" onClick={()=>setGenre("rap")}/>
          </div>
          <div className='icon-text'>
            Rap
          </div>
          </div>
          <div className='margin-div'>
          <div className={genre === "rock" ? 'mood-container-click' : 'mood-container'}>
            <img className='mood-icon' src={Rock} alt="Rock" onClick={()=>setGenre("rock")}/>
          </div>
          <div className='icon-text'>
            Rock
          </div>
          </div>
          <div className='margin-div'>
          <div className={genre === "pop" ? 'mood-container-click' : 'mood-container'}>
            <img className='mood-icon' src={Pop} alt="Pop" onClick={()=>setGenre("pop")}/>
          </div>
          <div className='icon-text'>
            Pop
          </div>
          </div>
          <div className='margin-div'>
          <div className={genre === "desi" ? 'mood-container-click' : 'mood-container'}>
            <img className='mood-icon' src={Desi} alt="Desi" onClick={()=>setGenre("desi")}/>
          </div>
          <div className='icon-text'>
            Desi
          </div>
          </div>
          <div className='margin-div'>
          <div className={genre === "edm" ? 'mood-container-click' : 'mood-container'}>
            <img className='mood-icon' src={EDM} alt="EDM" onClick={()=>setGenre("edm")}/>
          </div>
          <div className='icon-text'>
            EDM
          </div>
          </div>
        </div>
        {
          !frame1 && (<>
<div className='mood'>
          Singer's Voice
        </div>
        <div className='mood-icons'>
          <div className='margin-div'>
          <div className={voice === "male" ? 'voice-container-click' : 'voice-container'}>
            <img className='voice-icon' src={Male} alt="Male" onClick={()=>setVoice("male")}/>
          </div>
          <div className='icon-text'>
            Male
          </div>
          </div>
          <div className='margin-div'>
          <div className={voice === "female" ? 'voice-container-click' : 'voice-container'}>
            <img className='voice-icon' src={Female} alt="Female" onClick={()=>setVoice("female")}/>
          </div>
          <div className='icon-text'>
            Female
          </div>
          </div>
          </div>
          </>)
        }
        
        <div>
          <button className='proceed-button' onClick={handleProceed}>
            Proceed
          </button>
        </div>
      </div>
        </div>
  );
};

export default Vibe;