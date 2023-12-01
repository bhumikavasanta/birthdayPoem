import React from 'react';
import { Grid } from '@mui/material';
import { useStyles } from './Styles';
import Chip from '../../../../components/atoms/Chip/Chip';
import locationIcon from '../../../../assets/InnerPage/locationIcon.svg';
import dollarIcon from '../../../../assets/InnerPage/dollarIcon.svg';
import LinearProgressBar from './LinearProgressBar';
import SectionHeader from '../../../../components/atoms/SectionHeader/SectionHeader';

function LoanDetailsSection() {
  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        sx={{
          background: '#FFFFFF',
          borderRadius: '0.25em',
        }}
      >
        <Grid
          className={classes.loanDetailsSection}
          item
        >
          <Grid className={` ${classes.loanDetailsTitle} ${'h2Medium'}`}>
            <SectionHeader
              headerText="Loan Details"
            />
          </Grid>
          {/* First Sub Section */}
          <Grid className={classes.loanDetailsSubSection1} container xs={11.55}>
            {/* commercial left and right part */}
            <Grid className={classes.commercialLeftRightData} container>
              {/* commercial left part */}
              <Grid className={classes.commercialLeftSubData}>
                <div className={` ${classes.commercial} ${'h2Medium'}`}>
                  <Chip
                    text="Commercial"
                    bgColor="rgba(0, 101, 255, 0.1)"
                    fontColor="#0065FF"
                    width="5em"
                    height="1.5em"
                  />
                </div>
                <div className={` ${classes.commercialValue} ${'h1Medium'}`}>SBA Sold C&I</div>
              </Grid>
              {/* commercial right part */}
              <Grid className={classes.commercialRightSubData}>
                <div className={classes.noteTypeSubData}>
                  <div className={` ${classes.noteTypeText} ${'h4Regular'}`}>Note Type</div>
                  <div className={` ${classes.commercialValue} ${'h1Medium'}`}>186 - CML Sba7a C&I Sold</div>
                </div>
                <div className={classes.commercialrightChip}>
                  <Chip
                    text="Tommac"
                    bgColor="#E5E2FC"
                    fontColor="#6554C0"
                    width="3.58em"
                    height="1em"
                  />
                </div>
              </Grid>
            </Grid>
            {/* Amount Section */}
            <Grid className={classes.amountSection} container>
              {/* paid and remaining */}
              <div className={classes.paidAndRemaining}>
                <div className={classes.paidAndRemainingAmt}>
                  <div>
                    <div className={` ${classes.paidText} ${'h4Regular'}`}>Paid</div>
                    <div className={` ${classes.paidValue} ${'h2Medium'}`}>$16938.44</div>
                  </div>
                  <div className={classes.remainingAmt}>
                    <div className={` ${classes.paidText} ${'h4Regular'}`}>Remaining</div>
                    <div className={` ${classes.paidValue} ${'h2Medium'}`}>$763,061.56</div>
                  </div>
                </div>
                {/* progress bar for principle and issued amt. */}
                <div className={classes.progressBar}>
                  <LinearProgressBar />
                </div>
              </div>
              <div className={classes.principalAndIssuedRes}>
                <div className={classes.principalAmt}>
                  <div className={` ${classes.principalText} ${'h4Medium'}`}>Principle</div>
                  <div className={` ${classes.paidText} ${'h2Medium'}`}>$763,061.56</div>
                </div>
                <div className={classes.issuedDate}>
                  <div className={` ${classes.paidText} ${'h4Regular'}`}>Issued</div>
                  <div className={` ${classes.paidValue} ${'h3Medium'}`}>06/30/2021</div>
                </div>
              </div>
              <div className={classes.thinLine} />
              <div className={classes.termPeriod}>
                <div className={` ${classes.termText} ${'h4Medium'}`}>Term 5 Years</div>
                <div>
                  <Chip
                    text="4 Years Pending"
                    bgColor="#FDF5E5"
                    fontColor="#FFAB00"
                    width="6.32em"
                    height="1em"
                  />
                </div>
              </div>
              <div className={classes.thinLine} />
              <div className={classes.maturitySection}>
                <div className={` ${classes.paidText} ${'h4Regular'}`}>Maturity</div>
                <div className={` ${classes.paidValue} ${'h3Medium'}`}>06/30/2027</div>
              </div>
            </Grid>
          </Grid>
          {/* Second Sub Section */}
          <Grid
            className={classes.loanDetailsSubSection2}
            sx={{ marginBottom: '1em' }}
          >
            <Grid
              className={classes.addressLeftPart}
              sx={{ marginLeft: '0.5em' }}
              item
              xs={5}
            >
              <div className={` ${classes.residentialEstate} ${'h2Medium'}`}>RE:Residential Real Estate</div>
              <div className={classes.occupationChip}>
                <Chip
                  text="60-R.E Res 1-4 Occ"
                  bgColor="rgba(0, 101, 255, 0.1)"
                  fontColor="#15284B"
                  width="7em"
                  height="1em"
                />
              </div>
              <div className={classes.addressPart}>
                <div>
                  <img src={locationIcon} alt="location Icon" />
                </div>
                <div className={classes.propertyAddressSection}>
                  <div className={` ${classes.propertyAddressText} ${'h2Medium'}`}>
                    Property Address:
                  </div>
                  <div className={` ${classes.streetAddressText} ${'h2Regular'}`}>
                    Street Address:
                    {' '}
                    <span className={` ${classes.streetAddressValue} ${'h2Medium'}`}>15363 Highway</span>
                  </div>
                  <div className={` ${classes.streetAddressText} ${'h2Regular'}`}>
                    Unit:
                    {' '}
                    <span className={` ${classes.streetAddressValue} ${'h2Medium'}`}>21S</span>
                  </div>
                  <div className={` ${classes.streetAddressText} ${'h2Regular'}`}>
                    City/State/ZIP:
                    {' '}
                    <span className={` ${classes.streetAddressValue} ${'h2Medium'}`}>Bogalusa, LA 70427</span>
                  </div>
                </div>
              </div>
              {/* Valuations value and date */}
              <div className={` ${classes.valuationPart} ${'h2Regular'}`}>
                <div><img src={dollarIcon} alt="location Icon" /></div>
                <div className={classes.valuationMiddlePart}>
                  <div className={` ${classes.paidText} ${'h4Regular'}`}>Valuation</div>
                  <div className={` ${classes.paidValue} ${'h1Medium'}`}>$16938.44</div>
                </div>
                <div className={classes.valuationLeftPart}>
                  <div className={` ${classes.paidText} ${'h4Regular'}`}>Date</div>
                  <div className={` ${classes.paidValue} ${'h2Medium'}`}>16/21/2021</div>
                </div>
              </div>
            </Grid>
            {/* Flood Record Chart */}
            <Grid
              className={classes.addressMiddlePart}
              item
              xs={4}
            >
              Flood Record Chart will be placed here
            </Grid>
            {/* address and valuation right part 3 */}
            <Grid
              className={classes.addressRightPart}
              item
              xs={2.8}
            >
              <div className={classes.policyNumber}>
                <div className={` ${classes.paidText} ${'h4Regular'}`}>Policy Number</div>
                <div className={` ${classes.paidValue} ${'h3Medium'}`}>6826422345</div>
              </div>
              <div className={classes.expiryDate}>
                <div className={` ${classes.paidText} ${'h4Regular'}`}>Expiry Date</div>
                <div className={` ${classes.paidValue} ${'h4Medium'}`}>16/21/2021</div>
              </div>
            </Grid>
          </Grid>
          {/* Second sub section end */}
        </Grid>
      </Grid>
    </div>
  );
}

export default LoanDetailsSection;
