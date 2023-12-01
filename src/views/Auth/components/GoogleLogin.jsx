import React from 'react';
import { useStyles } from '../Styles';
import GoogleLogo from '../../../assets/Login/GoogleLogo.svg';

// Google Btn and click functionality
function GoogleLogin(props) {
  const classes = useStyles();
  const { text, handleClick } = props;

  return (
    <div aria-hidden="true" className={classes.googleLogin} onClick={handleClick}>
      <img src={GoogleLogo} alt="google" className={classes.pr10} />
      <span className="h3Regular">{text}</span>
    </div>
  );
}

export default GoogleLogin;
