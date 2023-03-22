import "./App.css";
import Article from "./components/ArticleSection/Article";
import MainSection from "./components/MainSection/MainSection";
import article1 from "./assets/article1.png";
import article2 from "./assets/article2.png";
import WhereToStart from "./components/WhereToStart/WhereToStart";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import MembershipCard from "./components/MembershipSection/MembershipCard";
import MemebrshipSection from "./components/MembershipSection/MemebrshipSection";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <MainSection />
          <WhereToStart />
          <Article title="Work out at home for free." img={article1} />
          <Article
            title="Get more with low-cost training programs and advanced features."
            textRight={true}
            img={article2}
          />
          <MemebrshipSection />
        </>
      ),
    },
    { path: "/start", element: <WhereToStart /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
