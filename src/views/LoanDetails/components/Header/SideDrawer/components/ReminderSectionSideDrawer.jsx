import React from 'react';
import { makeStyles } from '@mui/styles';
import tickIcon from '../../../../../../assets/Popup/tickIcon.svg';
import dociphiLogo from '../../../../../../assets/dociphiLogo.svg';
import sideDrawerCloseIcon from '../../../../../../assets/Popup/sideDrawerCloseIcon.svg';

export default function sideDrawer() {
  const useStyles = makeStyles((theme) => ({
    sideDrawer: {
    //   height: '70%',
      background: 'white',
      position: 'fixed',
      top: '0',
      right: '25.5rem',
      width: '32rem',
      zIndex: '200',
    },
    headerText: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: '1rem 1rem',
      paddingBottom: '1rem',
      color: theme.palette.grayDark1,
      borderBottom: '2px solid #CBCFE0',
    },
    sentSection: {
      display: 'flex',
      flexDirection: 'row',
      padding: '0.5rem 0.5rem',
      background: theme.palette.grayLight1,
      margin: '0.5rem 0.5rem',
    },
    sentTimeEdit: {
      color: theme.palette.grayDark2,
    },
    tickIconEdit: {
      paddingRight: '0.5rem',
      paddingTop: '0.2rem',
    },
    emailIdEdit: {
      margin: '1rem 1rem',
      display: 'flex',
      flexDirection: 'row',
      color: theme.palette.grayDark1,
    },
    receiverEmailIdEdit: {
      marginRight: '0.5rem',
    },
    emailContainer: {
      background: theme.palette.blueGrayLight,
      border: `4px solid ${theme.palette.blueGrayMid}`,
      margin: '0.5rem 0.5rem',
    },
    automatedEmail: {
      display: 'flex',
      flexDirection: 'row',
      background: '#FBFBFB',
      borderBottom: `1px solid ${theme.palette.grayMid3}`,
    },
    circlesAlignment: {
      display: 'flex',
      flexDirection: 'row',
      padding: '0.5rem 0.5rem',
    },
    circleEdit: {
      background: 'red',
      width: '7.6px',
      height: '7.6px',
      borderRadius: '4px',
    },
    circle2Edit: {
      background: 'yellow',
      width: '7.6px',
      height: '7.6px',
      marginLeft: '0.5rem',
      borderRadius: '4px',
    },
    circle3Edit: {
      background: 'green',
      width: '7.6px',
      height: '7.6px',
      marginLeft: '0.5rem',
      borderRadius: '4px',
    },
    automatedEmailText: {
      marginLeft: '8rem',
      marginTop: '0.3rem',
      color: theme.palette.grayMid1,
    },
    logoSectionEdit: {
      display: 'flex',
      flexDirection: 'row',
      background: theme.palette.white,
      borderBottom: '2px solid #CBCFE0',
    },
    logoEdit: {
      margin: '0.5rem 1rem',
    },
    emailContentEdit: {
      padding: '1rem 0.5rem 1rem 0.5rem',
      background: theme.palette.white,
      color: theme.palette.grayDark1,
    },
    innerEmailContentEdit: {
      paddingBottom: '1.5rem',
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.sideDrawer}>
      <div className={`${classes.headerText} ${'h2Medium'}`}>
        <div>Non-Compliant Issues</div>
        <div><img src={sideDrawerCloseIcon} alt="sideDrawerCloseIcon" /></div>
      </div>
      <div className={`${classes.sentSection}`}>
        <div className={classes.tickIconEdit}><img src={tickIcon} alt={tickIcon} /></div>
        <div className={`${classes.sentTimeEdit} ${'h3Regular'}`}>Sent 1 Apr, 2021, 14:43</div>
      </div>
      <div className={classes.emailIdEdit}>
        <div className={`${classes.receiverEmailIdEdit} ${'h3Medium'}`}>To: </div>
        {' '}
        <div className={`${classes.emailAddEdit} ${'h3Medium'}`}>
          wzaman@customersbank.com, awummer@customersbank.com,
          tbrannon@customersbank.com
        </div>
      </div>
      <div className={classes.emailIdEdit}>
        <div className={`${classes.receiverEmailIdEdit} ${'h3Medium'}`}>CC: </div>
        {' '}
        <div className={`${classes.emailAddEdit} ${'h3Medium'}`}>
          tbrannon@customersbank.com
        </div>
      </div>
      <div className={classes.emailContainer}>
        <div className={classes.automatedEmail}>
          <div className={classes.circlesAlignment}>
            <div className={classes.circleEdit} />
            <div className={classes.circle2Edit} />
            <div className={classes.circle3Edit} />
          </div>
          <div className={`${classes.automatedEmailText} ${'h5Regular'}`}>Automated Email</div>
        </div>
        <div className={classes.logoSectionEdit}>
          <img src={dociphiLogo} alt="dociphiLogo" className={classes.logoEdit} />
        </div>
        <div className={`${classes.emailContentEdit} ${'h3Medium'}`}>
          <div className={classes.innerEmailContentEdit}>Hi John Warren,</div>

          <div className={classes.innerEmailContentEdit}>
            Good Day! This email is a reminder for your
            upcoming Coverage Type from Policy Document is expiring in the next days days.
          </div>

          <div className={classes.innerEmailContentEdit}>
            Please upload your updated/renewal Policy Document in the link attached below:
          </div>

          <div className={classes.innerEmailContentEdit}>Insert link</div>

          <div className={classes.innerEmailContentEdit}>Thank you!</div>

        </div>
      </div>
    </div>
  );
}
