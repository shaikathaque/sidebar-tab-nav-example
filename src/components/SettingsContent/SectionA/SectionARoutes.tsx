import { sectionAConfig } from "./SectionAConfig";

export const sectionARoutes = {
  path: sectionAConfig.path,
  children: sectionAConfig.items.map((item) => ({
    path: item.path,
    element: item.component,
    children: item.tabs.map((tab) => ({
      path: tab.path,
      element: tab.component,
    })),
  })),
};
