import {
  blue, green, grey, orange, red,
} from '@material-ui/core/colors';

import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgba(3,169,244,1)',
      light: blue[200],
      dark: blue[900],
      contrastText: 'rgba(255,255,255,1)',
    },
    secondary: {
      main: 'rgba(245,245,245,1)',
      light: grey[100],
      dark: grey[700],
      contrastText: 'rgba(3,169,244,1)',
    },
    success: {
      main: 'rgba(76,189,2,1)',
      light: green[500],
      dark: green[500],
      contrastText: 'white',
    },
    warning: {
      main: 'rgba(255,187,87,1)',
      light: orange[700],
      dark: orange[700],
      contrastText: 'white',
    },
    error: {
      main: 'rgba(255,79,79,1)',
      light: red[700],
      dark: red[700],
      contrastText: 'white',
    },
    info: {
      main: 'rgba(97,97,97,1)',
      light: grey[100],
      dark: grey[700],
      contrastText: 'white',
    },
  },
  typography: {
    fontFamily: 'Helvetica',
    fontWeightMedium: 500,
    h6: {
      color: '#ffffff',
      fontFamily: 'Helvetica',
      fontSize: '0.875rem',
      letterSpacing: 0,
      lineHeight: '26px',
    },
    button: {
      color: 'rgba(255,255,255,1)',
      fontFamily: 'Helvetica',
      fontSize: '14px',
      fontWeight: 500,
      letterSpacing: 0,
      lineHeight: '26px',
      textAlign: 'center',
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        // fontFamily: 'DINNextLTProMedium',
        // fontSize: '10px',
        // color: 'rgba(127,127,127,1)',
        // fontWeight: 'normal',
        // letterSpacing: '1.25px',
        // lineHeight: '13px'
      },
    },
  },
});
theme.spacing(2); // = 8 * 2

export default theme;
