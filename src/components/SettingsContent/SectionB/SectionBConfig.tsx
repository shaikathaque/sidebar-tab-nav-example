import SectionBItem1Tab1 from "./Item1/Tab1";
import SectionBItem1Tab2 from "./Item1/Tab2";
import SectionBItem2Tab1 from "./Item2/Tab1";
import SectionBItem2Tab2 from "./Item2/Tab2";
import SettingsItemContainer from "@/components/SettingsItemContainer";

export const item1Tabs = [
  {
    value: "tab1",
    title: "Tab 1",
    path: "tab1",
    component: <SectionBItem1Tab1 />,
  },
  {
    value: "tab2",
    title: "Tab 2",
    path: "tab2",
    component: <SectionBItem1Tab2 />,
  },
];

export const item2Tabs = [
  {
    value: "tab1",
    title: "Tab 1",
    path: "tab1",
    component: <SectionBItem2Tab1 />,
  },
  {
    value: "tab2",
    title: "Tab 2",
    path: "tab2",
    component: <SectionBItem2Tab2 />,
  },
];

export const sectionBConfig = {
  path: "sectionB",
  items: [
    {
      path: "item1",
      component: <SettingsItemContainer tabs={item1Tabs} />,
      tabs: item1Tabs,
    },
    {
      path: "item2",
      component: <SettingsItemContainer tabs={item2Tabs} />,
      tabs: item2Tabs,
    },
  ],
};
