import { z } from "zod";

const field2Items = [
  { id: "1", label: "1" },
  { id: "2", label: "2" },
  { id: "3", label: "3" },
  { id: "4", label: "4" },
  { id: "5", label: "5" },
];

// TODO: add propertyName field to indicate the property name in the API - so that default value can be set from API response
const tab1FormFields = [
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
  // {
  //   type: "input",
  //   name: "field3",
  //   schema: z.string().min(2, {
  //     message: "field3 must be at least 2 characters.",
  //   }),
  //   defaultValue: "",
  //   label: "Field 3",
  //   placeholder: "Field 3 Placeholder",
  //   description: "Field 3 Description",
  // },
  {
    type: "table",
    name: "field3",
    label: "Field 3",
    schema: z
      .array(
        z.object({
          columnA: z.string().min(2, {
            message: "ColumnA must be at least 2 characters.",
          }),
          columnB: z.string().min(2, {
            message: "ColumnB must be at least 2 characters.",
          }),
        }),
      )
      .optional(),
    columns: [
      {
        name: "columnA",
        label: "Column A",
        schema: z.string().min(2, {
          message: "ColumnA must be at least 2 characters.",
        }),
      },
      {
        name: "columnB",
        label: "Column B",
        schema: z.string().min(2, {
          message: "ColumnB must be at least 2 characters.",
        }),
      },
    ],
    defaultValue: [],
  },
  {
    type: "dynamic",
    name: "field4",
    label: "field4",
    schema: z.array(
      z.string().min(2, {
        message: "field4 must be at least 2 characters.",
      }),
    ),
    defaultValue: [],
  },
  {
    type: "input",
    name: "field5",
    schema: z.string().min(2, {
      message: "field5 must be at least 2 characters.",
    }),
    defaultValue: "",
    label: "Field 5",
    placeholder: "Field 5 Placeholder",
    description: "Field 5 Description",
  },
];

export const tab1FormConfig = {
  title: "Section A Item 1 Tab 1 Dynamic Title",
  description: "Dynamic Description for Section A Item 1 Tab 1",
  formFields: tab1FormFields,
};
