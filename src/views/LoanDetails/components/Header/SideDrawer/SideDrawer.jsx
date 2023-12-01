import React, { useState } from 'react';
import { Drawer, Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SideDrawerContent from './components/SideDrawerContent';
import pinIcon from '../../../../../assets/Popup/pinIcon.svg';
import exportIcon from '../../../../../assets/Popup/exportIcon.svg';
import previewIcon from '../../../../../assets/Popup/previewIcon.svg';
import pauseIcon from '../../../../../assets/Popup/pauseIcon.svg';
import emailIcon from '../../../../../assets/Popup/emailIcon.svg';
import closeIcon from '../../../../../assets/Popup/closeIcon.svg';
import updateIcon from '../../../../../assets/Popup/updateIcon.svg';
import waivedIcon from '../../../../../assets/Popup/waivedIcon.svg';
import Dropdown from '../../../../../components/atoms/Dropdown/Dropdown';
// import ReminderSectionSideDrawer from './components/ReminderSectionSideDrawer';

export default function SideDrawer(props) {
  const useStyles = makeStyles((theme) => ({
    upperSection: {
      display: 'flex',
      flexDirection: 'row',
      margin: '0.5rem 1rem 0.5rem 1rem',
      marginBottom: '0.5rem',
      justifyContent: 'space-between',
    },
    titleEdit: {
      display: 'flex',
      flexDirection: 'row',
      //   padding: '1rem 1rem',
      //   border: '2px solid black',
    },
    iconEdit: {
      width: '22.34px',
      height: '23.04px',
    },
    headerText: {
      paddingLeft: '1rem',
      color: theme.palette.grayDark2,
    },
    loanId: {
      padding: '0.5rem 1rem 0.5rem 1rem',
      color: theme.palette.grayDark2,
      background: theme.palette.grayLight1,
    },

  }));

  const option = [
    {
      key: 'All',
      value: 'All',
    },
    {
      key: 'All',
      value: 'All',
    },
  ];

  const classes = useStyles();
  const {
    open, onClose, activityIcon, headerText, loanId, UID,
  } = props;
  const [selectedValue, setselctedValue] = useState('All');

  const handleChangeApp = (e) => {
    setselctedValue(e.target.value);
  };

  return (
    <div>
      <Drawer anchor="right" open={open} onClose={onClose}>
        <Box width="350px" role="presentation">
          <Typography>
            <div>
              <div className={classes.upperSection}>
                <div className={classes.titleEdit}>
                  <img src={activityIcon} alt="IconImage" className={classes.iconEdit} aria-hidden="true" />
                  <div className={`${classes.headerText} ${'h2Medium'}`}>{headerText}</div>
                </div>
                <div className={classes.dropdownEdit}>
                  <Dropdown
                    options={option}
                    value={selectedValue}
                    name="state"
                    handleChange={handleChangeApp}
                  />
                </div>
              </div>
              <div className={`${classes.loanId}`}>
                <span className={`${'h3Regular'}`}>Loan ID:</span>
                {' '}
                <span className={`${'h3Medium'}`}>{loanId}</span>
                {' '}
                |
                <span className={`${'h3Regular'}`}> UID:</span>
                <span className={`${'h3Medium'}`}>{UID}</span>
              </div>
              <SideDrawerContent
                Icon={pinIcon}
                editorName="Robert Fox pinned "
                editorAction="the loan"
                day="Today"
                time="4:18 AM"
              />
              <SideDrawerContent
                Icon={exportIcon}
                editorName="Wade Warren Exported "
                editorAction="the loan details"
                day="Today"
                time="4:18 AM"
              />
              <SideDrawerContent
                Icon={previewIcon}
                editorName="Wade Warren moved "
                editorAction="the loan to "
                action="Monitored State"
                day="Today"
                time="4:18 AM"
              />
              <SideDrawerContent
                Icon={pauseIcon}
                editorName="Wade Warren "
                editorAction="moved the loan to "
                action="Un-monitored State"
                day="Today"
                time="4:18 AM"
              />
              <SideDrawerContent
                Icon={emailIcon}
                editorName="Wade Warren "
                editorAction="Sent an email for reminder for the expiration of document "
                action="“Employers Liability” on 10-11-2022 "
                viewEmail="View Email"
                day="Today"
                time="4:18 AM"
              />
              <SideDrawerContent
                Icon={emailIcon}
        // editorName="Jane Cooper "
                editorAction="Auto Email sent by the system for reminder for the expiration of document  "
                action="Employers Liability” on 10-11-2022 "
                viewEmail="View Email"
                day="Today"
                time="4:18 AM"
              />
              <SideDrawerContent
                Icon={closeIcon}
                editorName="Wade Warren "
                editorAction="changed the status to "
                action="Closed"
                day="Today"
                time="4:18 AM"
              />
              <SideDrawerContent
                Icon={updateIcon}
                editorName="Wade Warren "
                editorAction="validated the details and moved to "
                action="Monitored Loans"
                day="Today"
                time="4:18 AM"
              />
              <SideDrawerContent
                Icon={waivedIcon}
                editorName="Wade Warren "
                editorAction="waived the rule "
                action="“Effective date and Expiry date missing”"
                day="Today"
                time="4:18 AM"
              />

              {/* <div><SideDrawer /></div> */}
            </div>
          </Typography>
        </Box>
      </Drawer>
    </div>
  );
}
