import React from "react";
import Section from "../UI/Section";
import MembershipCard from "./MembershipCard";
import classes from "./MemebrshipSection.module.css";
const MemebrshipSection = () => {
  return (
    <Section>
      <div className={classes.title}>
        <h1>Membership</h1>
      </div>
      <div className={classes.wrapper}>
        <MembershipCard
          title="Join for Free"
          paragraph="Reach your fitness goals or maintain your healthy lifestyle with professional training and support from a positive and active online community."
          list={[
            "~600 Full-Length Workout Videos",
            "Customizable Calendar",
            "Healthy Recipes",
            "Health and Fitness Articles",
            "Positive and Supportive Online Community",
            "No Credit Card Needed",
          ]}
          backGround="#232532"
        />
        <MembershipCard
          title="WO Plus"
          paragraph="WO Plus includes everything you get with a free membership and adds brand new convenience features, fitness tools, and unique content."
          list={[
            "Ads-Free Website and Videos",
            "Surprise Me Workout Selection Tool",
            "Statistics for Your Activities",
            "Enter and Track Custom Workouts",
            "FB Plus Exclusive Workouts",
            "Trackers to See Your Progress",
            "FB Plus Content and Challenges",
            "Video Tags",
            "FB Plus Routines",
            "Rest Day Complete",
          ]}
          backGround="#323443"
        />
      </div>
    </Section>
  );
};

export default MemebrshipSection;
