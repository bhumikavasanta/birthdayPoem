// import firebase from 'firebase/app';
import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { useUserAuth } from '../../../context/UserAuthContext';
import ButtonFilled from '../../../components/atoms/Button/ButtonFilled';

const useStyles = makeStyles(() => ({
  typography: {
    fontWeight: 'normal',
    marginTop: '7vh',
  },
  linkButton: {
    color: '#27B585',
  },
}));

function ForgotPassword() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { forgotPassword } = useUserAuth();

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    if (email === '') {
      setErrorMessage('This field can not be empty.');
    } else {
      forgotPassword(email)
        .then(() => {
          // console.log(response);
        })
        .catch(() => {
          // console.log(err);
        });
    }
  };
  const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/g;

  const handleOnEmailChange = (e) => {
    setEmail(e.target.value);
    if (!regEx.test(e.target.value) && e.target.value !== '') {
      setErrorMessage('Enter valid Email');
    } else {
      setErrorMessage('');
      return true;
    }
    return true;
  };

  return (
    <div>
      <h1 style={{ marginBottom: '3vh' }}>Forgot password</h1>
      <h3 style={{ fontWeight: 'normal' }}>
        Enter the email address you use on Dexter. We&apos;ll send you a link to
        reset your password.
      </h3>
      <h3 className={classes.typography}>Email ID</h3>
      <div style={{ width: '29vw' }}>
        <input
          type="text"
          placeholder="Email Id"
          className={`${classes.inputFieldEmail} ${'h3Regular'}`}
          onChange={(e) => handleOnEmailChange(e)}
        />
        <p className={`${classes.message} ${'h3Regular'}`}>{errorMessage}</p>

      </div>
      <ButtonFilled text="Reset Password" onClick={handleForgotPassword} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '3vh',
        }}
      >
        <div
          className="h7"
          style={{
            color: '#252733',
          }}
        >
          Back to
          {' '}
          <a href="/login">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
