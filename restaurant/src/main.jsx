import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Reviews from "./pages/Reviews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/reviews",
    element: <Reviews />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
