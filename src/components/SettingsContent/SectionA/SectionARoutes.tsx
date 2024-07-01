import SectionAItem1Tab1 from "./Item1/Tab1";
import SectionAItem1Tab2 from "./Item1/Tab2";
import SectionAItem2Tab1 from "./Item2/Tab1";
import SectionAItem2Tab2 from "./Item2/Tab2";
import { Item1, Item2 } from "./SectionAConfig";

export const sectionARoutes = {
  path: "sectionA",
  children: [
    {
      path: "item1",
      element: <Item1 />,
      children: [
        {
          path: "tab1",
          element: <SectionAItem1Tab1 />,
        },
        {
          path: "tab2",
          element: <SectionAItem1Tab2 />,
        },
      ],
    },
    {
      path: "item2",
      element: <Item2 />,
      children: [
        {
          path: "tab1",
          element: <SectionAItem2Tab1 />,
        },
        {
          path: "tab2",
          element: <SectionAItem2Tab2 />,
        },
      ],
    },
  ],
};
