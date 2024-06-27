import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Claims() {
  return (
    <>
      <Tabs defaultValue="verifiedClaims" className="space-y-6">
          <TabsList>
            <TabsTrigger value="verifiedClaims">
              Verified Claims (IDA)
            </TabsTrigger>
            <TabsTrigger value="supportedClaims">
              SupportedClaims
            </TabsTrigger>
          </TabsList>
          <TabsContent value="verifiedClaims">
            Verified Claims Content
          </TabsContent>
          <TabsContent value="supportedClaims">
            Supported Claims Content
          </TabsContent>
      </Tabs>
    </>
  )
}