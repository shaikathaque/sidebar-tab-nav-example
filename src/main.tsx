import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import SettingsContainer from "./components/SettingsContainer";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { settingsRoutes } from "./components/SettingsConfig";
import { Toaster } from "./components/ui/toaster";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SettingsContainer />,
    errorElement: <h1>Custom Error Page</h1>,
    children: settingsRoutes,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Toaster />
    <RouterProvider router={router} />
  </React.StrictMode>,
);
