import React, { useState } from 'react';
import SignUp from './components/SignUp';
import Alerts from '../../components/atoms/Alerts/Alerts';

// Rendering SignUp component
function Auth() {
  const [alert, setAlert] = useState({
    open: false,
    msg: '',
    err: false,
  });

  // handling Alert close
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlert({
      ...alert,
      open: false,
    });
  };
  return (
    <>
      <SignUp />
      {alert.open ? (
        <Alerts
          open={alert.open}
          msg={alert.msg}
          err={alert.err}
          handleClose={handleClose}
        />
      ) : (
        <>
        </>
      )}
    </>
  );
}

export default Auth;
