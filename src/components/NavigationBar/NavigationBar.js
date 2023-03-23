import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import useWidthAndHeight from "../../hooks/useWidthAndHeight";
import classes from "./NavigationBar.module.css";

const NavigationBar = () => {
  const [navbarColor, setNavbarColor] = useState(false);
  const [navbarItems, setNavbarItems] = useState(false);
  const [width] = useWidthAndHeight();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 56) {
        setNavbarColor(true);
      } else setNavbarColor(false);
    });
  });
  return (
    <Fragment>
      <nav
        className={classes.navbar}
        style={{
          backgroundColor: !navbarColor || navbarItems ? " #171717" : "#262525",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: navbarItems ? "20px" : "0",
          }}
        >
          <NavLink to="/" className={classes.logo}>
            WORKOUT
          </NavLink>
          {width < 870 && (
            <FontAwesomeIcon
              style={{ color: "#fafaf9", height: "25px" }}
              onClick={() => setNavbarItems(!navbarItems)}
              icon={faBars}
            />
          )}
        </div>
        {(navbarItems || width > 870) && (
          <ul className={width > 870 ? classes.ul : classes.mobile}>
            <NavLink to='/workout'>WORKOUTS</NavLink>
            <NavLink to='/programs'>PROGRAMS</NavLink>
            <NavLink to='/healthy-living'>HEALTHY LIVING</NavLink>
            <NavLink to='/community'>COMMUNITY</NavLink>
            <NavLink to='/about'>ABOUT</NavLink>
            <NavLink to='/store'>STORE</NavLink>
          </ul>
        )}
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
