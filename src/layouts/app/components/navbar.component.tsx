import React from "react";
import { Link } from "react-router-dom";
import { appRoutes, routesPrefixes } from "@/core/router";
import classes from "./navbar.component.module.css";
import { useLocation } from "react-router-dom";

export const NavbarComponent: React.FC = () => {
  const { pathname } = useLocation();
  
  return (
    <nav className={classes.navbar}>
      <ul className={classes.list}>
        <li
          className={
            pathname.startsWith(routesPrefixes.root)
              ? classes.selected
              : ""
          }
        >
          <Link to={appRoutes.root}>Home</Link>
        </li>
        <li>
          <Link to={appRoutes.wishlist}>Home</Link>
        </li>
        <li
          className={
            pathname.startsWith(routesPrefixes.shops)
              ? classes.selected
              : ""
          }
        >
          <Link to={`${appRoutes.shops}`}>Shops</Link>
        </li>
        <li
          className={
            pathname.startsWith(routesPrefixes.categories) ? classes.selected : ""
          }
        >
          <Link to={appRoutes.categories}>Categories</Link>
        </li>
      </ul>
    </nav>
  );
};
