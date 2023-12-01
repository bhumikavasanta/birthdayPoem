import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  // inner page header style
  header: {
    background: theme.palette.white,
    boxSizing: 'border-box',
    borderRadius: '0.25em',
  },
  topHeader: {
    borderBottom: `1.3px solid ${theme.palette.blueCobaltDark}`,
    display: 'flex',
    flexDirection: 'row',
  },
  documentIcon: {
    padding: '2.2em 0em 1.5em 1em',
  },
  loanNumber: {
    marginLeft: '1em',
    width: '35em',
    padding: '1.4em 0em 1.4em 0em',
  },
  loanNumberValue: {
    color: theme.palette.blueDefault,
  },
  uidNumberValue: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: theme.palette.blueCobaltDark,
  },
  uidNumberText: {
    color: theme.palette.grayDark3,
  },
  loanTypes: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  productTypesTextTitle: {
    color: theme.palette.grayDark3,
  },
  productTypesTextValue: {
    color: theme.palette.blueCobaltDark,
  },
  productTypes: {
    minWidth: '6em',
  },
  collateralTypes: {
    marginLeft: '2em',
    minWidth: '7em',
  },
  noteTypes: {
    marginLeft: '2em',
    minWidth: '12em',
  },
  portfolioTypes: {
    marginLeft: '2em',
    minWidth: '7em',
  },
  createdOn: {
    marginLeft: '2em',
    minWidth: '7em',
  },
  statusRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: `1px solid ${theme.palette.blueCobaltDark}`,
    borderBottom: `1px solid ${theme.palette.grayMid1}`,
    boxSizing: 'border-box',
  },
  statusLeftContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusRightContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: '1.3em',
  },
  statusText: {
    padding: '1em 0em 1em 1em',
    color: theme.palette.grayDark1,
  },
  activeIcon: {
    display: 'flex',
    alignItems: 'center',
    width: '5em',
    marginLeft: '1em',
    borderRight: `1.5px solid ${theme.palette.grayMid3}`,
  },
  floodPruneIcon: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '0.5em',
  },
  statusRightContentIcon: {
    marginRight: '0.5em',
    height: '2.4em',
  },
  envolopTitle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  envolop: {
    color: theme.palette.grayDark1,
    marginLeft: '0.5em',
  },
  thinBorderLine: {
    height: '0.06em',
    background: theme.palette.grayMid3,
  },
  buttonsAlign: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  // loan details
  responsiveLoanDetailLine: {
    width: '84.7em',
    height: '0.01em',
  },
  breadCrumb: {
    height: '2.5rem',
  },
  marginLR: {
    margin: '0 1.3125rem',
  },
  headerBorrowerSection: {
    background: 'white',
    borderRadius: '0.25rem',
  },
  headerHeight: {
    height: '9.25rem',
  },
  borrowersInfo: {
    height: '21.5rem',
  },
  notesDiv: {
    height: '22.5rem',
    width: '28rem',
    marginTop: '0.5em',
    marginLeft: '0.5em',
    background: 'white',
  },
  // borrowersInfo
  borrowersInfoGrid1: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '21.5rem',
  },
  grid1DetailsWidth: {
    width: '20rem',
  },
  blueCobaltDark: {
    color: theme.palette.blueCobaltDark,
  },
  labelStyle: {
    color: theme.palette.grayDark3,
    marginTop: '0.5rem',
  },
  chartSection: {
    margin: '1rem 0',
    height: '19.5rem',
    border: '1px solid #D4D5D8',
    borderRadius: '0.25rem',
  },
  grid3: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '21.5rem',
  },
  grid3Section: {
    width: '23rem',
    border: '1px solid #E4E6EF',
    borderRadius: '4px',
    background: '#E8F0FB',
  },
  grid3Bottom: {
    height: '9.25rem',
    background: 'white',
    borderRadius: '0.25rem',
    paddingTop: '0.5rem',
  },
  textAlign: {
    textAlign: 'center',
  },
  circleIconStyle: {
    backgroundColor: '#3C4C68',
    border: '3px solid #FFF',
    borderRadius: '50%',
    boxShadow: '0 0 2px #888',
    height: '2.5rem',
    width: '2.5rem',
    padding: '0.25rem',
    margin: '0.5rem',
  },
  circleIconStyle1: {
    backgroundColor: '#F1F3F4',
    border: '3px solid #FFF',
    boxShadow: '0 0 2px #888',
    padding: '0.5rem',
    height: '2.5rem',
    width: '2.5rem',
    margin: '0.5rem auto',
    borderRadius: '50%',
  },
  centerDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  verticalAlign: {
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  mr8: {
    marginRight: '0.5rem',
  },
  loanDetailsComplainceAndDocument: {
    maxWidth: '84.87em',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '0.5em',
    marginLR: '0 1.3125rem',
    boxSizing: 'border-box',
    overflow: 'hidden',
  },
  // compliance rule section style
  complianceRuleSection: {
    display: 'flex',
    backgroundColor: theme.palette.white,
    marginLeft: '0.5em',
    marginRight: '0.01em',
    overflow: 'scroll',
    borderRadius: '0.25em',
  },
  complianceHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '27em',
    margin: '0.5em 0em 0em 0.5em',
    padding: '0.3em 0em 0.3em 0em',
    background: theme.palette.blueLight1,
  },
  complianceHeaderLeft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0.5em 0em 0.5em 1.5em',
    color: theme.palette.blueCobaltDark,
  },
  complianceHeaderRight: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: theme.palette.blueCobaltDark,
  },
  flagIcon: {
    marginRight: '0.5em',
    marginTop: '0.5em',
  },
  settingButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: '0.8em',
    padding: '0em 0.8em 0em 0.8em',
    color: theme.palette.blueCobaltDark,
    borderRadius: '0.25em',
    border: `1.4px solid ${theme.palette.blueCobaltDark}`,
  },
  settingButtonImage: {
    marginRight: '0.5em',
    marginTop: '0.5em',
  },
  dropdown: {
    margin: '0.5em 0em 0em 0.5em',
    border: `1.4px solid ${theme.palette.grayMid3}`,
    borderRadius: '0.25em',
  },
  titleAndArrow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdownTitle: {
    color: theme.palette.grayDark2,
  },
  chipList: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '0.6em',
  },
  chipTwo: {
    marginRight: '0.5em',
  },
  chipOne: {
    marginRight: '0.5em',
  },
  expandList: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '0.5em',
    color: theme.palette.grayDark1,
  },
  expandList2: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '0.6em',
    gap: '0.5em',
    color: theme.palette.grayDark1,
  },
  docHeading: {
    color: theme.palette.grayDark2,
  },
  iconMargin: {
    marginTop: '0.2em',
  },
  // Document Section
  docSectionMainDiv: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '1em',
    gap: '0.5em',
    background: theme.palette.white,
    borderRadius: '0.25em',
    flex: 'none',
    order: 1,
    flexGrow: 0,
    marginTop: '0.5em',
  },
  missingDocumentHeaderDiv: {
    display: 'flex',
    border: '1px solid #CBCFE0',
    background: theme.palette.blueGrayLight,
    width: '100%',
    height: '2.5rem',
    justifyContent: 'space-between',
  },
  missingDocumentTitle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0.5em 0 0.5em 1em',
    gap: '0.5em',
  },
  actionDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.5em 0 0.5em 0.5em',
    gap: '0.5em',
    width: '5.31em',
  },
  missingDocumentBodyDiv: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '3.37em',
    border: `1px solid ${theme.palette.grayMid4}`,
  },
  missingTypeDiv: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0.5em 0 0.5em 1em',
    gap: '0.5em',
  },
  missingTypeUploadDiv: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0.5em 0 0.5em 1em',
    gap: '0.5em',
  },
  emailDiv: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0.5em 0.875em 0.5em 0.5em',
    justifyContent: 'flex-end',
  },
  fileNameDiv: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '28rem',
  },
  fileNameImgDiv: {
    marginLeft: '0.5em',
  },
  fileName: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '0.5em',
    marginLeft: '0.5em',
    height: '2.5rem',
    border: `1.5px solid ${theme.palette.grayMid3}`,
    borderRadius: '0.25rem',
  },
  fileNameConfirmDiv: {
    marginLeft: '0.5em',
  },
  crossIcon: {
    margin: '0em 0.5em 0em 2em',
  },
  classificationAndExtraction: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '1em',
  },
  buttonEdit: {
    display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%',
  },
  toggleButtonEdit: {
    marginLeft: '1rem',
    display: 'flex',
    flexDirection: 'row',
  },
  monitoredEdit: {
    paddingTop: '0.5rem',
    color: theme.palette.grayDark1,
  },
}));
