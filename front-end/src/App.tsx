import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { blueGrey, amber } from '@material-ui/core/colors'
import { AuthProvider } from './contexts/Auth'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Routes from './routes';

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: amber
  }
})

function App() {
  return (
    <>
      <ToastContainer hideProgressBar />
      <AuthProvider>
        <MuiThemeProvider theme={theme}>
          <Routes />
        </MuiThemeProvider>
      </AuthProvider>


    </>
  );
}

export default App;
