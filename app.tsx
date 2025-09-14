import React from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "./main-style";

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>

    </ThemeProvider>
  );
};
