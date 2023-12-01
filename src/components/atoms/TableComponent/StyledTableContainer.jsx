import { TableContainer } from '@mui/material';
import { withStyles } from '@mui/styles';

export const StyledTableContainer = withStyles((theme) => ({
  root: {
    display: 'block',
    overflow: 'auto',
    border: `1px solid ${theme.palette.grayMid4}`,
  },
}))(TableContainer);
