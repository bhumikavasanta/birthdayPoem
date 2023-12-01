import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  iconDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.5em',
    gap: '0.5em',
    width: '2em',
    height: '2em',
    background: theme.palette.grayLight1,
    borderRadius: '0.25em',
    flex: 'none',
    order: 1,
    flexGrow: 0,
    cursor: 'pointer',
  },
}));

export default function IconButton(props) {
  const { icon, onclick } = props;
  const classes = useStyles();
  return (
    <div className={classes.iconDiv} onClick={onclick} aria-hidden="true">
      <img src={icon} alt="icon" />
    </div>
  );
}
