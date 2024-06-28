import { Outlet } from "react-router-dom";
import Sidebar, { SidebarSection } from "./Sidebar"

const sidebarData: SidebarSection[] = [
  {
    title: 'Endpoints',
    value: 'endpoints',
    items: [
      { title: 'Global Settings', path: '/endpoints/globalSettings' },
      { title: 'Authorization', path: '/endpoints/authorization'},
      { title: 'Token', path: '/endpoints/token'},
      { title: 'General', path: '/endpoints/general'},
    ]
  },
  {
    title: 'Tokens and Claims',
    value: 'tokensAndClaims',
    items: [
      { title: 'Access Token', path: '/tokensAndClaims/accessToken'},
      { title: 'Claims', path: '/tokensAndClaims/claims'},
    ]
  }
]

export default function SettingsContainer() {
  return (
    <div className="grid grid-cols-5">
      <Sidebar sidebarData={sidebarData} />

      <div className="col-span-4 border-l">
        <div className="h-full px-8 py-6">
          <Outlet />
        </div>
      </div>
    </div>
  )
}