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
              : classes.navItem
          }
        >
          <Link to={appRoutes.root}>Home</Link>
        </li>

        <li
          className={
            pathname.startsWith(routesPrefixes.shops)
              ? classes.selected
              : classes.navItem
          }
        >
          <Link to={`${appRoutes.shops}`}>Shops</Link>
        </li>

        <li
          className={
            pathname.startsWith(routesPrefixes.movements)
              ? classes.selected
              : classes.navItem
          }
        >
          <Link to={appRoutes.movements}>Movements</Link>
        </li>

        <li
          className={
            pathname.startsWith(routesPrefixes.tickets)
              ? classes.selected
              : classes.navItem
          }
        >
          <Link to={appRoutes.tickets}>Tickets</Link>
        </li>
      </ul>
    </nav>
  );
};
