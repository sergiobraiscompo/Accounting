import React from "react";
import { ThemeProvider } from "@mui/material";
import HomeComponent, { theme } from "./main-page-style";

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <HomeComponent />
    </ThemeProvider>
  );
};
