import React from "react";
import ReactDOM from "react-dom/client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./index.css";
import SettingsContainer from "./components/SettingsContainer";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { settingsRoutes } from "./components/SettingsConfig";
import { Toaster } from "./components/ui/toaster";
import TableExample from "./components/TableExample";

// Create a client
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <SettingsContainer />,
    errorElement: <h1>Custom Error Page</h1>,
    children: settingsRoutes,
  },
  {
    path: "/test",
    element: <TableExample />,
    errorElement: <h1>Custom Error Page</h1>,
  },
]);

// https://mswjs.io/docs/integrations/browser/#conditionally-enable-mocking
async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const { worker } = await import("./mocks/browser");

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}
enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </React.StrictMode>,
  );
});
