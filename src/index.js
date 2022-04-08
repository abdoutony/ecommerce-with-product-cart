import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createMuiTheme, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
const theme = createTheme({
  palette: {
    primary: {
      main: "#000E1C"
    },
    secondary: {
      main: "#ED6C02"
    },
    white: {
      main: "#ffffff"
    }
  }
});

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
