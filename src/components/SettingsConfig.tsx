import {
  Item1 as SectionAItem1,
  Item2 as SectionAItem2,
} from "./SettingsContent/SectionA/SectionA";
import {
  Item1 as SectionBItem1,
  Item2 as SectionBItem2,
} from "./SettingsContent/SectionB/SectionB";

import SectionAItem1Tab1 from "./SettingsContent/SectionA/Item1/Tab1";
import SectionAItem1Tab2 from "./SettingsContent/SectionA/Item1/Tab2";

import SectionAItem2Tab1 from "./SettingsContent/SectionA/Item2/Tab1";
import SectionAItem2Tab2 from "./SettingsContent/SectionA/Item2/Tab2";

import SectionBItem1Tab1 from "./SettingsContent/SectionB/Item1/Tab1";
import SectionBItem1Tab2 from "./SettingsContent/SectionB/Item1/Tab2";
import SectionBItem2Tab1 from "./SettingsContent/SectionB/Item2/Tab1";
import SectionBItem2Tab2 from "./SettingsContent/SectionB/Item2/Tab2";

export const settingsRoutes = [
  {
    path: "sectionA",
    children: [
      {
        path: "item1",
        element: <SectionAItem1 />,
        children: [
          {
            path: "tab1",
            element: <SectionAItem1Tab1 />,
          },
          {
            path: "tab2",
            element: <SectionAItem1Tab2 />,
          },
        ],
      },
      {
        path: "item2",
        element: <SectionAItem2 />,
        children: [
          {
            path: "tab1",
            element: <SectionAItem2Tab1 />,
          },
          {
            path: "tab2",
            element: <SectionAItem2Tab2 />,
          },
        ],
      },
    ],
  },
  {
    path: "sectionB",
    children: [
      {
        path: "item1",
        element: <SectionBItem1 />,
        children: [
          {
            path: "tab1",
            element: <SectionBItem1Tab1 />,
          },
          {
            path: "tab2",
            element: <SectionBItem1Tab2 />,
          },
        ],
      },
      {
        path: "item2",
        element: <SectionBItem2 />,
        children: [
          {
            path: "tab1",
            element: <SectionBItem2Tab1 />,
          },
          {
            path: "tab2",
            element: <SectionBItem2Tab2 />,
          },
        ],
      },
    ],
  },
];
