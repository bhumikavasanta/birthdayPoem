// Login component style
import { makeStyles } from '@mui/styles';
// import image from '../../assets/Login/backImage.svg';

export const useStyles = makeStyles((theme) => ({
  leftSection: {
    // height: '48rem',
    width: '55.68rem',
    // border: '2px solid red',
  },
  backgroundImg: {
    // height: '48.26rem',
    // width: '55.18rem',
  },
  login: {
    // backgroundImage: `url(${image})`,
    // height: '100vh',
    // width: '105vw',
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: '53%',
  },
  dociphiLogo: {
    position: 'absolute',
    top: '1.5rem',
    left: '1.5rem',
  },
  rightSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '2px solid black',
  },

  signUpBottomContainer: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
  },

  signUpButton: {
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // padding: '55.5px',
    height: '38rem',
  },

  loginForm: {
    height: '34.2375rem',
    width: '20.1875rem',
    // border: '2px solid salmon',
    // style update required
    // paddingLeft: '3.5%',
    // position: 'absolute',
    // right: '15vw',
    // width: '32vw',
    // height: '71.5vh',
    // backgroundColor: 'white',
    // border: `0px solid ${theme.palette.grayMid4}`,
    // paddingTop: '7%',
  },

  logo: {
    height: '5.8675rem',
    width: '10.44rem',
  },
  welcomeText: {
    color: theme.palette.blueCobaltDark,
  },
  loginText: {
    color: theme.palette.grayDark2,
  },

  createAccount: {
    color: theme.palette.blueCobaltDark,
  },

  linkLogin: {
    color: theme.palette.greenDefault,
  },

  googleLogin: {
    marginTop: '7%',
    border: `0px solid ${theme.palette.grayMid2}`,
    borderRadius: '0.25rem',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.11)',
    // width: '28.5vw',
    width: '19.6875rem',
    height: '2.875rem',
    // height: '7vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },

  orText: {
    width: '19.6875rem',
    height: '1.375rem',
    marginTop: '0.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  formLabelStyle: {
    color: theme.palette.grayDark1,
    // marginTop: '1rem',
    // paddingBottom: '0.25rem',
    lineHeight: '0.4rem',
  },
  inputContainer: {
    width: '19.6875rem',
  },
  getStatedButton: {
    marginTop: '2.2rem',
    width: '9.75rem',
  },

  pr10: {
    paddingRight: '0.90rem',
  },

  inputFieldEmail: {
    width: '28.5vw',
    height: '6.75vh',
    display: 'flex',
    alignItems: 'center',
    margin: '0.5rem 0',
    paddingLeft: '1.25rem',
    border: `1px solid ${theme.palette.grayMid3}`,
    borderRadius: '0.25rem',
    boxSizing: 'border-box',
    background: 'white',
    outline: 'none',
    marginBottom: '0.75rem',
    fontWeight: '400',
  },

  inputFieldPassword: {
    width: '28.5vw',
    height: '6.75vh',
    display: 'flex',
    alignItems: 'center',
    marginTop: '0.5rem',
    paddingLeft: '1.25rem',
    border: `1px solid ${theme.palette.grayMid3}`,
    borderRadius: '0.25rem',
    boxSizing: 'border-box',
    background: 'white',
    // marginBottom: '0.7rem',
    fontWeight: '400',
  },

  inputPassword: {
    border: 'none',
    outline: 'none',
    width: '26vw',
  },

  eyeIconOpen: {
    width: '1rem',
    float: 'right',
    paddingTop: '0.25rem',
    marginRight: '0.95rem',
    cursor: 'pointer',
    color: theme.palette.grayDark3,
  },
  eyeIconClosed: {
    width: '2.1rem',
    float: 'right',
    paddingTop: '0.25rem',
    marginRight: '0.40rem',
    filter: 'contrast(180%)',
    outline: 'black',
    cursor: 'pointer',
    color: theme.palette.grayMid3,
  },

  // signUpButton: {
  //   backgroundColor: theme.palette.blueCobaltDark,
  //   color: theme.palette.white,
  //   border: 'none',
  //   cursor: 'pointer',
  //   borderRadius: '0.25rem',
  //   marginTop: '1.5rem',
  //   width: '10.5vw',
  //   height: '7vh',
  // },

  loginButton: {
    backgroundColor: theme.palette.blueCobaltDark,
    color: theme.palette.white,
    border: 'none',
    cursor: 'pointer',
    borderRadius: '0.25rem',
    width: '7.5vw',
    height: '6.5vh',
    marginTop: '5vh',
    marginRight: '5vw',
    position: 'absolute',
    top: '0',
    right: '0',
  },
  message: {
    color: theme.palette.redDefault,
  },
}));
