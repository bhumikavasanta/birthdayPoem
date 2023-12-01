import React, { useState } from 'react';
import {
  DialogContentText,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import ReminderSectionSideDrawer from './ReminderSectionSideDrawer';

function SideDrawerContent(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiDialogContentText-root': {
        padding: '0 0rem 1rem 0.5rem',
      },
    },
    dialogContextTextEdit: {
      display: 'flex',
      flexDirection: 'row',
      borderBottom: `1px solid ${theme.palette.grayMid4}`,
      margin: '0.5rem 1rem 0.5rem 1rem',
    },
    iconsEdit: {
      paddingTop: '0.5rem',
    },
    mainBoxEdit: {
      padding: '0.0rem 0.1rem 0.5rem 0.1rem',
    },
    editorName: {
      color: theme.palette.grayDark2,
    },
    timeEdit: {
      paddingTop: '0.4rem',
      display: 'flex',
      flexDirection: 'row',
    },
    classifiedNumberEdit: {
      height: '1.5rem',
      width: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.palette.grayLight1,
      color: theme.palette.grayDark3,
      marginTop: '0.2rem',
      marginRight: '0.5rem',
    },
    emailTextEdit: {
      color: theme.palette.blueDefault,
      cursor: 'pointer',
    },
  }));

  const classes = useStyles();

  const [openReminderSection, setOpenReminderSection] = useState(false);

  const handleViewEmailClick = () => {
    setOpenReminderSection(true);
  };

  const {
    editorName, editorAction, action, day, time, Icon, viewEmail,
  } = props;
  return (
    <div>
      <DialogContentText>
        <div className={classes.dialogContextTextEdit}>
          <div
            className={`${classes.classifiedNumberEdit} ${'h3Medium'}`}
          >
            <img src={Icon} alt="Icon" />
          </div>
          <div className={`${classes.mainBoxEdit} ${'h3Medium'}`}>
            <span className={`${classes.editorName}`}>{editorName }</span>
            <span className={`${classes.editorAction}`}>
              {editorAction}
              {' '}
              <b style={{ color: '#15284B' }}>{action}</b>
            </span>
            <div className={classes.emailTextEdit}><u onClick={handleViewEmailClick} aria-hidden="true">{viewEmail}</u></div>
            {openReminderSection ? <div><ReminderSectionSideDrawer /></div> : ''}
            <div className={`${classes.timeEdit} ${'h3Regular'}`}>
              <span style={{ paddingRight: '1rem' }}>{day}</span>
              <span>{time}</span>
            </div>
          </div>
        </div>
      </DialogContentText>
    </div>
  );
}

export default SideDrawerContent;
