import { createTheme } from '@mui/material/styles';
import palette from './palette';

const theme = createTheme({
  palette,
  typography: {
    fontFamily: [
      'gothambook',
    ].join(','),
  },
});

export default theme;
