import { createBrowserRouter } from "react-router";

import HomePage from "../pages/HomePage";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import NewsDetails from "../pages/newsDetails";
import Home from "../layouts/Home";
import PrivateRoutes from "./PrivateRoutes";
import Loader from "../components/Loader/Loader";

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
        // loader: () => fetch("/news.json"),
        hydrateFallbackElement: <Loader></Loader>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/newsDetails/:id",
    element: (
      <PrivateRoutes>
        <NewsDetails></NewsDetails>
      </PrivateRoutes>
    ),
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <Loader></Loader>,
  },
  {
    path: "/*",
    element: <h2>Not Found</h2>,
  },
]);

export default router;
