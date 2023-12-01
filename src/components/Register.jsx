import React, { useState, useEffect } from 'react';
import '../App.css';
import ProgressBar from '../UI Images/progress bar.png';
import CelebrationsLogo from '../UI Images/Celebrations(Bg).png';
import Header from './Header';
import OTPModal from './OTPModal';
import { useData } from '../DataProvider';


const Register = () => {
const { setSharedData } = useData();
  
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [emailId, setEmailId] = useState("");
  const [acceptTerms, setAcceptTerm] = useState(false);
  const [receiveAlerts, setReceiveAlerts] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/;
  const regex = /^[a-zA-Z\s-]+$/;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('name', name);
  }, [name]); 

  const handleName = (event) => {
    const newName = event.target.value;
    setSharedData({ example: newName });
    setName(newName);

    const isNameValid = regex.test(newName);
  };
  const handlePhoneNumber = (event) => {
    const newPhone = event.target.value;
    setPhoneNumber(newPhone);

    const isPhoneNumberValid = phoneRegex.test(newPhone);
  };
  const handleEmailId = (event) => {
    const newEmail = event.target.value;
    setEmailId(newEmail);

    const isEmailIdValid = emailRegex.test(newEmail);
  };
  const handleChangeAcceptTerms = () => {
    setAcceptTerm(true);
  }
  const handleChangeReceiveAlerts = () => {
    setReceiveAlerts(true);
  }
  const handleSubmit = () => {
    if (emailRegex.test(emailId) && phoneRegex.test(phoneNumber) && emailRegex.test(emailId) && acceptTerms) {
      setIsOpen(true);
    }
  };
  return (
    <div className='register-page'>
      <Header />
      <div className='logo'>
      <img className='progress-bar-img' src={ProgressBar} alt="ProgressBar" />
      <img className='logo-img' src={CelebrationsLogo} alt="Celebrations Logo" />
      </div>
      <div className='register-div'>
        <div>
        Register to create
        </div>
        <div>
        <input
        type="text"
        placeholder="Full Name"
        onChange={handleName}
        value={name}
        className='input-value'
      />
        <input
        type="text"
        placeholder="Phone Number"
        onChange={handlePhoneNumber}
        value={phoneNumber}
        className='input-value'
      />
        <input
        type="text"
        placeholder="Email ID"
        onChange={handleEmailId}
        value={emailId}
        className='input-value'
      />
        </div>
        <div className='radio-div'>
        <input
          className='radio-button'
          type="radio"
          checked={acceptTerms}
          onChange={handleChangeAcceptTerms}
        />
        <div className='radio-text'>
        I accept Terms and Conditions and Privacy Policy of Mondelez (Cadbury)
        </div>
        </div>
        <div className='radio-div'>
        <input
          className='radio-button'
          type="radio"
          checked={receiveAlerts}
          onChange={handleChangeReceiveAlerts}
        />
        <div className='radio-text2'>
        I would like to receive promotional communication from Mondelez (Cadbury) about its products and promotional offers. 
        </div>
        </div>
        <div>
          <button className='submit-button' onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
      {
        isOpen && <OTPModal
        isOpen={isOpen}
        />
      }
        </div>
  );
};

export default Register;
