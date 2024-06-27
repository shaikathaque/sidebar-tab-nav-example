import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function General() {
  return (
    <>
      <Tabs defaultValue="revocation" className="space-y-6">
          <TabsList>
            <TabsTrigger value="revocation">
              Revocation/Introspection
            </TabsTrigger>
            <TabsTrigger value="pushedAuthZRequest">
              Pushed Authorization Request
            </TabsTrigger>
            <TabsTrigger value="userInfo">
              User Info
            </TabsTrigger>
          </TabsList>
          <TabsContent value="revocation">
            Revocation/Introspection Content
          </TabsContent>
          <TabsContent value="pushedAuthZRequest">
          Pushed Authorization Request Content
          </TabsContent>
          <TabsContent value="userInfo">
          User Info Content
          </TabsContent>
      </Tabs>
    </>
  )
}