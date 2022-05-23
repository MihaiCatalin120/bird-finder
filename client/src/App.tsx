import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import PageRoutes from "./pages/main";

const App = () => {

  const theme = createTheme({
		palette: {
      text: {
        primary: "#fff",
        secondary: "#ddd"
      },
      background: { paper: "#000" }
		}
	});

  return <ThemeProvider theme={theme}>
    <BrowserRouter>
      <PageRoutes />
    </BrowserRouter>
  </ThemeProvider>;

}

export default App;
