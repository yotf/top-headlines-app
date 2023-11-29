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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DetailsPage from "./pages/DetailsPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/top-news",
        element: <HomePage />,
      },
      { path: "/top-news/detail", element: <DetailsPage /> },
      { path: "*", element: <Navigate to="/top-news" replace /> },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
