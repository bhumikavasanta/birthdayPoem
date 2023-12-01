import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  headerDiv: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0.5em 1em',
    gap: '0.5em',
    width: '100%',
    height: '2.5em',
    background: theme.palette.blueLight1,
    flex: 'none',
    order: 0,
    alignSelf: 'stretch',
    flexGrow: 0,
    justifyContent: 'space-between',
  },
  iconAndText: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5em',
  },
  icon: {
    height: '0.875em',
    width: '0.875em',
  },
  buttonStyle: {
    color: theme.palette.blueCobaltDark,
    border: `1.5px solid ${theme.palette.blueCobaltDark}`,
    borderRadius: '0.25rem',
    textTransform: 'none',
    height: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    backgroundColor: 'transparent',
  },
  logoText: {
    display: 'flex',
  },
  logo: {
    marginRight: '0.5rem',
  },
  blueCobaltDark: {
    color: theme.palette.blueCobaltDark,
  },
  headerCount: {
    color: theme.palette.blueCobaltDark,
    background: theme.palette.blueLight2,
    borderRadius: '0.25rem',
    padding: '0.25rem',
  },
}));

export default function SectionHeader(props) {
  const {
    isIconAvailable = false,
    svg,
    headerText,
    // below props are for right most button
    isButtonAvailable = false,
    isButtonIconAvailable = false,
    buttonSvg,
    buttonText,
    onclick,
    headerHeight, // Height of header
    isHeaderCount, // Count field if available ex-> Notes count
    headerCount, // total count
  } = props;
  const classes = useStyles();
  return (
    <div className={classes.headerDiv} style={{ height: headerHeight }}>
      <div className={classes.iconAndText}>
        {isIconAvailable && <img src={svg} alt="test" className={classes.icon} />}
        <div className={`${classes.blueCobaltDark} ${'h2Medium'}`}>{headerText}</div>
        {isHeaderCount && (
        <div className={`${classes.headerCount} ${'h2Medium'}`}>
          {headerCount}
        </div>
        )}
      </div>
      {isButtonAvailable
                && (
                <button type="button" onClick={onclick} className={`${classes.buttonStyle} ${'h3Medium'}`}>
                  <span className={`${classes.logoText}`}>
                    {isButtonIconAvailable && <img className={`${classes.logo}`} src={buttonSvg} alt="logo" />}
                    <div className="h3Medium">{buttonText}</div>
                  </span>
                </button>
                )}
    </div>
  );
}
