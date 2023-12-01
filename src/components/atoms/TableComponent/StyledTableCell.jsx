import { TableCell } from '@mui/material';
import { withStyles } from '@mui/styles';

export const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: `${theme.palette.blueGrayLight} !important`,
    color: theme.palette.grayDark1,
    maxHeight: '2.5em',
    padding: '0.2rem !important',
    paddingLeft: '0.5rem',
    whiteSpace: 'nowrap',
    fontFamily: 'gothambook, sans-serif',
    fontSize: '0.75rem',
    lineHeight: '1rem',
    fontWeight: 400,
    '&:first-child': {
      paddingLeft: '1.25rem',
    },
  },
  body: {
    color: theme.palette.grayDark1,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '0.875rem',
    lineHeight: '1.1875rem',
    letterSpacing: '0.4px',
    height: '2.5rem',
    backgroundClip: 'padding-box',
    padding: '0.375rem !important',
    '&:first-child': {
      paddingLeft: '1.25rem',
    },
  },
}))(TableCell);
