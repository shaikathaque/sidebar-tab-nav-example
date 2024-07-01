import SectionBItem1Tab1 from "./Item1/Tab1";
import SectionBItem1Tab2 from "./Item1/Tab2";
import SectionBItem2Tab1 from "./Item2/Tab1";
import SectionBItem2Tab2 from "./Item2/Tab2";
import { Item1, Item2 } from "./SectionBConfig";

export const sectionBRoutes = {
  path: "sectionB",
  children: [
    {
      path: "item1",
      element: <Item1 />,
      children: [
        {
          path: "tab1",
          element: <SectionBItem1Tab1 />,
        },
        {
          path: "tab2",
          element: <SectionBItem1Tab2 />,
        },
      ],
    },
    {
      path: "item2",
      element: <Item2 />,
      children: [
        {
          path: "tab1",
          element: <SectionBItem2Tab1 />,
        },
        {
          path: "tab2",
          element: <SectionBItem2Tab2 />,
        },
      ],
    },
  ],
};
