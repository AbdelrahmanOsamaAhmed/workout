import React from "react";
import Section from "../UI/Section";
import classes from "./WhereToStart.module.css";

import StartLink from "./StartLink";

const WhereToStart = () => {
  return (
    <Section>
      <div className={classes.wrapper}>
        <h1>Not sure where to start?</h1>
        <p style={{ textAlign: "center" }}>
          Programs offer day-to-day guidance on an interactive calendar to keep
          you on track.
        </p>
        <div className={classes.links}>
          <StartLink
            title="Workout Videos"
            paragraph="Access to hundreds of free, full-length workout videos."
            to="/"
            backGroundColor="#323443"
          ></StartLink>
          <StartLink
            title="Workout Programs"
            paragraph="Affordable and effective workout programs."
            to="/"
            backGroundColor="#232532"
          ></StartLink>
          <StartLink
            title="Meal Plans"
            paragraph="Plans built with registered dietitians and nutritionists. "
            to="/"
            backGroundColor="#323443"
          ></StartLink>
          <StartLink
            title="WO Plus ALL ACCESS"
            paragraph="Add powerful features to your membership. "
            to="/"
            backGroundColor="#4F5261"
          ></StartLink>
        </div>
      </div>
    </Section>
  );
};

export default WhereToStart;
