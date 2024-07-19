import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";

import { Form, FormField } from "@/components/ui/form";
import InputField from "./FormFields/InputField";
import CheckboxField, { Item } from "./FormFields/CheckboxField";
import { Settings } from "@/api/Settings";

type FormField = {
  type: string;
  name: string;
  schema:
    | z.ZodString
    | z.ZodEffects<z.ZodArray<z.ZodString, "many">, string[], string[]>;
  defaultValue: string | unknown[];
  label: string;
  placeholder: string;
  description: string;
  items?: Item[];
};

type FormConfig = {
  defaultValues: Partial<Settings>;
  formFields: FormField[];
  onSubmit: (values: { [x: string]: string | string[] }) => void;
};

const getFormSchema = (formFields: FormField[]) => {
  return z.object(
    Object.assign(
      {},
      ...formFields.map((field) => ({ [field.name]: field.schema })),
    ),
  );
};

export default function DynamicForm({
  formFields,
  defaultValues,
  onSubmit,
}: FormConfig) {
  const formSchema = getFormSchema(formFields);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  const handleUndo = () => {
    form.reset(defaultValues);
  };

  const renderFormField = (formField: FormField) => {
    switch (formField.type) {
      case "input":
        return (
          <InputField
            key={formField.name}
            name={formField.name}
            formControl={form.control}
            label={formField.label}
            placeholder={formField.placeholder}
            description={formField.description}
          />
        );
      case "checkbox":
        return (
          <CheckboxField
            key={formField.name}
            name={formField.name}
            formControl={form.control}
            label={formField.label}
            description={formField.description}
            items={formField.items!}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="mt-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Generate Form Fields based on config */}
          {formFields.map((formField) => renderFormField(formField))}

          <div>
            <Button type="submit">Submit</Button>
            <Button type="button" onClick={handleUndo}>
              Undo
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
