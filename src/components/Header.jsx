import React from 'react';
import CadburyLogo from '../UI Images/Cadbury Logo.png';
import BirthdaySongLogo from '../UI Images/2d logo.png';
import Hamburger from '../UI Images/Hamburger.png';
import { Grid, Typography } from '@mui/material';

const Download = () => {
  return (
    <Grid container className='header'>
        <Grid item xs={3}>
            <img className='cadbury-logo' src={CadburyLogo} alt="Cadbury Logo" />    
        </Grid>
        <Grid item xs={3}>
            <img className='birthday-logo' src={BirthdaySongLogo} alt="Logo" />
        </Grid>
        <Grid item xs={3}>

        </Grid>
        <Grid item xs={3} className='hamburger'>
            <img className='menu' src={Hamburger} alt="Menu" />
        </Grid>
    </Grid>
  );
};

export default Download;