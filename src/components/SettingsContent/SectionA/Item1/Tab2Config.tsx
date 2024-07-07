import { z } from "zod";

const field7Items = [
  { id: "5", label: "5" },
  { id: "6", label: "6" },
  { id: "7", label: "7" },
  { id: "8", label: "8" },
  { id: "9", label: "9" },
];

const field9Items = [
  { id: "7", label: "7" },
  { id: "8", label: "8" },
  { id: "9", label: "9" },
  { id: "10", label: "10" },
  { id: "11", label: "11" },
];

const tab2FormFields = [
  {
    type: "input",
    name: "field6",
    schema: z.string().min(2, {
      message: "field6 must be at least 2 characters.",
    }),
    defaultValue: "",
    label: "Field 6",
    placeholder: "Field 6 Placeholder",
    description: "Field 6 Description",
  },
  {
    type: "checkbox",
    name: "field7",
    schema: z.array(z.string()).refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
    items: field7Items,
    defaultValue: [],
    label: "Field 7",
    placeholder: "Field 7 Placeholder",
    description: "Field 7 Description",
  },
  {
    type: "input",
    name: "field8",
    schema: z.string().min(2, {
      message: "field8 must be at least 2 characters.",
    }),
    defaultValue: "",
    label: "Field 8",
    placeholder: "Field 8 Placeholder",
    description: "Field 8 Description",
  },
  {
    type: "checkbox",
    name: "field9",
    schema: z.array(z.string()).refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
    items: field9Items,
    defaultValue: [],
    label: "Field 9",
    placeholder: "Field 9 Placeholder",
    description: "Field 9 Description",
  },
  {
    type: "input",
    name: "field10",
    schema: z.string().min(2, {
      message: "field10 must be at least 2 characters.",
    }),
    defaultValue: "",
    label: "Field 10",
    placeholder: "Field 10 Placeholder",
    description: "Field 10 Description",
  },
];

export const tab2FormConfig = {
  title: "Section A Item 1 Tab 2 Dynamic Title",
  description: "Dynamic Description for Section A Item 1 Tab 2",
  formFields: tab2FormFields,
};
