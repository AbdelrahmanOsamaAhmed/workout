import "./App.css";

import WhereToStart from "./components/WhereToStart/WhereToStart";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorComponent from "./components/ErrorComponent/ErrorComponent";
import Root from "./components/RootElement/Root";
import Home from "./components/Home/Home";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorComponent />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        { path: "/start", element: <WhereToStart /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
