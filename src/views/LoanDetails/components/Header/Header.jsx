import React, { useState } from 'react';
import { useStyles } from '../../Styles';
import documentIcon from '../../../../assets/InnerPage/documentIcon.svg';
import ellipsIcon from '../../../../assets/InnerPage/ellipsIcon.svg';
import pinIcon from '../../../../assets/InnerPage/pinIcon.svg';
import activityIcon from '../../../../assets/InnerPage/activityIcon.svg';
import emailIcon from '../../../../assets/InnerPage/emailIcon.svg';
import exportIcon from '../../../../assets/InnerPage/exportIcon.svg';
import cancelIcon from '../../../../assets/InnerPage/cancelIcon.svg';
import Chip from '../../../../components/atoms/Chip/Chip';
import CommonPopup from '../../../../components/atoms/Popup/CommonPopup';
import exportEnvolop from '../../../../assets/InnerPage/exportEnvolop.svg';
import toggleUpdateIcon from '../../../../assets/Popup/toggleUpdateIcon.svg';
import SideDrawer from './SideDrawer/SideDrawer';
import ActivityIcon from '../../../../assets/Popup/activityIcon2.svg';
import SwitchButton from '../../../../components/atoms/SwitchButton/SwitchButton';
// import MonitoredUnmonitoredTogglePopup from './component/MonitoredUnmonitoredTogglePopup';

function Header(props) {
  const [open, setOpen] = useState(false);
  const [openSideDrawer, setOpenSideDrawer] = useState(false);
  const [openTogglePopup, setOpenTogglePopup] = useState(false);
  const [label, setLabel] = useState(false);

  // open the export popup
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickSideDrawer = () => {
    setOpenSideDrawer(true);
  };

  const handleClickTogglePopup = () => {
    setOpenTogglePopup(!openTogglePopup);
  };

  const handleClickMessage = () => {
    setLabel(!label);
  };

  // props comming from LoanDetails file
  const {
    loanId,
    uId,
    comercial,
    realEsted,
    note,
    portfolio,
    createdOn,
  } = props;
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <div className={classes.topHeader}>
        <div className={classes.documentIcon}>
          <img src={documentIcon} alt="document Icon" />
        </div>
        {/* Loan number and UID */}
        <div className={classes.loanNumber}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div className={` ${classes.loanNumberValue} ${'h1Medium'}`}>{loanId}</div>
            <div className={classes.toggleButtonEdit}>
              <div onClick={handleClickTogglePopup} aria-hidden="true">
                <SwitchButton />
              </div>
              <div className={`${classes.monitoredEdit} ${'h3Regular'}`} onClick={handleClickMessage} aria-hidden="true">{label ? <div>Unmonitored</div> : <div>Monitored</div>}</div>
              <span className={`${classes.labelEdit} ${'h3Regular'}`}>{label}</span>
            </div>
            <div>
              <CommonPopup
                handleClickMessage={handleClickMessage}
                msg="Unmonitored"
                open={openTogglePopup}
                setOpen={setOpenTogglePopup}
                topLeftIcon={toggleUpdateIcon}
                topTitle="Update State"
                mainContent="Are you sure you want the state to be Un-Monitored?"
                buttonOneText="Yes, Confirm"
                buttonOneTextColor="#FFFFFF"
                buttonTwoText="No, Cancel"
                buttonTwoTextColor="#15284B"
                dialogWidth="30.5em"
                dialogHeight="20.4em"
                alignMargin="auto"
                buttonsAlign="none"
              />
            </div>
          </div>
          <div className={` ${classes.uidNumberValue} ${'h3Medium'}`}>
            <div className={` ${classes.uidNumberText} ${'h3Regular'}`}>UID:&nbsp;</div>
            {' '}
            {uId}
          </div>
        </div>
        {/* Loan Types */}
        <div className={classes.loanTypes}>
          <div className={classes.productTypes}>
            <div className={` ${classes.productTypesTextTitle} ${'h3Regular'}`}>
              Product Type
            </div>
            <div className={` ${classes.productTypesTextValue} ${'h3Medium'}`}>
              {comercial}
            </div>
          </div>
          <div className={classes.collateralTypes}>
            <div className={` ${classes.productTypesTextTitle} ${'h3Regular'}`}>
              Collateral Type
            </div>
            <div className={` ${classes.productTypesTextValue} ${'h3Medium'}`}>
              {realEsted}
            </div>
          </div>
          <div className={classes.noteTypes}>
            <div className={` ${classes.productTypesTextTitle} ${'h3Regular'}`}>
              Note
            </div>
            <div className={` ${classes.productTypesTextValue} ${'h3Medium'}`}>
              {note}
            </div>
          </div>
          <div className={classes.portfolioTypes}>
            <div className={` ${classes.productTypesTextTitle} ${'h3Regular'}`}>
              Portfolio Type
            </div>
            <div className={` ${classes.productTypesTextValue} ${'h3Medium'}`}>
              {portfolio}
            </div>
          </div>
          <div className={classes.createdOn}>
            <div className={` ${classes.productTypesTextTitle} ${'h3Regular'}`}>
              Created On
            </div>
            <div className={` ${classes.productTypesTextValue} ${'h3Medium'}`}>
              {createdOn}
            </div>
          </div>
        </div>
      </div>
      {/* secondary header Status */}
      <div className={classes.statusRow}>
        <div className={classes.statusLeftContent}>
          <div className={` ${classes.statusText} ${'h3Regular'}`}>Status:</div>
          <div className={classes.activeIcon}>
            <Chip
              text="Active"
              isIconAvailable="true"
              svg={ellipsIcon}
              bgColor="#D4F1E8"
              width="4.5em"
              height="1.32em"
            />
          </div>
          <div className={classes.floodPruneIcon}>
            <Chip
              text="Flood-Prone"
              bgColor="#E8F0FB"
              borderColor="#5892F9"
              width="5em"
              height="1.32em"
            />
          </div>
        </div>
        {/* pop up Icons/Buttons for activity and emails...etc */}
        <div className={classes.statusRightContent}>
          <div className={classes.statusRightContentIcon}><img src={pinIcon} alt="pin Icon" /></div>
          <div className={classes.statusRightContentIcon}>
            <img
              src={activityIcon}
              alt="activity Icon"
              onClick={handleClickSideDrawer}
              aria-hidden="true"
            />
            <SideDrawer
              open={openSideDrawer}
              headerText="Activity"
              activityIcon={ActivityIcon}
              loanId="LOA64 3946"
              UID="3281390"
              edge="start"
              color="inherit"
              onClose={() => setOpenSideDrawer(false)}
            />
          </div>
          <div className={classes.statusRightContentIcon}><img src={emailIcon} alt="emial Icon" /></div>
          <div className={classes.statusRightContentIcon}>
            <img src={exportIcon} alt="export Icon" onClick={handleClickOpen} aria-hidden="true" />
          </div>
          <div className={classes.statusRightContentIcon}><img src={cancelIcon} alt="cancel Icon" /></div>
          {/* <div><SideDrawer /></div> */}
        </div>
      </div>
      <CommonPopup
        open={open}
        setOpen={setOpen}
        topLeftIcon={exportEnvolop}
        topTitle="Export"
        mainContent="Export the loan details as CSV for lorem ipsum dolor sit,
        Export the loan details as CSV for lorem ipsum dolor sit"
        buttonOneText="Export"
        buttonOneTextColor="#FFFFFF"
        buttonTwoText="Cancel"
        buttonTwoTextColor="#15284B"
        dialogWidth="30.5em"
        dialogHeight="20.4em"
        alignMargin="auto"
      />
    </div>
  );
}

export default Header;
