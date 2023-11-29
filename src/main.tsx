import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import HomePage from "./pages/HomePage";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/top-news", element: <HomePage /> },
      { path: "*", element: <Navigate to="/top-news" replace /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
