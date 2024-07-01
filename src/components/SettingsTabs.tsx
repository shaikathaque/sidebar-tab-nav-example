import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLocation, useNavigate } from "react-router-dom";

type Tab = {
  title: string
  value: string
  path: string
}

type Props = {
  tabs: Tab[]
}

export default function SettingsTabs({tabs}: Props) {
  const navigate = useNavigate();
  const location = useLocation();

  const activeTabObj = tabs.find(tab => location.pathname.includes(tab.path))
  const activeTabValue = activeTabObj ? activeTabObj.value : tabs[0].value

  const onTabChange = (value: string) => {
    navigate('./' + value, { replace: true });
  }

  return (
    <Tabs defaultValue={tabs[0].value} value={activeTabValue} onValueChange={onTabChange} className="space-y-6">
      <TabsList>
        {tabs.map((tab) => {
          return (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.title}
            </TabsTrigger>
          )
        })}
      </TabsList>
    </Tabs>
  )
}
