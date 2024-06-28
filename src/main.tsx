import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import SettingsContainer from './components/SettingsContainer'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { settingsRoutes } from './components/SettingsConfig';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SettingsContainer />,
    errorElement: <h1>Custom Error Page</h1>,
    children: settingsRoutes
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
