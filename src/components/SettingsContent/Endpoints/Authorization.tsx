import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Authorization() {
  return (
    <>
      <Tabs defaultValue="general" className="space-y-6">
          <TabsList>
            <TabsTrigger value="general">
              General
            </TabsTrigger>
            <TabsTrigger value="requestObject">
              Request Object
            </TabsTrigger>
          </TabsList>
          <TabsContent value="general">
            General Content
          </TabsContent>
          <TabsContent value="general">
            Request Object Content
          </TabsContent>
      </Tabs>
    </>
  )
}