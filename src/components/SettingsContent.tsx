import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export default function SettingsContent() {
  return (
    <>
      <Tabs defaultValue="general" className="space-y-6">
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
          <TabsContent value="general">
            General Content
          </TabsContent>
          <TabsContent value="authorization">
            Authorization Content
          </TabsContent>
          <TabsContent value="token">
            Token Content
          </TabsContent>
      </Tabs>
    </>
  )
}