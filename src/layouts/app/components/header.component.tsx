import React from "react";
import logoHeader from "/assets/logo_header_white.svg";
import { CardHeader, Container } from "@mui/material";
import { HeaderStyle } from "./header.component.module";

export const HeaderComponent: React.FC = () => {
  return (
    <Container sx={HeaderStyle}/>
  );
};
