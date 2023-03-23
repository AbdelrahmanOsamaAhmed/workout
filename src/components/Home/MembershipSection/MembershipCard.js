import React from "react";
import classes from "./MembershipCard.module.css";
const MembershipCard = ({ title, paragraph, list, backGround }) => {
  return (
    <div className={classes.card} style={{ backgroundColor: backGround }}>
      <h1>{title}</h1>
      <p>{paragraph}</p>
      <ul>
        {list.map((element, idx) => (
          <li key={idx}>{element}</li>
        ))}
      </ul>
    </div>
  );
};

export default MembershipCard;
