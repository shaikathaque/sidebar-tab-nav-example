import { Outlet } from "react-router-dom";
import Sidebar, { SidebarSection } from "./Sidebar";
import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getSettings } from "@/api/Settings";

const sidebarData: SidebarSection[] = [
  {
    title: "Section A",
    value: "sectionA",
    items: [
      { title: "Item 1", path: "/sectionA/item1/tab1" },
      { title: "Item 2", path: "/sectionA/item2/tab1" },
    ],
  },
  {
    title: "Section B",
    value: "sectionB",
    items: [
      { title: "Item 1", path: "/sectionB/item1/tab1" },
      { title: "Item 2", path: "/sectionB/item2/tab1" },
    ],
  },
];

export default function SettingsContainer() {
  // const queryClient = useQueryClient();

  const query = useQuery({ queryKey: ["settings"], queryFn: getSettings });

  useEffect(() => {
    console.log("settings query data:", query.data);
  }, [query]);

  return (
    <div className="grid grid-cols-5">
      <Sidebar sidebarData={sidebarData} />

      <div className="col-span-4 border-l">
        <div className="h-full px-8 py-6">
          {/* Display Tabs based on current route */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}
