import React from 'react';
import { makeStyles } from '@mui/styles';

import { error, correct } from '../../../assets/InputField';
import './InputText.css';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    paddingLeft: '0.2rem',
    boxShadow: '#fff !important',
    outline: 'none !important',
    borderRadius: '0.1875rem',
    '&:focus-within': {
      outline: 'none !important',
      borderRadius: '0.1875rem',
    },
    '&:hover': {
      border: `1.5px solid ${theme.palette.grayDark2}`,
    },
    backgroundColor: 'none !important',
  },
  inputContainer: {
    border: `1.5px solid ${theme.palette.grayMid3}`,
    '&:focus-within': {
      border: `1.5px solid ${theme.palette.grayDark3}`,
    },
    '&:hover': {
      border: `1.5px solid ${theme.palette.grayDark2}`,
    },
  },
  inputErrorContainer: {
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
  inputField: {
    color: theme.palette.grayDark1,
    border: 'none',
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
  errorMessage: {
    color: `${theme.palette.redDefault}`,
    lineHeight: '1.25rem',
  },
  inputError: {
    border: `1.5px solid ${theme.palette.redDefault}`,
  },
  imageLogo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '0.2rem',
  },
  calenderLogo: {
    position: 'absolute',
    right: '1rem',
  },
  iconImage: {
    height: '0.86rem',
    width: '0.9725rem',
  },
}));

export default function InputText(props) {
  const {
    placeholder,
    value,
    name,
    handleChange,
    errorText,
    isCorrect = false,
    isError = false,
    isDisabled = false,
    isWritten = false,
    icon,
    placeIcon = false,
    handleIconClick,
    suffix = false,
    suffixText,
    type = 'text',
    maxLen = 100,
    height = '2rem',
    hitlFlag = false,
    showErrorIcon = true,
    classStyle = 'h3Medium',
  } = props;
  const classes = useStyles();
  const boxBackgroundColor = () => {
    let color = '';
    if (hitlFlag) {
      color = '#FDF5E5';
    } else if (name === 'country') {
      color = '#F5F8FA';
    }
    return color;
  };
  return (
    <>
      <div
        className={`${classes.container} ${
          isDisabled && classes.disabledField
        } ${isError ? classes.inputErrorContainer : classes.inputContainer} ${
          isWritten && classes.inputBackground
        }`}
        style={{ backgroundColor: boxBackgroundColor() }}
      >
        <span className="unitTextWrapper">
          <input
            className={`icon-input ${classStyle} ${classes.inputField} ${
              isDisabled && classes.disabledInput
            } ${isWritten && classes.inputBackground} `}
            style={{ height, backgroundColor: hitlFlag ? '#FDF5E5' : '' }}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            value={value}
            autoComplete="off"
            maxLength={maxLen}
            disabled={isDisabled}
          />
          {suffix && (
            <span className={`h3Medium ${classes.imageLogo}`}>
              {suffixText}
            </span>
          )}
          {showErrorIcon && (
            <span className={`${classes.imageLogo}`}>
              {isError && (
                <img className="check-icon" src={error} alt="error" />
              )}
            </span>
          )}
          <span className={`${classes.imageLogo}`}>
            {isCorrect && (
              <img className="check-icon" src={correct} alt="error" />
            )}
          </span>
          <span className={`${classes.calenderLogo}`}>
            {placeIcon && (
              <img
                aria-hidden="true"
                className={classes.iconImage}
                src={icon}
                alt="icon"
                onClick={handleIconClick}
              />
            )}
          </span>
        </span>
      </div>
      {isError && (
        <div className={`${classes.errorMessage} h3Regular`}>{errorText}</div>
      )}
    </>
  );
}
