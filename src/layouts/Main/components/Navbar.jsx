import React from 'react';
import DociphiLogo from '../../../assets/dociphiLogo.svg';
import Notification from '../../../assets/notification.svg';
import User from '../../../assets/user.svg';
import Logout from '../../../assets/logout.svg';
import { useStyles } from '../Styles';

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.navbar}>
      <div className={classes.leftNav}>
        <img src={DociphiLogo} alt="Dociphi" className={classes.alignCenter} />
      </div>

      <div className={classes.flex}>
        <img src={Notification} alt="Notification" className={classes.rightIcons} />
        <img src={User} alt="User" className={classes.rightIcons} />
        <img src={Logout} alt="Logout" className={classes.rightIcons} />
      </div>
    </div>
  );
}
