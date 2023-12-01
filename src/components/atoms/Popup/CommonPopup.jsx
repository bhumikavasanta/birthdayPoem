import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import CheckboxButton from '../CheckboxButton/CheckboxButton';
import crossIcon from '../../../assets/crossIcon.svg';

const useStyle = makeStyles((theme) => ({
  envolopTitle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  topHeaderIcon: {
    color: theme.palette.grayDark1,
    marginLeft: '0.5em',
  },
  lowerButtonsAlign: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  envolopTitleAndCross: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  thinBorderLine: {
    height: '0.06em',
    background: theme.palette.grayMid3,
  },
  cancelAndMainButtonsAlign: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginRight: '1rem',
  },
}));

export default function AlertDialog(props) {
  const {
    handleClickMessage,
    msg,
    open,
    setOpen,
    topLeftIcon,
    topTitle,
    mainContent,
    isButtonOneDisabled = false,
    buttonOneText,
    buttonTwoText,
    dialogWidth,
    dialogHeight,
    alignMargin = 'auto',
    buttonOneTextColor = '#FFFFFF',
    buttonTwoTextColor = '#15284B',
    isCheckboxAvailable = false, // based on this prop the checkbox will be populated
    checkboxLabel = 'Add New Rule',
    buttonsAlign = 'rtl', // buttonsAlign = 'none' for default alignment or 'rtl'
    twoElementGap = '3', // twoElementGap = 'none' for default gap
  } = props;
  const theme = useTheme();
  const classe = useStyle();

  const handleClose = () => {
    setOpen(false);
    handleClickMessage(msg);
  };
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
        <DialogTitle
          id="alert-dialog-title"
          className={classe.envolopTitleAndCross}
        >
          <div className={classe.envolopTitle}>
            <img src={topLeftIcon} alt="icon" />
            <div className={` ${classe.topHeaderIcon} ${'h2Medium'}`}>{topTitle}</div>
          </div>
          <div>
            <img src={crossIcon} alt="Cross Icon" aria-hidden="true" onClick={handleClose} />
          </div>
        </DialogTitle>
        <div className={classe.thinBorderLine} />
        <DialogContent>
          <DialogContentText id="alert-dialog-description" className={` ${classe.contentText} ${'h3Regular'}`}>
            {mainContent}
          </DialogContentText>
        </DialogContent>
        <DialogActions
          dir={buttonsAlign}
          className={classe.lowerButtonsAlign}
          sx={{ gap: `${twoElementGap}rem` }}
        >
          <div>
            {isCheckboxAvailable && <CheckboxButton label={checkboxLabel} />}
          </div>
          <div className={classe.cancelAndMainButtonsAlign}>
            <Button
              onClick={handleClose}
              autoFocus
              sx={{ color: buttonTwoTextColor, marginLeft: '1em', textTransform: 'none' }}
              className={` ${classe.cancelButton} ${'h3Regular'}`}
            >
              {buttonTwoText}
            </Button>
            <Button
              variant="contained"
              disabled={isButtonOneDisabled}
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
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}
