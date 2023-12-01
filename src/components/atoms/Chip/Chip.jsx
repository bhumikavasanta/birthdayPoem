import React from 'react';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  chipDiv: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0.125em 0.5em 0.125em 0.5em',
    gap: '0.5em',
    borderRadius: '0.125em',
  },
  img: {
    height: '0.75em',
    width: '0.75em',
  },
}));

export default function Chip(props) {
  const {
    width = '3.75em',
    height = '1.125em',
    bgColor,
    borderColor,
    fontColor = '#15284B',
    isIconAvailable = false, // based on this prop value the svg icon will be populated
    svg, // svg icon component
    text,
  } = props;
  const classes = useStyles();
  return (
    <div
      className={classes.chipDiv}
      style={{
        width,
        height,
        background: bgColor,
        border: `0.0625em solid ${borderColor}`,
      }}
    >
      {isIconAvailable && <img src={svg} alt="test" className={classes.img} />}
      <span style={{ color: fontColor }} className="h5Medium">{text}</span>
    </div>
  );
}
