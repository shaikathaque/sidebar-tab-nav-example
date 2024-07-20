import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "./ui/use-toast";
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

const DialogFormSchema = z.object({
  columnA: z.string().min(2, {
    message: "ColumnA must be at least 2 characters.",
  }),
  columnB: z.string().min(2, {
    message: "ColumnB must be at least 2 characters.",
  }),
});

interface Column {
  name: string;
  label: string;
}
interface Props {
  columns: Column[];
  update: (index: number, data: { columnA: string; columnB: string }) => void;
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
  const dialogForm = useForm<z.infer<typeof DialogFormSchema>>({
    resolver: zodResolver(DialogFormSchema),
    defaultValues,
  });

  function onDialogFormSubmit(data: z.infer<typeof DialogFormSchema>) {
    update(rowIndex, data);
    setIsOpen(false);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
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
              <Button type="submit">Add</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
