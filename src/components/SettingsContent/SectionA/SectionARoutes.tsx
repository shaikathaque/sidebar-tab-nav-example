import { Item1, Item2, item1Tabs, item2Tabs } from "./SectionAConfig";

export const sectionARoutes = {
  path: "sectionA",
  children: [
    {
      path: "item1",
      element: <Item1 />,
      children: item1Tabs.map((tab) => ({
        path: tab.path,
        element: tab.component,
      })),
    },
    {
      path: "item2",
      element: <Item2 />,
      children: item2Tabs.map((tab) => ({
        path: tab.path,
        element: tab.component,
      })),
    },
  ],
};
