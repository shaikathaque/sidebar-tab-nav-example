import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import SettingsContainer from './components/SettingsContainer'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import GlobalSettings from './components/SettingsContent/Endpoints/GlobalSettings';
import Authorization from './components/SettingsContent/Endpoints/Authorization';
import Token from './components/SettingsContent/Endpoints/Token';
import General from './components/SettingsContent/Endpoints/General';
import AccessToken from './components/SettingsContent/TokensAndClaims/AccessToken';
import Claims from './components/SettingsContent/TokensAndClaims/Claims';

const settingsRoutes = [
  {
    path: "endpoints",
    children: [
      {
        path: "globalSettings",
        element: <GlobalSettings />,
      },
      {
        path: "authorization",
        element: <Authorization />,
      },
      {
        path: "token",
        element: <Token />,
      },
      {
        path: "general",
        element: <General />,
      }
    ]
  },
  {
    path: "tokensAndClaims",
    children: [
      {
        path: "accessToken",
        element: <AccessToken />,
      },
      {
        path: "claims",
        element: <Claims />,
      },
    ]
  }
]

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
