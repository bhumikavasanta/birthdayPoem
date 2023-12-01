import React from 'react';
import { Grid } from '@mui/material';
import TickedIcon from '../../../assets/ticked.svg';
import DocumentTickedIcon from '../../../assets/documentTicked.svg';
import DownloadIcon from '../../../assets/download.svg';
import { useStyles } from '../Styles';

export default function BorrowersInfo() {
  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <Grid item xs={3.25}>
          {/* grid1 */}
          <div className={classes.borrowersInfoGrid1}>

            <div className={classes.grid1DetailsWidth}>
              <div className={`${classes.labelStyle} ${'h3Regular'}`}>Borrower Name</div>
              <div className={`${classes.blueCobaltDark} ${'h3Medium'}`}>Cameron Williamson</div>
              <div className={`${classes.labelStyle} ${'h3Regular'}`}>Collateral Description</div>
              <div className={`${classes.blueCobaltDark} ${'h3Medium'}`}>68 Cambridge St. Rose dale, NY11422</div>
              <div className={`${classes.labelStyle} ${'h3Regular'}`}>Email ID</div>
              <div className={`${classes.blueCobaltDark} ${'h3Medium'}`}>cameron.williamson@gmail.com</div>
              <div className={`${classes.labelStyle} ${'h3Regular'}`}>Phone Numer</div>
              <div className={`${classes.blueCobaltDark} ${'h3Medium'}`}>+1 212-456-7890</div>
            </div>

          </div>
        </Grid>

        <Grid item xs={5}>
          {/* grid2 */}
          <div className={classes.chartSection}>
            Fema Chart
          </div>
        </Grid>

        <Grid item xs={3.75}>
          {/* grid3 */}
          <div className={classes.grid3}>
            <div className={classes.grid3Section}>
              {/* top section */}
              <div className={classes.centerDiv}>
                <img
                  src={TickedIcon}
                  alt="ticked"
                  className={classes.circleIconStyle}
                />
                <div className="h2Medium">83%</div>
                <div className="h3Regular">&nbsp;Compliant</div>
              </div>

              {/* bottom section */}
              <Grid container className={classes.grid3Bottom}>
                <Grid item xs={6} className={classes.textAlign}>
                  <div className={classes.circleIconStyle1}>
                    <img src={DocumentTickedIcon} alt="documentTicked" />
                  </div>
                  <div className="h2Medium">4</div>
                  <div className="h3Regular">Insurance Coverage</div>
                </Grid>

                <Grid item xs={6} className={classes.textAlign}>
                  <div className={classes.circleIconStyle1}>
                    <img src={DocumentTickedIcon} alt="documentTicked" />
                  </div>
                  <div className="h2Medium">4</div>
                  <div className="h3Regular">Total Documents</div>
                  <div className={classes.verticalAlign}>
                    <img src={DownloadIcon} alt="Download" className={classes.mr8} />
                    <div className={`${classes.blueCobaltDark} ${'h4Regular'}`}>Download</div>
                  </div>

                </Grid>

              </Grid>
            </div>
          </div>

        </Grid>

      </Grid>
    </div>
  );
}
