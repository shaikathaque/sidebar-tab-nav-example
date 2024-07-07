import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";

import { Form, FormField } from "@/components/ui/form";
import InputField from "./FormFields/InputField";
import CheckboxField, { Item } from "./FormFields/CheckboxField";
import { useQuery } from "@tanstack/react-query";
import { Settings, getSettings } from "@/api/Settings";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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
  title: string;
  description: string;
  formFields: FormField[];
};

const getDefaultValues = (formFields: FormField[]) => {
  return Object.assign(
    {},
    ...formFields.map((field) => ({ [field.name]: field.defaultValue })),
  );
};

const getExistingValues = (
  existingSettings: Settings | undefined,
  formFields: FormField[],
) => {
  if (!existingSettings) {
    return getDefaultValues(formFields);
  }

  const result = Object.assign(
    {},
    ...formFields.map((field) => ({
      [field.name]: existingSettings[field.name] || field.defaultValue,
    })),
  );
  return result;
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
  title,
  description,
}: FormConfig) {
  const location = useLocation();
  const { data, isLoading } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
  }

  // TODO: use react-query to retrieve form data and set default values
  const formSchema = getFormSchema(formFields);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: getDefaultValues(formFields),
  });

  useEffect(() => {
    if (data) {
      form.reset(getExistingValues(data, formFields));
    }
  }, [data, location]);

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
      <div className="py-4">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p>{description}</p>
      </div>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Generate Form Fields based on config */}
            {formFields.map((formField) => renderFormField(formField))}

            <Button type="submit">Submit</Button>
            <Button onClick={() => form.reset()}>Undo</Button>
          </form>
        </Form>
      )}
    </div>
  );
}
