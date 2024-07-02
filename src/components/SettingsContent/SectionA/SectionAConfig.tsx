import DynamicForm from "@/components/DynamicForm";
import SectionAItem1Tab2 from "./Item1/Tab2";
import SectionAItem2Tab1 from "./Item2/Tab1";
import SectionAItem2Tab2 from "./Item2/Tab2";
import SettingsItemContainer from "@/components/SettingsItemContainer";
import { tab1FormConfig } from "./Item1/Tab1Config";

export const item1Tabs = [
  {
    value: "tab1",
    title: "Tab 1",
    path: "tab1",
    component: <DynamicForm {...tab1FormConfig} />,
  },
  {
    value: "tab2",
    title: "Tab 2",
    path: "tab2",
    component: <SectionAItem1Tab2 />,
  },
];

export const item2Tabs = [
  {
    value: "tab1",
    title: "Tab 1",
    path: "tab1",
    component: <SectionAItem2Tab1 />,
  },
  {
    value: "tab2",
    title: "Tab 2",
    path: "tab2",
    component: <SectionAItem2Tab2 />,
  },
];

export const sectionAConfig = {
  path: "sectionA",
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
