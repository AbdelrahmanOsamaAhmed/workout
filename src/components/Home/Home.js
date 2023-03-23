import React, { Fragment } from "react";
import Article from "./ArticleSection/Article";
import MainSection from "../MainSection/MainSection";
import WhereToStart from "../WhereToStart/WhereToStart";
import article1 from "../../assets/article1.png";
import article2 from "../../assets/article2.png";
import MemebrshipSection from "../MembershipSection/MemebrshipSection";

const Home = () => {
  return (
    <Fragment>
      <MainSection />
      <WhereToStart />
      <Article title="Work out at home for free." img={article1} />
      <Article
        title="Get more with low-cost training programs and advanced features."
        textRight={true}
        img={article2}
      />
      <MemebrshipSection />
    </Fragment>
  );
};

export default Home;
