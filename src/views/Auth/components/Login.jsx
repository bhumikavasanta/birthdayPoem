import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';
import { CircularProgress, Grid } from '@mui/material';
import { GoogleAuthProvider } from 'firebase/auth';
import { useUserAuth } from '../../../context/UserAuthContext';
import { useStyles } from '../Styles';
import OpenEye from '../../../assets/Login/OpenEye.svg';
import ClosedEye from '../../../assets/Login/ClosedEye.svg';
import bluestarLogo from '../../../assets/Login/bluestarLogo.svg';
import GoogleLogin from './GoogleLogin';
import useAxios from '../../../hooks/useAxios';
import { authService, services } from '../../../constants/urls';
import Alerts from '../../../components/atoms/Alerts/Alerts';
import InputText from '../../../components/atoms/InputText/InputText';
import ButtonFilled from '../../../components/atoms/Button/ButtonFilled';
import ButtonOutlined from '../../../components/atoms/Button/ButtonOutlined';
import DociphiLogo from '../../../assets/Login/DociphiLogo.svg';
import image from '../../../assets/Login/backImage.svg';
import {
  validateEmail,
  validateIsEmpty,
} from '../../../utils/helper';
import './login.css';

const initLoginDetails = {
  email: '',
  password: '',
};

const errorInitState = {
  email: {
    isError: false,
    errorMessage: '',
  },
  password: {
    isError: false,
    errorMessage: '',
  },
};

const validations = {
  email: ['isEmail', 'required'],
  password: ['required'],
};

const fieldToErrorMessageMapping = {
  email: 'Please enter your email in the format: xyz@example.com',
  password: 'Password is required',
};

function Login() {
  const [visible, setVisible] = useState(false);
  const classes = useStyles();
  const navigate = useNavigate();
  const { logInWithEmailAndPassword, logInWithProvider } = useUserAuth();
  const { post } = useAxios();

  // toggle eye icon for password
  const toggleButton = () => {
    setVisible((prevState) => !prevState);
  };

  const [loginDetail, setLoginDetail] = useState(initLoginDetails);
  const [errors, setErrors] = useState(errorInitState);
  const [isLoading, setIsLoading] = useState(false);

  const [alert, setAlert] = useState({
    open: false,
    msg: '',
    err: false,
  });

  const showAlert = (open, err, msg) => {
    setAlert({
      ...alert,
      open,
      err,
      msg,
    });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlert({
      ...alert,
      open: false,
    });
  };

  // validating the inputted form fields
  const validateValues = (name, value) => {
    const validationArray = validations[name];
    const canUpdate = true;
    const validationResults = [];
    validationArray?.forEach((validation) => {
      if (validation === 'required') {
        if (value < 0 || value === '') {
          validationResults.push(validateIsEmpty(value));
        } else {
          validationResults.push(false);
        }
      }
      if (validation === 'isEmail') {
        // to test email
        validationResults.push(validateEmail(value));
      }
    });
    for (let i = 0; i < validationResults.length; i += 1) {
      if (validationResults[i]) {
        setErrors({
          ...errors,
          [name]: { isError: true, errorMessage: fieldToErrorMessageMapping[name] },
        });
        break;
      }
    }
    if (validationResults.every((x) => x === false)) {
      setErrors({ ...errors, [name]: { isError: false, errorMessage: '' } });
    }
    return canUpdate;
  };

  const handleChange = (event) => {
    const canUpdateState = validateValues(event.target.name, event.target.value);
    if (canUpdateState) {
      setLoginDetail({ ...loginDetail, [event.target.name]: event.target.value });
    }
  };

  const handleSwapToken = (idToken) => {
    const options = {
      headers: {
        'Content-Type': 'text/plain',
        'X-Requested-With': 'XMLHttpRequest',
      },
      service: services.AUTH_SERVICE_URI,
      payload: idToken,
    };
    post(authService.SWAP_TOKEN, options).then((res) => {
      if (res?.status) {
        navigate('/main');
      }
    }).catch((error) => {
      if (error.toString().includes('401')) {
        showAlert(true, true, 'You are not authorized to log into the application');
      } else if (error.toString().includes('400')) {
        showAlert(true, true, 'No user is registered with this email id');
      } else {
        showAlert(true, true, 'Some unknown error occurred. Please try again.');
      }
    });
  };

  // Signin with email and password
  const signInWithPassword = async () => {
    const errorKeys = Object.keys(errors);
    let canContinue = true;

    // unit input is not mandatory
    if (Object.entries(loginDetail).some(([key, value]) => key !== 'unit' && value === '')) {
      canContinue = false;
      const updatedErrors = _.cloneDeep(errors);
      for (let i = 0; i < errorKeys.length; i += 1) {
        if (!errors[errorKeys[i]].isError) {
          if (loginDetail[errorKeys[i]] === '') {
            updatedErrors[errorKeys[i]].isError = true;
            updatedErrors[errorKeys[i]].errorMessage = fieldToErrorMessageMapping[errorKeys[i]];
          }
        }
      }

      // made a deep clone and updated it first so setState is called only once
      setErrors(updatedErrors);
    } else {
      for (let i = 0; i < errorKeys.length; i += 1) {
        if (errors[errorKeys[i]].isError) {
          canContinue = false;
          break;
        }
      }
    }
    if (canContinue) {
      // if (errors.email.isError && errors.password.isError) {
      // console.log('Ready to continue');
      try {
        setIsLoading(true);
        const result = await logInWithEmailAndPassword(loginDetail.email, loginDetail.password);
        const { user } = result;
        handleSwapToken(user.accessToken);
        setIsLoading(false);
      } catch (err) {
        const { code, message } = err;
        if (code.includes('wrong-password') || code.includes('too-many-requests')) {
          showAlert(true, true, 'Invalid credentials');
        } else if (code.includes('user-not-found')) {
          showAlert(true, true, 'User not found');
        } else {
          showAlert(true, true, message);
        }
        setIsLoading(false);
      }
    }
  };

  // Sign in with google btn
  const signInWithGoogle = async (e) => {
    e.preventDefault();

    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' });
      const result = await logInWithProvider(provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      // eslint-disable-next-line no-unused-vars
      const token = credential.accessToken;
      const { user } = result;
      user.getIdToken().then((idToken) => handleSwapToken(idToken));
    } catch (err) {
      // eslint-disable-next-line no-unused-vars
      // const { email, code, message } = err;
      if (err.toString().includes('401')) {
        showAlert(true, true, 'You are not authorized to log into the application');
      } else if (err.toString().includes('400')) { showAlert(true, true, 'No user is registered with this email id'); } else { showAlert(true, true, 'Some unknown error occurred. Please try again.'); }
    }
  };

  return (
    <div>
      <div className={classes.login}>
        <img src={DociphiLogo} alt="dociphi-logo" className={classes.dociphiLogo} />
      </div>
      <div>
        <Grid container>
          <Grid item className={classes.leftSection} xs={7}>
            <div className={classes.backgroundImg}>
              <img src={image} alt="background" style={{ height: '40rem' }} />
            </div>
          </Grid>
          <Grid item className={classes.rightSection} xs={4}>
            <div className={classes.loginForm}>
              <div className={classes.logo}>
                <img src={bluestarLogo} alt="logo" className={classes.logo} />
              </div>
              <div className={`${classes.welcomeText} h1Medium`}>
                Welcome to Dociphi
              </div>
              <div className={`${classes.loginText} h3Regular`}>
                <p>Login to continue the journey of mortgage loan with us</p>
              </div>
              <div className="h3Regular">
                <GoogleLogin text="Login with Google" handleClick={signInWithGoogle} />
              </div>
              <div className={`${classes.orText} h3Regular`}>
                <p>or</p>
              </div>
              <div>
                {/* Email Id */}
                <Grid container spacing={2}>
                  <Grid item>
                    <p className={`${classes.formLabelStyle} h3Regular`}>Email ID</p>
                    <div className={classes.inputContainer}>
                      <InputText
                        handleChange={handleChange}
                        placeholder="Email Id"
                        height="2.5rem"
                        name="email"
                        classStyle="h3Regular"
                        showErrorIcon={false}
                        isError={errors.email.isError}
                        errorText={errors.email.errorMessage}
                      />
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div style={{ marginTop: '1rem' }}>
                {/* Password */}
                <Grid container spacing={2}>
                  <Grid item>
                    <p className={`${classes.formLabelStyle} h3Regular`}>Password</p>
                    <div className={classes.inputContainer}>
                      <InputText
                        type={visible ? 'text' : 'password'}
                        placeholder="Password"
                        name="password"
                        handleChange={handleChange}
                        height="2.5rem"
                        classStyle="h3Regular"
                        placeIcon
                        icon={visible ? OpenEye : ClosedEye}
                        handleIconClick={toggleButton}
                        showErrorIcon={false}
                        isError={errors.password.isError}
                        errorText={errors.password.errorMessage}
                      />
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div className={classes.getStatedButton}>
                {
                  isLoading
                    ? (
                      <ButtonFilled
                        text={<CircularProgress size={25} sx={{ color: 'white', marginX: '0.25rem' }} />}
                        height="2.625rem"
                        width="9.75rem"
                      />
                    )
                    : <ButtonFilled text="Get Started!" height="2.625rem" width="9.75rem" onClick={signInWithPassword} />
                }
              </div>
            </div>
          </Grid>
          <Grid item xs={1} className={classes.signUpBottomContainer}>
            {/* Navigation to Signup */}
            <div className={classes.signUpButton}>
              <ButtonOutlined
                text="Sign up"
                onClick={() => navigate('/signup')}
              />
            </div>
          </Grid>
        </Grid>
      </div>
      {alert.open ? (
        <Alerts
          open={alert.open}
          msg={alert.msg}
          err={alert.err}
          handleClose={handleClose}
        />
      ) : (
        <>
        </>
      )}
    </div>
  );
}

export default Login;
