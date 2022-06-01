import React from 'react';
import './App.css';
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import PageRoutes from "./pages/main";
import { green } from '@mui/material/colors';
import '@fontsource/montserrat';

const App = () => {

  const theme = createTheme({
		palette: {
      primary: {
        main: green[500],
        contrastText: '#fff'
      },
      secondary: {
        main: '#fff'
      }
		}
	});

  return <ThemeProvider theme={theme}>
    <BrowserRouter>
      <PageRoutes />
    </BrowserRouter>
  </ThemeProvider>;

}

export default App;
