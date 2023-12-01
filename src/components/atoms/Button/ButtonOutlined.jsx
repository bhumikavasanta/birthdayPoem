import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  buttonStyle: {
    color: theme.palette.blueCobaltDark,
    // border: `1.5px solid ${theme.palette.blueCobaltDark}`,
    borderRadius: '0.25rem',
    textTransform: 'none',
    height: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    '&:hover': {
      // backgroundColor: theme.palette.blueLight2,
    },
    '&:active': {
      // backgroundColor: theme.palette.blueLight1,
    },
  },
  logoText: {
    display: 'flex',
  },
  logo: {
    marginRight: '0.5rem',
  },
}));
function ButtonOutlined(props) {
  const {
    text, onClick, icon, borderColor = '#AEB3BC', textColor = '#3C4C68', width = '100%',
  } = props;
  const classes = useStyles();

  return (
    <div>
      <button type="button" style={{ border: `1.5px solid ${borderColor}`, width }} className={`${classes.buttonStyle} ${'h3Medium'}`} onClick={onClick}>
        <span className={`${classes.logoText}`}>
          {icon && <img className={`${classes.logo}`} src={icon} alt="logo" /> }
          <span style={{ color: textColor }} className="h4Medium">{ text }</span>
        </span>
      </button>
    </div>
  );
}
export default ButtonOutlined;
