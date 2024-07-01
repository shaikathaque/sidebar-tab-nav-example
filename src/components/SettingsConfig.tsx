import { default as SectionAItem1 } from "./SettingsContent/SectionA/Item1";
import { default as SectionAItem2 } from "./SettingsContent/SectionA/Item2";
import { default as SectionBItem1 }  from "./SettingsContent/SectionB/Item1";
import { default as SectionBItem2 }  from "./SettingsContent/SectionB/Item2";

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
            element: <p>Section A - Item 1 - Tab 1</p>
          },
          {
            path: "tab2",
            element: <p>Section A - Item 1 - Tab 2</p>
          },
        ]
      },
      {
        path: "item2",
        element: <SectionAItem2 />,
        children: [
          {
            path: "tab1",
            element: <p>Section A - Item 2 - Tab 1</p>
          },
          {
            path: "tab2",
            element: <p>Section A - Item 2 - Tab 2</p>
          },
        ]
      },
    ]
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
            element: <p>Section B - Item 1 - Tab 1</p>
          },
          {
            path: "tab2",
            element: <p>Section B - Item 1 - Tab 2</p>
          },
        ]
      },
      {
        path: "item2",
        element: <SectionBItem2 />,
        children: [
          {
            path: "tab1",
            element: <p>Section B - Item 2 - Tab 1</p>
          },
          {
            path: "tab2",
            element: <p>Section B - Item 2 - Tab 2</p>
          },
        ]
      },
    ]
  }
]
