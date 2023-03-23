import React from "react";
import Section from "../UI/Section";
import "./ErrorComponent.css";
import NavigationBar from "../NavigationBar/NavigationBar";

const ErrorComponent = () => {
  return (
    <Section>
      <NavigationBar />
      <h1 style={{ textAlign: "center", margin: "200px 0 100px" }}>
        Cooming soon...
        <br />
        Keep Exercising
      </h1>
      <div
        aria-label="Orange and tan hamster running in a metal wheel"
        role="img"
        class="wheel-and-hamster"
        style={{ margin: "0 auto" }}
      >
        <div class="wheel"></div>
        <div class="hamster">
          <div class="hamster__body">
            <div class="hamster__head">
              <div class="hamster__ear"></div>
              <div class="hamster__eye"></div>
              <div class="hamster__nose"></div>
            </div>
            <div class="hamster__limb hamster__limb--fr"></div>
            <div class="hamster__limb hamster__limb--fl"></div>
            <div class="hamster__limb hamster__limb--br"></div>
            <div class="hamster__limb hamster__limb--bl"></div>
            <div class="hamster__tail"></div>
          </div>
        </div>
        <div class="spoke"></div>
      </div>
    </Section>
  );
};

export default ErrorComponent;
