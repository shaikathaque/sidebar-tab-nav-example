import SettingsItemContainer from "@/components/SettingsItemContainer";

import { tab1FormConfig as item1Tab1FormConfig } from "./Item1/Tab1Config";
import { tab2FormConfig as item1Tab2FormConfig } from "./Item1/Tab2Config";

import { tab1FormConfig as item2Tab1FormConfig } from "./Item2/Tab1Config";
import { tab2FormConfig as item2Tab2FormConfig } from "./Item2/Tab2Config";
import DynamicFormContainer from "@/components/DynamicFormContainer";

export const item1Tabs = [
  {
    value: "tab1",
    title: "Tab 1",
    path: "tab1",
    component: (
      <DynamicFormContainer
        {...item1Tab1FormConfig}
        // A unique key is required so that there is a unique form instance for each tab
        key={"sectionAItem1Tab1"}
      />
    ),
  },
  {
    value: "tab2",
    title: "Tab 2",
    path: "tab2",
    component: (
      <DynamicFormContainer
        {...item1Tab2FormConfig}
        key={"sectionAItem1Tab2"}
      />
    ),
  },
];

export const item2Tabs = [
  {
    value: "tab1",
    title: "Tab 1",
    path: "tab1",
    component: <DynamicFormContainer {...item2Tab1FormConfig} />,
  },
  {
    value: "tab2",
    title: "Tab 2",
    path: "tab2",
    component: <DynamicFormContainer {...item2Tab2FormConfig} />,
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
