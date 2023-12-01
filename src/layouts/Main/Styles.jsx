import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  // sidebar
  sidebar: {
    background: theme.palette.blueCobaltDark,
    color: theme.palette.white,
    minHeight: '100vh',
  },
  main: {
    width: '100%',
    padding: '1.25rem',
  },
  topSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: '1.25rem',
    marginBottom: '1.5rem',
  },
  bars: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    height: '2.5rem',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.white,
    textDecoration: 'none',
    marginLeft: '0.7rem',
    marginRight: '0.7rem',
    marginBottom: '1.5rem',
    gap: '1rem',
    fontSize: '0.875rem',
    lineHeight: '1.5rem',
    fontWeight: '400',
    transition: 'transform 0.5s',
    '&:hover': {
      background: '#395DAB',
      border: `1px solid ${theme.palette.blueCobaltLight}`,
      borderRadius: '0.25rem',
    },
  },
  activeBtn: {
    background: theme.palette.blueCobaltMid,
    border: `1px solid ${theme.palette.blueCobaltLight}`,
    borderRadius: '0.25rem',
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.white,
    textDecoration: 'none',
    marginLeft: '0.7rem',
    marginRight: '0.7rem',
    marginBottom: '1.5rem',
    gap: '1rem',
    fontSize: '0.875rem',
    lineHeight: '1.5rem',
    fontWeight: '400',
  },
  expandDrawerIcon: {
    display: 'flex',
    alignItems: 'center',
    height: '2.5rem',
  },
  collapseDrawerIcon: {
    display: 'flex',
    alignItems: 'center',
    height: '2.5rem',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  // main
  content: {
    background: '#F5F5F5',
    // height: 'calc(100vh - 56px)',
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  flex: {
    display: 'flex',
  },
  // navbar
  navbar: {
    display: 'flex',
    alignItems: 'center',
    height: '3.5rem',
  },
  leftNav: {
    flexGrow: '1',
    marginLeft: '2.5rem',
  },
  alignCenter: {
    display: 'flex',
    alignItems: 'center',
  },
  rightIcons: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    marginRight: '1.25rem',
  },
}));
