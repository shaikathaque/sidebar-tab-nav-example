import { Outlet } from "react-router-dom";
import SettingsTabs, { Tab } from "./SettingsTabs";

type Props = {
  tabs: Tab[];
};

export default function SettingsItemContainer({ tabs }: Props) {
  return (
    <>
      <SettingsTabs tabs={tabs} />
      <Outlet />
    </>
  );
}
