import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import StepContext from "./StepContext.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          width: '500px',
        },
      },
    },
    MuiButton: {
      styleOverrides:{
        root:{
          width: '150px',
          margin: '0.7rem'
        }
      }
    }
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <StepContext>
        <App />
      </StepContext>
    </ThemeProvider>
  </StrictMode>
);
