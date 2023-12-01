import React, { useEffect } from 'react';
import BackgroundImage from '../UI Images/Celebrations(Bg) - hashtag.png';
import './Styles.css';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/register');
    }, 2000);
  }, []); 
  return (
    <div>
      <div className='container-center'>
        <img className="background-image-hashtag" src={BackgroundImage} alt="Background Image"></img>
        <div className='dairy-milk'>A unique birthday song for everyone.</div>
        <div className='dairy-milk-hindi'>इस birthday, कुछ मीठा हो जाए कुछ मीठा हो जाए.</div>
      </div>
    </div>

  );
};

export default LandingPage;