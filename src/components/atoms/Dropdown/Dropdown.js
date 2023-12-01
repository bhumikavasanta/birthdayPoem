import React from 'react';
import { makeStyles } from '@mui/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import './Dropdown.css';

const useStyles = makeStyles((theme) => ({
  dropdownSelect: {
    height: '1.8rem',
    width: '99%',
    color: `${theme.palette.grayDark1} !important`,
    boxShadow: '#fff !important',
    outline: 'none !important',
    border: 'none !important',
  },
  placeholderText: {
    color: `${theme.palette.grayDark3}`,
  },
  options: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  menuItem: {
    '&:hover': {
      backgroundColor: `${theme.palette.blueGrayMid} !important`,
    },
  },
  dropdownBG: {
    backgroundColor: '#FDF5E5 !important',
  },
  errorMessage: {
    color: `${theme.palette.redDefault}`,
    lineHeight: '1.25rem',
  },
}));

export default function Dropdown(props) {
  const classes = useStyles();
  const {
    placeholder = '', setWidth = '16.25', options, value = '', name, isWritten = false, handleChange, isError, errorText, hitlFlag = false,
  } = props;

  // For options follow the schema
  // const options = [
  //   { key: 'key', value: 'value' }
  // ];
  // Key will be visible in the UI
  // value will be used for data manipulation

  const placeholderValue = () => <span className={`${classes.placeholderText} h3Regular`}>{placeholder === '' ? 'Select' : placeholder}</span>;

  return (
    <div>
      <FormControl sx={{ width: '100%' }}>
        <Select
          sx={{
            backgroundColor: `${isWritten ? '#FDF5E5' : hitlFlag && '#FDF5E5'}`,
            '&& fieldset': {
              border: `${isError ? '1.5px solid #DE350B' : '1.5px solid #D4D5D8'}`,
              textOverflow: 'ellipsis',
              overflow: 'hidden',
            },
            '&:hover': {
              '&& fieldset': {
                border: `${isError ? '1.5px solid #DE350B' : '1.5px solid #616E84'}`,
              },
            },
            '&.Mui-focused ': {
              '&& fieldset': {
                border: `${isError ? '1.5px solid #DE350B' : '1.5px solid #3C4C68'}`,
              },
            },
          }}
          className={`${classes.dropdownSelect} h3Medium`}
          value={value}
          onChange={handleChange}
          autoWidth
          displayEmpty
          name={name}
          MenuProps={{
            style: {
              maxHeight: '10rem',
            },
          }}
          renderValue={value !== '' ? undefined : placeholderValue}
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          {options.map((option) => (
            <MenuItem
              sx={{ width: `${setWidth}rem` }}
              value={option.value}
              key={option.key}
              className={`${classes.menuItem}`}
            >
              <div className={`h3Medium ${classes.options}`}>{option.key}</div>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {isError && <div className={`${classes.errorMessage} h3Regular`}>{errorText}</div>}
    </div>
  );
}
