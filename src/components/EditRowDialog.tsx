import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z, ZodString } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

const getFormSchema = (columns: Column[]) => {
  return z.object(
    Object.assign(
      {},
      ...columns.map((column) => ({ [column.name]: column.schema })),
    ),
  );
};

interface Column {
  name: string;
  label: string;
  schema: ZodString;
}
interface Props {
  columns: Column[];
  update: (index: number, data: { [x: string]: string }) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  defaultValues: { columnA: string; columnB: string };
  rowIndex: number;
}

export default function EditRowDialog({
  columns,
  update,
  isOpen,
  setIsOpen,
  defaultValues,
  rowIndex,
}: Props) {
  const FormSchema = getFormSchema(columns);

  const dialogForm = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues,
  });

  function onDialogFormSubmit(data: z.infer<typeof FormSchema>) {
    update(rowIndex, data);
    setIsOpen(false);
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <Form {...dialogForm}>
          <form onSubmit={dialogForm.handleSubmit(onDialogFormSubmit)}>
            <DialogHeader>
              <DialogTitle>Add row</DialogTitle>
              <DialogDescription>Add a new row</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              {columns.map((column, i) => (
                <FormField
                  control={dialogForm.control}
                  key={i}
                  name={column.name}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{column.label}</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
            </div>
            <DialogFooter>
              <Button
                type="button"
                onClick={dialogForm.handleSubmit(onDialogFormSubmit)}
              >
                Add
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
