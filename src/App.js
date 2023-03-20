import "./App.css";
import Article from "./components/ArticleSection/Article";
import MainSection from "./components/MainSection/MainSection";
import article1 from "./assets/article1.png";
import article2 from "./assets/article2.png";
function App() {
  return (
    <>
      <MainSection />
      <Article title="Work out at home for free." img={article1} />
      <Article
        title="Get more with low-cost training programs and advanced features."
        textRight={true}
        img={article2}
      />
    </>
  );
}

export default App;
