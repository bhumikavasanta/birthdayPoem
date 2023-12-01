import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  loanDetailsSectionRes: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
  },
  loanDetailsSection: {
    display: 'grid',
    background: theme.palette.white,
    width: '100%',
    // border: `1px solid ${theme.palette.grayMid1}`,
    borderRadius: '0.25em',
    boxSizing: 'border-box',
  },
  loanDetailsTitle: {
    display: 'grid',
    background: theme.palette.blueLight1,
    color: theme.palette.blueCobaltDark,
    margin: '1em 1em 0em 1em',
  },
  loanDetailsSubSection1: {
    background: theme.palette.white,
    border: `1px solid ${theme.palette.grayMid3}`,
    borderRadius: '0.25em',
    margin: '0.5em 1em 0em 1em',
  },
  loanDetailsSubSection2: {
    display: 'flex',
    flexDirection: 'row',
    background: theme.palette.white,
    border: `1px solid ${theme.palette.grayMid3}`,
    borderRadius: '0.25em',
    margin: '0.5em 1em 0em 1em',
    paddingTop: '0.5em',
  },
  occupationChip: {
    marginTop: '0.5em',
  },
  commercialLeftRightData: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressBar: {
    marginTop: '0.5em',
  },
  commercialLeftSubData: {
    padding: '0.5em 0em 0.5em 0.5em',
  },
  commercialRightSubData: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: '1.8em',
  },
  commercialrightChip: {
    marginTop: '1.7em',
    marginLeft: '0.5em',
  },
  commercialValue: {
    color: theme.palette.grayDark1,
  },
  noteTypeText: {
    color: theme.palette.grayDark2,
  },
  amountSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '0.5em',
    marginBottom: '0.8em',
  },
  amountSection2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  principalAndIssuedRes: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  paidText: {
    color: theme.palette.grayDark2,
  },
  paidAndRemaining: {
    padding: '0.5em 0em 0.5em 0em',
  },
  principalAmt: {
    alignItems: 'center',
    padding: '0.5em 0em 0.5em 0.5em',
    marginLeft: '0.2em',
    marginTop: '0.68em',
    height: '3.5em',
    background: theme.palette.blueLight3,
    border: `1px solid ${theme.palette.grayMid3}`,
    borderRadius: '0.25em',
  },
  principalText: {
    color: theme.palette.blueDefault,
    marginRight: '5em',
  },
  issuedDate: {
    padding: '0.5em 0em 0.5em 0.5em',
    marginLeft: '0.5em',
    width: '5em',
  },
  termPeriod: {
    padding: '0.5em 0em 0.5em 0em',
  },
  termText: {
    color: theme.palette.blueDefault,
  },
  thinLine: {
    width: '1em',
    height: '0.1em',
    marginLeft: '0.2em',
    marginTop: '1em',
    background: theme.palette.grayMid3,
  },
  maturitySection: {
    padding: '0.5em 0em 0.5em 0em',
    marginLeft: '0.5em',
  },
  paidAndRemainingAmt: {
    display: 'flex',
    flexDirection: 'row',
  },
  remainingAmt: {
    marginLeft: '1.5em',
  },
  addressMiddlePart: {
    marginLeft: '0.5em',
    width: '15em',
  },
  addressRightPart: {
    marginLeft: '0.5em',
  },
  policyNumber: {
    marginTop: '3em',
    marginRight: '2em',
  },
  expiryDate: {
    marginTop: '1.5em',
  },
  addressPart: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '1em',
  },
  propertyAddressSection: {
    marginLeft: '0.5em',
  },
  propertyAddressText: {
    color: theme.palette.blueDefault,
  },
  streetAddressText: {
    color: theme.palette.grayDark2,
    marginTop: '0.2em',
  },
  streetAddressValue: {
    color: theme.palette.grayDark1,
  },
  valuationPart: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '1.5em',
    marginBottom: '1em',
  },
  valuationMiddlePart: {
    marginLeft: '0.5em',
  },
  valuationLeftPart: {
    marginLeft: '1.5em',
  },
  makeResponsive: {
    lineHeight: '1px',
  },
}));
