import { createBrowserRouter } from "react-router";
import Home from "../layouts/Home/Home";
import HomePage from "../pages/HomePage";
import CategoryNews from "../pages/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
      },
    ],
  },
  {
    path: "/auth",
    element: <h2>Auth Layout</h2>,
  },
  {
    path: "/news",
    element: <h2>News Page</h2>,
  },
  {
    path: "/*",
    element: <h2>Not Found</h2>,
  },
]);

export default router;
