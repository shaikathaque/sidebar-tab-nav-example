import SettingsTabs from "@/components/SettingsTabs";
import { Outlet } from "react-router-dom";

const item1Tabs = [
  {
    value: "tab1",
    title: "Tab 1",
    path: "/tab1",
  },
  {
    value: "tab2",
    title: "Tab 2",
    path: "/tab2",
  },
]

export default function Item1() {
  return (
    <>
      <SettingsTabs tabs={item1Tabs} />
      <Outlet />
    </>
  )
}