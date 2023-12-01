import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import CrossIcon from '../../../../../assets/Popup/crossIcon.svg';

export default function MonitoredUnmonitoredTogglePopup(props) {
  const useStyles = makeStyles((theme) => ({
    titleEdit: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '0 0.5rem 0 1rem',
    },
    titleContentEdit: {
      color: theme.palette.grayDark1,
      marginLeft: '0.5em',
    },
    horizontalLineEdit: {
      height: '0.06em',
      background: theme.palette.grayMid3,
    },
    buttonsEdit: {
    //   border: '2px solid black',
      display: 'flex',
      flexDirection: 'row',
      marginLeft: '10rem',
    },
    crossIconEdit: {
      marginRight: '0.5rem',
      cursor: 'pointer',
    },
    contentText: {
      color: theme.palette.grayDark2,
    },
    iconEdit: {
      paddingLeft: '0.5rem',
    },
  }));
  const {
    open,
    setOpen,
    topLeftIcon,
    topTitle,
    mainContent,
    buttonOneText,
    buttonTwoText,
    dialogWidth,
    dialogHeight,
    alignMargin = 'auto',
    buttonOneTextColor = '#FFFFFF',
    buttonTwoTextColor = '#15284B',
  } = props;
  const theme = useTheme();

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          maxWidth: dialogWidth, height: dialogHeight, margin: alignMargin,
        }}
      >
        <div className={classes.titleEdit}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <img src={topLeftIcon} alt="IconImage" className={classes.iconEdit} aria-hidden="true" />
            <DialogTitle sx={{ fontWeight: '600' }} className={`${classes.titleContentEdit} ${'h2Medium'}`}>{topTitle}</DialogTitle>
          </div>
          <div className={classes.crossIconEdit}>
            <img src={CrossIcon} alt="CloseIcon" onClick={handleClose} aria-hidden="true" />
          </div>
        </div>
        <div className={classes.horizontalLineEdit} />
        <DialogContent>
          <DialogContentText id="alert-dialog-description" className={` ${classes.contentText} ${'h3Regular'}`}>
            <div className={` ${classes.contentText}`}>{mainContent}</div>
          </DialogContentText>
        </DialogContent>
        <DialogActions dir="rtl" className={classes.buttonsEdit}>
          <Button
            variant="contained"
            sx={{
              color: buttonOneTextColor,
              textTransform: 'none',
              background: theme.palette.blueCobaltDark,
              '&.MuiButtonBase-root:hover': {
                bgcolor: theme.palette.blueCobaltDark,
              },
            }}
            onClick={handleClose}
          >
            {buttonOneText}

          </Button>
          <Button
            onClick={handleClose}
            autoFocus
            sx={{ color: buttonTwoTextColor, marginLeft: '1em', textTransform: 'none' }}
            className={` ${classes.cancelButton} ${'h3Regular'}`}
          >
            {buttonTwoText}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
