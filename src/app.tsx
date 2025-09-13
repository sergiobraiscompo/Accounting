import React from "react";
import { Router } from "@/core/router";
import { ProfileProvider } from "@/core/profile";

export const App: React.FC = () => {
  return (
    <ProfileProvider>
      <Router />
    </ProfileProvider>
  );
};
