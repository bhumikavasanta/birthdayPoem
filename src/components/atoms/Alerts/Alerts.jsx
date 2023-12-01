/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';
import CancelIcon from '@mui/icons-material/Cancel';
import { styled } from '@mui/material/styles';

// for snackbar transition
function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

const StyledSnackbar = styled((props) => <Snackbar {...props} />)(
  () => ({
    '& .MuiSnackbar-root': {
      zIndex: 3,
      top: '2.4em',
    },
  }),
);

const StyledAlert = styled(Alert)((props) => ({
  '& .MuiAlert-root': {
    background: (props.err ? 'rgba(244, 36, 38, 0.08)' : 'rgba(39, 181, 133, 0.12)'),
    // boxShadow: "-4px -4px 10px #ffffff, 4px 4px 10px rgba(39, 181, 133, 0.25)",
    border: (props.err ? '1px solid #FF0000' : '1px solid #23B082'),
    borderRadius: '0.625rem',
    height: '2.5em',
    alignItems: 'center',
  },
  '& .MuiAlert-icon': {
    display: 'none',
  },
  '& .MuiAlert-message': {
    fontFamily: 'gothammedium',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '0.75rem',
    color: (props.err ? '#FF0000' : '#fff'),
  },
  '& .MuiAlert-action': {
    position: 'absolute',
    right: '-0.1em',
    top: '-0.6em',
  },
}));

export default function Alerts(props) {
  const {
    open, msg, err, handleClose,
  } = props;

  return (
    <div style={{ zIndex: 10000 }}>
      <StyledSnackbar
        sx={{ marginTop: '2rem !important' }}
        open={open}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={6000}
        onClose={handleClose}
        TransitionComponent={TransitionLeft}
      >
        <StyledAlert
          action={
            <CancelIcon fontSize="small" style={{ fill: '#000000' }} onClick={handleClose} />
          }
          onClose={handleClose}
          variant="filled"
          severity={err ? 'error' : 'success'}
        >
          {msg}
        </StyledAlert>
      </StyledSnackbar>
    </div>
  );
}
