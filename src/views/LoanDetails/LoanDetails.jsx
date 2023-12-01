import React from 'react';
import BorrowersInfo from './components/BorrowersInfo';
import { useStyles } from './Styles';
import Header from './components/Header/Header';
import AddNotes from './components/Notes/AddNotes';
import LoanDetailsSection from './components/LoanDetailsSection/LoanDetailsSection';
import ComplianceRuleSection from './components/ComplianceRuleSection/ComplianceRuleSection';
import DocumentSection from './components/DocumentSection/DocumentSection';

function LoanDetails() {
  const classes = useStyles();
  return (
    <>
      {/* breadcrumb for path */}
      <div className={classes.breadCrumb}>LoanDetails</div>
      <div className={classes.marginLR}>
        {/* header & borrowersInfo section */}
        <div className={classes.headerBorrowerSection}>
          <div className={classes.headerHeight}>
            <Header
              loanId="LOA64 3946"
              uId="3281390"
              comercial="Commercial"
              realEsted="Real Estate"
              note="186 - CML Sba7a C&I Sold"
              portfolio="Tammac"
              createdOn="08-18-2022"
            />
          </div>
          <div className={classes.borrowersInfo}><BorrowersInfo /></div>
        </div>
        {/* todo- other sections */}
        <div>
          <div className={classes.loanDetailsComplainceAndDocument}>
            <div>
              <div>
                <LoanDetailsSection />
                <DocumentSection />
              </div>
              {/* Document section goes here */}
            </div>
            <div>
              <div>
                <div className={classes.complianceRuleSection}>
                  <ComplianceRuleSection />
                </div>
                <div className={classes.notesDiv}><AddNotes /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoanDetails;
