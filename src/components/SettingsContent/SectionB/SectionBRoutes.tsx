import { sectionBConfig } from "./SectionBConfig";

export const sectionBRoutes = {
  path: sectionBConfig.path,
  children: sectionBConfig.items.map((item) => ({
    path: item.path,
    element: item.component,
    children: item.tabs.map((tab) => ({
      path: tab.path,
      element: tab.component,
    })),
  })),
};
