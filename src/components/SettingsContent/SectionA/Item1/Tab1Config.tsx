import { z } from "zod";

const field2Items = [
  { id: "1", label: "1" },
  { id: "2", label: "2" },
  { id: "3", label: "3" },
  { id: "4", label: "4" },
  { id: "5", label: "5" },
] as const;

const field4Items = [
  { id: "1", label: "1" },
  { id: "2", label: "2" },
  { id: "3", label: "3" },
  { id: "4", label: "4" },
  { id: "5", label: "5" },
] as const;

const tab1FormSchema = z.object({
  field1: z.string().min(2, {
    message: "field1 must be at least 2 characters.",
  }),
  field2: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  field3: z.string().min(2, {
    message: "field3 must be at least 2 characters.",
  }),
  field4: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

const tab1FormFields = [
  {
    type: "input",
    name: "field1",
    defaultValue: "",
    label: "Field 1",
    placeholder: "Field 1 Placeholder",
    description: "Field 1 Description",
  },
  {
    type: "checkbox",
    name: "field2",
    items: field2Items,
    defaultValue: [],
    label: "Field 2",
    placeholder: "Field 2 Placeholder",
    description: "Field 2 Description",
  },
  {
    type: "input",
    name: "field3",
    defaultValue: "",
    label: "Field 3",
    placeholder: "Field 3 Placeholder",
    description: "Field 3 Description",
  },
  {
    type: "checkbox",
    name: "field4",
    items: field4Items,
    defaultValue: [],
    label: "Field 4",
    placeholder: "Field 4 Placeholder",
    description: "Field 4 Description",
  },
];

export const tab1FormConfig = {
  title: "Section A Item 1 Tab 1 Dynamic Title",
  description: "Dynamic Description for Section A Item 1 Tab 1",
  formSchema: tab1FormSchema,
  formFields: tab1FormFields,
};
