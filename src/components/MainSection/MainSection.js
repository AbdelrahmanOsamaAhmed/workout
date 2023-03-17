import React from "react";
import Section from "../UI/Section";
import classes from "./MainSection.module.css";
import mainPic from "../../assets/main-pic.png";
import {
  faCirclePlay,
  faPersonRunning,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MainSection = () => {
  return (
    <Section>
      <div className={classes.wrapper}>
        <div className={classes["main-text"]}>
          <div className={classes.workOut}>
            <h1>
              WORKOUT
              <br />
              WITH ME
            </h1>
          </div>
          <p>
            A huge selection of health and fitness content, healthy recipes and
            <br />
            transformation stories to help you get fit and stay fit!
          </p>
        </div>
        <div className={classes["main-pic"]}>
          <img src={mainPic} alt="working man" />
          <div className={classes.videoToturial}>
            <FontAwesomeIcon
              className={classes.videoIcon}
              icon={faCirclePlay}
            />
            <div>
              <h3>350+</h3>
              <p>Video Toturial</p>
            </div>
          </div>
          <div className={classes.kilometer}>
            <FontAwesomeIcon
              className={classes.personIcon}
              icon={faPersonRunning}
            />
            <div>
              <h1>
                4,95<span>km</span>
              </h1>
            </div>
          </div>
          <div className={classes.workoutVideo}>
            <div>
              <h1>500+</h1>
              <p>Free Workout Toturial</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default MainSection;
