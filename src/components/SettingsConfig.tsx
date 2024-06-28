import Authorization from "./SettingsContent/Endpoints/Authorization";
import General from "./SettingsContent/Endpoints/General";
import GlobalSettings from "./SettingsContent/Endpoints/GlobalSettings";
import Token from "./SettingsContent/Endpoints/Token";
import AccessToken from "./SettingsContent/TokensAndClaims/AccessToken";
import Claims from "./SettingsContent/TokensAndClaims/Claims";

export const settingsRoutes = [
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