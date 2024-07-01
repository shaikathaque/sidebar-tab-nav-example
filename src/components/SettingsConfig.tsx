import SectionAItem1Tab1 from "./SettingsContent/SectionA/Item1/Tab1";
import { Item1 as SectionAItem1, Item2 as SectionAItem2 } from "./SettingsContent/SectionA/SectionA";
import { Item1 as SectionBItem1, Item2 as SectionBItem2 } from "./SettingsContent/SectionB/SectionB";



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
            element: <SectionAItem1Tab1 />
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
