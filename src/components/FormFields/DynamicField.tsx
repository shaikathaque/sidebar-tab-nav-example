import { Control, useFieldArray } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

type Props = {
  formControl: Control;
  name: string;
  label: string;
};

export default function DynamicField({ formControl, name, label }: Props) {
  const { fields, append, remove } = useFieldArray({
    name: name,
    control: formControl,
  });

  return (
    <div>
      {fields.map((field, index) => (
        <FormField
          control={formControl}
          key={field.id}
          name={`${name}.${index}`}
          render={({ field }) => (
            <FormItem>
              <FormLabel className={cn(index !== 0 && "sr-only")}>
                {label}
              </FormLabel>
              <div className="flex flex-row gap-2">
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <Button variant={"destructive"} onClick={() => remove(index)}>
                  Delete
                </Button>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      ))}
      <Button
        type="button"
        size="sm"
        className="mt-2"
        onClick={() => append("")}
      >
        Add
      </Button>
    </div>
  );
}
