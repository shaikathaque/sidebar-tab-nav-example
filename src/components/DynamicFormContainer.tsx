import { toast } from "@/components/ui/use-toast";
import { z } from "zod";

import { FormField } from "@/components/ui/form";
import { Item } from "./FormFields/CheckboxField";
import { useQuery } from "@tanstack/react-query";
import { Settings, getSettings } from "@/api/Settings";
import { Skeleton } from "./ui/skeleton";
import DynamicForm from "./DynamicForm";
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

const getExistingValues = (
  existingSettings: Settings | undefined,
  formFields: FormField[],
) => {
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

export default function DynamicFormContainer({
  formFields,
  title,
  description,
}: FormConfig) {
  const { pathname } = useLocation();
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

  const defaultValues = data ? getExistingValues(data, formFields) : null;

  const formSchema = getFormSchema(formFields);

  return (
    <div className="mt-4" key={pathname}>
      <div className="py-4">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p>{description}</p>
      </div>
      {isLoading || !defaultValues ? (
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-[125px] w-[250px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      ) : (
        <DynamicForm
          formFields={formFields}
          onSubmit={onSubmit}
          defaultValues={defaultValues}
        />
      )}
    </div>
  );
}
