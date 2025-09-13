import React from "react";
import { Router } from "@/core/router";
import { ProfileProvider } from "@/core/profile";
import { ThemeProvider } from "@mui/material";
import { theme } from "./main-style";

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <ProfileProvider>
        <Router />
      </ProfileProvider>
    </ThemeProvider>
  );
};
