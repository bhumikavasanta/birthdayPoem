import React, { useState, useRef, useEffect } from 'react';
import './Styles.css';
import { useNavigate } from 'react-router-dom';

function OTPModal({ isOpen, onClose }) {
  const [otp1, setOTP1] = useState();
  const [otp2, setOTP2] = useState();
  const [otp3, setOTP3] = useState();
  const [otp4, setOTP4] = useState();
  const inputRefs = [useRef(null), useRef(null), useRef(null),useRef(null)];
  const navigate = useNavigate();

  useEffect(() => {
    const handleInput = (index) => {
      return (event) => {
        const value = event.target.value;
        const isNumeric = /^[0-9]*$/.test(value); // Check if the entered value is numeric

        if (isNumeric && index < inputRefs.length - 1) {
          inputRefs[index + 1].current.focus();
        }
      };
    };

    inputRefs.forEach((inputRef, index) => {
      inputRef.current.addEventListener('input', handleInput(index));

      return () => {
        inputRef.current.removeEventListener('input', handleInput(index));
      };
    });
  });

  const handleInput1Change = (event) => {
    setOTP1(event.target.value);
  };
  const handleInput2Change = (event) => {
    setOTP2(event.target.value);
  };
  const handleInput3Change = (event) => {
    setOTP3(event.target.value);
  };
  const handleInput4Change = (event) => {
    setOTP4(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(otp1==="1"&&otp2==="2"&&otp3==="3"&&otp4==="4") {
        navigate('./about');
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2 className='otp-text'>Enter OTP</h2>
        <form onSubmit={handleSubmit} className='form'>
          <input
            className='form-input'
            ref={inputRefs[0]}
            type="text"
            value={otp1}
            onChange={handleInput1Change}
            required
          />
          <input
            className='form-input'
            ref={inputRefs[1]}
            type="text"
            value={otp2}
            onChange={handleInput2Change}
            required
          />
          <input
            className='form-input'
            ref={inputRefs[2]}
            type="text"
            value={otp3}
            onChange={handleInput3Change}
            required
          />
          <input
            className='form-input'
            type="text"
            ref={inputRefs[3]}
            value={otp4}
            onChange={handleInput4Change}
            required
          />
        </form>
        <div className='resend'>
            Resend OTP
        </div>
        <div className='form'>
        <button type="submit" className='submit-button' onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default OTPModal;
