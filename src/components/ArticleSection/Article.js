import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Section from "../UI/Section";
import classes from "./Article.module.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import article1 from "../../assets/article1.png";
import useWidthAndHeight from "../../hooks/useWidthAndHeight";
const Article = ({ textRight, title, img }) => {
  const [width] = useWidthAndHeight();
  if (width > 1500 && textRight) {
    return (
      <Section>
        <div className={classes.wrapper}>
          <img src={img} alt="article picture" />
          <div className={classes.text}>
            <h1>{title}</h1>
            <p>
              We believe fitness should be accessible to everyone, everywhere,
              regardless of income or access to a gym. With hundreds of
              professional workouts, healthy recipes and informative articles,
              as well as one of the most positive communities on the web, you’ll
              have everything you need to reach your personal fitness goals –
              for free!
            </p>
            <button className={classes["see-more"]}>
              See More{" "}
              <FontAwesomeIcon style={{ color: "white" }} icon={faArrowRight} />
            </button>
          </div>
        </div>
      </Section>
    );
  }
  return (
    <Section>
      <div className={classes.wrapper}>
        <div className={classes.text}>
          <h1>Work out at home for free.</h1>
          <p>
            We believe fitness should be accessible to everyone, everywhere,
            regardless of income or access to a gym. With hundreds of
            professional workouts, healthy recipes and informative articles, as
            well as one of the most positive communities on the web, you’ll have
            everything you need to reach your personal fitness goals – for free!
          </p>
          <button className={classes["see-more"]}>
            See More{" "}
            <FontAwesomeIcon style={{ color: "white" }} icon={faArrowRight} />
          </button>
        </div>
        <img src={img} alt="article picture" />
      </div>
    </Section>
  );
};

export default Article;
