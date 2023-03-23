import "./App.css";
import Article from "./components/ArticleSection/Article";
import MainSection from "./components/MainSection/MainSection";
import article1 from "./assets/article1.png";
import article2 from "./assets/article2.png";
import WhereToStart from "./components/WhereToStart/WhereToStart";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MemebrshipSection from "./components/MembershipSection/MemebrshipSection";
import ErrorComponent from "./components/ErrorComponent/ErrorComponent";
import Root from "./components/RootElement/Root";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorComponent />,
      children: [
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
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
