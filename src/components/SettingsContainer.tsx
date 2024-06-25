import Sidebar from "./Sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const sidebarItems = [{ title: 'General'}, { title: 'Endpoints'}, { title: 'Tokens and Claims'}];

export default function SettingsContainer() {
  return (
    <div className="grid grid-cols-5">
      <Sidebar items={sidebarItems} />

      <div className="col-span-4 border-l">
        <div className="h-full px-8 py-6">
          <Tabs defaultValue="general" className="space-y-6">
            <div className="space-between flex items-center">
              <TabsList>
                <TabsTrigger value="general">
                  General
                </TabsTrigger>
                <TabsTrigger value="authorization">
                  Authorization
                </TabsTrigger>
                <TabsTrigger value="token">
                  Token
                </TabsTrigger>
              </TabsList>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  )
}