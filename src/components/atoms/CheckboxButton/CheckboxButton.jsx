import React from 'react';
import { makeStyles } from '@mui/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CheckboxButtonTicked from '../../../assets/atoms/checkbox/checkboxButtonTicked.svg';
import CheckboxButtonUnticked from '../../../assets/atoms/checkbox/checkboxButtonUnticked.svg';

const useStyles = makeStyles((theme) => ({
  checkboxButtonStyle: {
    color: theme.palette.grayDark1,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    padding: '0px 0.25rem',
    gap: '0.5rem',
  },

  imgStyle: {
    width: '1.063rem',
    height: '1.063rem',
  },
  alignCenter: {
    display: 'flex',
    alignItems: 'center',
  },
  labelColor: {
    color: theme.palette.grayDark1,
  },
}));

function CheckboxButton(props) {
  const {
    isChecked,
    handleChange,
    label,
    name,
    marginTop = '0rem',
    isDisabled = false,
  } = props;

  const classes = useStyles();

  return (
    <div className={`${classes.checkboxButtonStyle} h3Regular`}>
      <FormGroup>
        <FormControlLabel
          sx={{ alignItems: 'flex-start' }}
          control={(
            <div className={classes.alignCenter}>
              <Checkbox
                style={{ marginTop }}
                checked={isChecked}
                onChange={handleChange}
                disabled={isDisabled}
                name={name}
                checkedIcon={<img className={classes.imgStyle} src={CheckboxButtonTicked} alt="Checked" />}
                icon={<img className={classes.imgStyle} src={CheckboxButtonUnticked} alt="Unchecked" />}
              />
              <span className={`${classes.labelColor} ${'h3Regular'}`}>{label}</span>
            </div>
          )}
        />
      </FormGroup>

    </div>
  );
}

export default CheckboxButton;
