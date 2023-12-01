import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  buttonStyle: {
    color: theme.palette.grayDark2,
    border: `1.5px solid ${theme.palette.grayMid2}`,
    cursor: 'pointer',
    padding: '6px 12px 6px 12px',
    borderRadius: '0.25rem',
    textTransform: 'none',
    height: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.blueGrayLight,
    '&:hover': {
      backgroundColor: theme.palette.grayMid4,
    },
    '&:active': {
      backgroundColor: theme.palette.grayMid3,
    },
  },
  logoText: {
    display: 'flex',
  },
  logo: {
    marginRight: '0.5rem',
  },
}));
function GreyButton(props) {
  const { text, onClick, icon } = props;
  const classes = useStyles();

  return (
    <div>
      <button type="button" className={`${classes.buttonStyle} ${'h3Regular'}`} onClick={onClick}>
        <span className={`${classes.logoText}`}>
          {icon && <img className={`${classes.logo}`} src={icon} alt="logo" /> }
          { text }
        </span>
      </button>
    </div>
  );
}
export default GreyButton;
