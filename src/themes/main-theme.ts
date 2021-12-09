import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fa4616',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          borderRadius: '2px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          // fontSize: '1rem',
        },
      },
    },
  },
});

export default theme;
