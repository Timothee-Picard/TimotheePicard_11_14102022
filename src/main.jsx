import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import "./index.css";
import Home from "./pages/home";
import ErrorPage from "./error-page";
import Logement from "./pages/housing";
import About from "./pages/about";
import Layout from "./components/layout"
import './App.scss';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/logement/:logementId",
        element: <Logement />,
      },
      {
        path: "/a-propos",
        element: <About />,
      },
      {
        path: "/404",
        element: <ErrorPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);