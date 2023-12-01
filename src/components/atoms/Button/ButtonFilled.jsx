import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  buttonStyle: {
    color: theme.palette.blueGrayLight,
    border: `1.5px solid ${theme.palette.blueCobaltDark}`,
    borderRadius: '0.25rem',
    textTransform: 'none',
    height: '2rem',
    padding: '0.5rem 1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    backgroundColor: theme.palette.blueCobaltDark,
    '&:hover': {
      backgroundColor: theme.palette.blueCobaltMid,
    },
    '&:active': {
      backgroundColor: theme.palette.blueCobaltDark,
    },
    '&:disabled': {
      backgroundColor: theme.palette.grayMid2,
      border: `1.5px solid ${theme.palette.grayMid2}`,
      cursor: 'not-allowed',
    },
  },
}));
function ButtonFilled(props) {
  const {
    text,
    onClick, disabled = false, height = '2rem', width = 'auto',
  } = props;
  const classes = useStyles();

  return (
    <div>
      <button
        type="button"
        style={{ height, width }}
        className={`${classes.buttonStyle} ${'h3Medium'}`}
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
    </div>
  );
}
export default ButtonFilled;
