import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar, Sidebar } from './components';
import { useStyles } from './Styles';

export default function Main() {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classes.flex}>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div style={{ width: isOpen ? 'calc(100vw - 15rem)' : 'calc(100vw - 4.5rem)' }} className={classes.flexColumn}>
        <Navbar />
        <main className={classes.content}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
