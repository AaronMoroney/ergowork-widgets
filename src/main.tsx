import * as React from "react";
import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider"
import CssBaseline from '@mui/material/CssBaseline';
import { createRoot } from "react-dom/client";
import { App } from './app';
import { store } from './shared/store/store'
import { Provider } from 'react-redux'


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={darkTheme}>
            <CssBaseline>
              <App/>
            </CssBaseline>
        </ThemeProvider> 
      </Provider>
    </React.StrictMode>
  );
}