import React from 'react';
import { makeStyles } from '@mui/styles';

import { error } from '../../../assets/InputField';
import './InputText.css';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100% !important',
    boxShadow: '#fff !important',
    outline: 'none !important',
    borderRadius: '0.1875rem !important',
    display: 'flex',
    '&:focus-within': {
      outline: 'none !important',
      borderRadius: '0.1875rem',
    },
    '&:hover': {
      border: `1.5px solid ${theme.palette.grayDark3}`,
    },
    backgroundColor: 'none !important',
  },
  inputContainer: {
    width: '100% !important',
    border: `1.5px solid ${theme.palette.grayMid3}`,
    '&:focus-within': {
      border: `1.5px solid ${theme.palette.grayDark2}`,
    },
    '&:hover': {
      border: `1.5px solid ${theme.palette.grayDark3}`,
    },
  },
  inputErrorContainer: {
    width: '100% !important',
    border: `1.5px solid ${theme.palette.redDefault}`,
    '&:focus-within': {
      border: `1.5px solid ${theme.palette.redDefault}`,
    },
    '&:hover': {
      border: `1.5px solid ${theme.palette.redDefault}`,
    },
  },
  disabledField: {
    '&:hover': {
      border: `1.5px solid ${theme.palette.grayMid3}`,
    },
  },
  unitBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '1.5rem',
    padding: '0px !important',
    color: `${theme.palette.grayDark1}`,
    backgroundColor: `${theme.palette.grayLight1}`,
  },
  safeField: {
    // borderRight: `2px solid ${theme.palette.grayMid3}`,
  },
  inputBox: {
    width: '100%',
  },
  inputField: {
    color: theme.palette.grayDark1,
    paddingLeft: '0.2rem',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    height: '2rem',
    width: '100% !important',
    outline: 'none !important',
    backgroundColor: 'transparent !important',
  },
  inputBackground: {
    backgroundColor: 'transparent !important',
  },
  disabledInput: {
    cursor: 'not-allowed',
  },
  imageLogo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // position: 'relative',
    marginRight: '0.2rem',
  },
  suffixText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // position: 'relative',
    marginRight: '0.2rem',
    color: '#616E84',
  },
  errorMessage: {
    color: `${theme.palette.redDefault}`,
    lineHeight: '1.25rem',
  },
  // imageLogo: {
  //   position: 'absolute',
  //   right: '1rem',
  // },
}));
export default function UnitInputText(props) {
  const {
    placeholder,
    value,
    name,
    handleChange,
    errorText,
    onKeyDown,
    isError = false, isDisabled = false, isWritten = false, suffix = false, suffixText,
    hitlFlag = false,
  } = props;
  const classes = useStyles();
  return (
    <>
      <div
        className={`parent_cotnainer ${classes.container} ${isDisabled && classes.disabledField} ${isError ? classes.inputErrorContainer : classes.inputContainer} ${isWritten && classes.inputBackground}`}
        style={{ backgroundColor: hitlFlag ? '#FDF5E5' : '' }}
      >
        <div className={`child_container_unit_field h3Medium ${classes.unitBox} ${isError ? 'errorField' : classes.safeField} ${isDisabled && 'disabledField'}`}>
          <span>$</span>
        </div>
        <div className={classes.inputBox}>
          <span className="unitTextWrapper">
            <input
              className={`icon-input h3Medium ${classes.inputField} ${isDisabled && classes.disabledInput} ${isWritten && classes.inputBackground} `}
              style={{ backgroundColor: hitlFlag ? '#FDF5E5' : '' }}
              type="text"
              name={name}
              autoComplete="off"
              onChange={handleChange}
              onKeyDown={onKeyDown}
              placeholder={placeholder}
              value={value}
              disabled={isDisabled}
            />
            {suffix && <span className={`h3Regular ${classes.suffixText}`}>{suffixText}</span>}
            <span className={`${classes.imageLogo}`}>
              {isError && <img className="check-icon" src={error} alt="error" />}
            </span>
          </span>
        </div>
      </div>
      <span>
        {isError && <div className={`${classes.errorMessage} h3Regular`}>{errorText}</div>}
      </span>
    </>
  );
}
