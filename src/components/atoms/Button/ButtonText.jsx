import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  buttonStyle: {
    color: theme.palette.grayDark3,
    textTransform: 'none',
    height: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  logoText: {
    display: 'flex',
  },
  logo: {
    marginRight: '0.5rem',
  },
}));
function ButtonText(props) {
  const { text, onClick, icon } = props;
  const classes = useStyles();

  return (
    <div>
      <button type="button" className={`${classes.buttonStyle} ${'h3Medium'}`} onClick={onClick}>
        <span className={`${classes.logoText}`}>
          {icon && <img className={`${classes.logo}`} src={icon} alt="logo" /> }
          { text }
        </span>
      </button>
    </div>
  );
}
export default ButtonText;
