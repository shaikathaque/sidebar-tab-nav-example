import { z } from "zod";

const field2Items = [
  { id: "1", label: "1" },
  { id: "2", label: "2" },
  { id: "3", label: "3" },
  { id: "4", label: "4" },
  { id: "5", label: "5" },
];

const field4Items = [
  { id: "1", label: "1" },
  { id: "2", label: "2" },
  { id: "3", label: "3" },
  { id: "4", label: "4" },
  { id: "5", label: "5" },
];

const tab2FormFields = [
  {
    type: "input",
    name: "field1",
    schema: z.string().min(2, {
      message: "field1 must be at least 2 characters.",
    }),
    defaultValue: "",
    label: "Field 1",
    placeholder: "Field 1 Placeholder",
    description: "Field 1 Description",
  },
  {
    type: "checkbox",
    name: "field2",
    schema: z.array(z.string()).refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
    items: field2Items,
    defaultValue: [],
    label: "Field 2",
    placeholder: "Field 2 Placeholder",
    description: "Field 2 Description",
  },
  {
    type: "input",
    name: "field3",
    schema: z.string().min(2, {
      message: "field3 must be at least 2 characters.",
    }),
    defaultValue: "",
    label: "Field 3",
    placeholder: "Field 3 Placeholder",
    description: "Field 3 Description",
  },
  {
    type: "checkbox",
    name: "field4",
    schema: z.array(z.string()).refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
    items: field4Items,
    defaultValue: [],
    label: "Field 4",
    placeholder: "Field 4 Placeholder",
    description: "Field 4 Description",
  },
];

export const tab2FormConfig = {
  title: "Section A Item 2 Tab 2 Dynamic Title",
  description: "Dynamic Description for Section A Item 2 Tab 2",
  formFields: tab2FormFields,
};
