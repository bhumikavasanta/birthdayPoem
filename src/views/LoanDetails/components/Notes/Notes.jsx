import React from 'react';
import { makeStyles } from '@mui/styles';
import Chip from '../../../../components/atoms/Chip/Chip';

export const useStyles = makeStyles((theme) => ({
  notes: {
    border: `1px solid ${theme.palette.grayMid3}`,
    borderRadius: '0.25rem',
    padding: '0.5rem',
    marginBottom: '0.5rem',
  },
  grayDark2: {
    color: theme.palette.grayDark2,
  },
  timestamp: {
    color: theme.palette.grayDark3,
    marginBottom: '0.25rem',
  },

}));
export default function Notes() {
  const classes = useStyles();
  return (
    <div className={classes.notes}>
      <div className={`${classes.grayDark2} ${'h3Regular'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices risus massa pretium vitae, pulvinar sed.</div>
      <div className={`${classes.timestamp} ${'h4Regular'}`}>Today, 4:18 PM by Anthony Smith (Credit Team)</div>
      <Chip bgColor="#F6E0DB" borderColor="#F6E0DB" text="High" fontColor="#DE350B" width="2.5rem" />
    </div>
  );
}
