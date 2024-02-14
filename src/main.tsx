import * as React from "react";
import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider"
import CssBaseline from '@mui/material/CssBaseline';
import { createRoot } from "react-dom/client";
import { App } from './app';
// import { ThemeProvider, createTheme } from '@mui/material/styles';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(
    <React.StrictMode>
       <ThemeProvider theme={darkTheme}>
          <CssBaseline>
            <App/>
          </CssBaseline>
       </ThemeProvider> 
    </React.StrictMode>
  );
}