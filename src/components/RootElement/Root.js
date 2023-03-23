import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";

const Root = () => {
  return (
    <Fragment>
      <NavigationBar />
      <Outlet />
    </Fragment>
  );
};

export default Root;
