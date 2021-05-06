import { createMuiTheme } from '@material-ui/core/styles';

const CovidBlue = '#0B72B9'
const CovidOrange = '#FFBA60'

export default createMuiTheme({
  palette: {
    common: {
      blue: `${CovidBlue}`,
      orange: `${CovidOrange}`
    },
    primary: {
      main: `${CovidBlue}`
    },
    secondary: {
      main: `${CovidOrange}`
    }
  },
  typography: {
    tab: {
      fontFamily: "Railway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
    links: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
      color: 'white'
    }
  }
});
