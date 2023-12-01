/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Switch, styled } from '@mui/material';
import './styles.css';
import preview from '../../../assets/previewToggleIcon.svg';
import preview2 from '../../../assets/previewUnmonitoredIcon.svg';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 67,
  height: 34,
  padding: 6,
  '& .MuiSwitch-switchBase': {
    margin: 8,
    padding: 0,
    transform: 'translateX(0px)',
    backgroundImage: `url${preview}`,
    '&.Mui-checked': {
      transform: 'translateX(32px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url(${preview})`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#24B082' : '#24B082',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 18,
    height: 18,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundColor: 'white',
      borderRadius: '10px',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url(${preview2})`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'white' ? '#8796A5' : '#D6792D',
    borderRadius: 22 / 2,
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 16,
      height: 16,
    },
    '&:before': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main),
      )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      left: 12,
    },
    '&:after': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main),
      )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      right: 12,
    },
  },
}));

export default function SwitchButton() {
  // const [onClick] = props;
  return (
    <div>
      <MaterialUISwitch defaultChecked />
      {/* <span>Monitored</span> */}
      {/* <div className="can-toggle demo-rebrand-2">
        <input id="e" type="checkbox" />
        <label htmlFor="e">
          <div className="can-toggle__switch" data-checked="Yes" data-unchecked="No" />
          <div className="can-toggle__label-text">toggle</div>
        </label>
      </div> */}
    </div>
  );
}
