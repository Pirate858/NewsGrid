import { createMuiTheme } from '@material-ui/core/styles';

const ngRed = '#c72727';
const ngOrange = '#f99500';
const ngLight = '#f3f3f3';
const ngDark = '#333';
const ngWhite = '#fff';
const arcGrey = '#868686';

export default createMuiTheme({
  palette: {
    common: {
      dark: `${ngDark}`,
      light: `${ngLight}`,
    },
    primary: {
      main: `${ngRed}`,
    },
    secondary: {
      main: `${ngOrange}`,
    },
    text: {
      inverted: `${ngWhite}`,
    },
  },
  typography: {
    h3: {
      fontFamily: 'Staatliches',
      fontWeight: 700,
      fontSize: '1.75rem',
    },
    h4: {
      fontFamily: 'Staatliches',
      fontWeight: 700,
      fontSize: '1.5rem',
    },
    h5: {
      fontFamily: 'Staatliches',
      fontWeight: 700,
      fontSize: '1.25rem',
    },
    body1: {
      fontFamily: 'Lato',
      fontSize: '1rem',
      fontWeight: 300,
    },
    body2: {
      fontFamily: 'Lato',
      fontSize: '0.75rem',
      fontWeight: 300,
    },
    subtitle2: {
      fontFamily: 'Lato',
      fontSize: '1rem',
      fontWeight: 300,
      color: `${arcGrey}`,
    },
  },
  props: {
    MuiIconButton: {
      disableRipple: true,
    },
  },
});
