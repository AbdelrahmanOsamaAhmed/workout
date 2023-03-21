import React from "react";
import { Link } from "react-router-dom";
import classes from "./StartLink.module.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StartLink = ({ to, title, paragraph, backGroundColor }) => {
  return (
    <Link
      style={{
        backgroundColor: backGroundColor,
        textDecoration: "none",
      }}
      to={to}
      className={classes.link}
    >
      <div>
        <h3>{title}</h3>
        <p>
          {paragraph}
          <FontAwesomeIcon icon={faArrowRight} className={classes.icon} />
        </p>
      </div>
    </Link>
  );
};

export default StartLink;
