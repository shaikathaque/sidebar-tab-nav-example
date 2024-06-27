import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function GlobalSettings() {
  return (
    <>
      <Tabs defaultValue="general" className="space-y-6">
          <TabsList>
            <TabsTrigger value="general">
              General
            </TabsTrigger>
          </TabsList>
          <TabsContent value="general">
            General Content
          </TabsContent>
      </Tabs>
    </>
  )
}