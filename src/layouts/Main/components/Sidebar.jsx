import React from 'react';
import { NavLink } from 'react-router-dom';
import DashboardIcon from '../../../assets/dashboard.svg';
import LoansIcon from '../../../assets/loans.svg';
import NewApplicationIcon from '../../../assets/newApplication.svg';
import BarsIcon from '../../../assets/bars.svg';
import { useStyles } from '../Styles';

export default function Sidebar(props) {
  const classes = useStyles();
  const { isOpen, setIsOpen } = props;

  const toggle = () => setIsOpen(!isOpen);
  // sidebar item
  const sidebarItem = [
    {
      path: '/main',
      name: 'Dashboard',
      icon: <img src={DashboardIcon} alt="Dashboard" />,
    },
    {
      path: '/main1',
      name: 'Loans',
      icon: <img src={LoansIcon} alt="Loans" />,
    },
    {
      path: '/main2',
      name: 'New Application',
      icon: <img src={NewApplicationIcon} alt="NewApplication" />,
    },
  ];
  return (
    <div style={{ width: isOpen ? '15rem' : '4rem', transition: isOpen ? '' : 'ease-in 0.2s' }} className={classes.sidebar}>
      <div style={{ marginRight: isOpen ? '1.5rem' : '' }} className={classes.topSection}>
        <div
          className={classes.bars}
          style={{ margin: isOpen ? '' : '0rem auto' }}
          onClick={toggle}
          aria-hidden="true"
        >
          <img src={BarsIcon} alt="Bars" />
        </div>
      </div>
      {
            sidebarItem.map((item) => (
              <NavLink
                to={item.path}
                key={item.name}
                style={{ paddingLeft: isOpen ? '0.7rem' : '' }}
                className={({ isActive }) => (isActive ? classes.activeBtn : classes.link)}
              >
                <div className={isOpen ? classes.expandDrawerIcon : classes.collapseDrawerIcon}>
                  {item.icon}

                </div>
                <div style={{ display: isOpen ? 'block' : 'none' }}>{item.name}</div>
              </NavLink>
            ))
        }
    </div>
  );
}
