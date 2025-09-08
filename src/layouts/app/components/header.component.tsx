import React from "react";
import classes from "./header.component.module.css";
import logoHeader from "/assets/logo_header_white.svg";

export const HeaderComponent: React.FC = () => {
  return (
    <header className={classes.header}>
      <img className={classes.headerLogo} src={logoHeader} />
    </header>
  );
};
