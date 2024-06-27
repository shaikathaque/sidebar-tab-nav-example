import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar"

const sidebarItems = [{ title: 'General'}, { title: 'Endpoints'}, { title: 'Tokens and Claims'}];

export default function SettingsContainer() {
  return (
    <div className="grid grid-cols-5">
      <Sidebar items={sidebarItems} />

      <div className="col-span-4 border-l">
        <div className="h-full px-8 py-6">
          <Outlet />
        </div>
      </div>
    </div>
  )
}