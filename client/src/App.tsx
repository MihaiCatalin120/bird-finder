import React from 'react';
import './App.css';
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import PageRoutes from "./pages/main";

const App = () => {

  const theme = createTheme({
		palette: {
      text: {
        primary: "#37D67A",
        secondary: "#b8e986"
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
