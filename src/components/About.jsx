import React, { useState } from 'react';
import '../App.css';
import ProgressBar from '../UI Images/progress bar1.png';
import CapAndGift from '../UI Images/Cap_Gift.png';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  const name = localStorage.getItem('name');
  const [age, setAge] = useState("");
  const [selectedGender, setSelectedGender] = useState("male");
  const handleAge = (event) => {
    const newAge = event.target.value;
    setAge(newAge);
  };
  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };
  const handleProceed = () => {
    if(age!=="") {
      navigate('./vibe');
    }
    if(age==="") {
    alert("Enter age!");
    }
  };
  return (
    <div className='register-page'>
      <Header />
      <div className='logo'>
      <img className='progress-bar-img' src={ProgressBar} alt="ProgressBar" />
      <div className='about-text'>Tell us about your loved one...</div>
      <img className='capgift-img' src={CapAndGift} alt="Celebrations Logo" />
      </div>
      <div className='about-div'>
        <div className='about-questions'>
        Their Name
        </div>
        <div>
        <input
        value={name}
        className='input-value'
      />
      <div className='about-questions'>
        How old they'll be this birthday
      </div>
        <input
        type="number"
        placeholder="Age"
        onChange={handleAge}
        value={age}
        inputMode='numeric'
        className='input-value'
        min="0"
        max="100"
      />
      <div className='about-questions'>
        Gender
      </div>
      <select id="gender" value={selectedGender} onChange={handleGenderChange} className='gender-value'>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
        </div>
        <div>
          <button className='proceed-button' onClick={handleProceed}>
            Proceed
          </button>
        </div>
      </div>
        </div>
  );
};

export default About;
