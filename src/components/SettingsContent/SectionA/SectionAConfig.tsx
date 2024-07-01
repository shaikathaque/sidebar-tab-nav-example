import SettingsTabs from "@/components/SettingsTabs";
import { Outlet } from "react-router-dom";
import SectionAItem1Tab1 from "./Item1/Tab1";
import SectionAItem1Tab2 from "./Item1/Tab2";
import SectionAItem2Tab1 from "./Item2/Tab1";
import SectionAItem2Tab2 from "./Item2/Tab2";

export const item1Tabs = [
  {
    value: "tab1",
    title: "Tab 1",
    path: "tab1",
    component: <SectionAItem1Tab1 />,
  },
  {
    value: "tab2",
    title: "Tab 2",
    path: "tab2",
    component: <SectionAItem1Tab2 />,
  },
];
export function Item1() {
  return (
    <>
      <SettingsTabs tabs={item1Tabs} />
      <Outlet />
    </>
  );
}

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
export function Item2() {
  return (
    <>
      <SettingsTabs tabs={item2Tabs} />
      <Outlet />
    </>
  );
}
