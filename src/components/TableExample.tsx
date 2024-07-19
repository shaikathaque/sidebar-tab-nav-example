import { useFieldArray, useForm } from "react-hook-form";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "./ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { DeleteIcon } from "lucide-react";

const columns = [
  {
    name: "columnA",
    label: "Column A",
  },
  {
    name: "columnB",
    label: "Column B",
  },
];

const rows = [
  {
    columnA: "A1",
    columnB: "B1",
  },
  {
    columnA: "A2",
    columnB: "B2",
  },
  {
    columnA: "A3",
    columnB: "B3",
  },
];

const FormSchema = z.object({
  fieldName: z
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
});

const DialogFormSchema = z.object({
  columnA: z.string().min(2, {
    message: "ColumnA must be at least 2 characters.",
  }),
  columnB: z.string().min(2, {
    message: "ColumnB must be at least 2 characters.",
  }),
});

export default function TableDemo() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fieldName: rows,
    },
  });

  const dialogForm = useForm<z.infer<typeof DialogFormSchema>>({
    resolver: zodResolver(DialogFormSchema),
    defaultValues: {
      columnA: "",
      columnB: "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "fieldName",
    control: form.control,
  });

  function onDialogFormSubmit(data: z.infer<typeof DialogFormSchema>) {
    append(data);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  const dialog = (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"sm"}>Add</Button>
      </DialogTrigger>
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

  function onSubmit(data: z.infer<typeof FormSchema>) {
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
    <div className="mt-4 flex min-h-screen w-full flex-col justify-center">
      <div className="mb-2 flex justify-center">{dialog}</div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          <Table>
            <TableHeader>
              <TableRow>
                {columns.map((column) => (
                  <TableHead key={column.name}>{column.label}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {fields.map((field, index) => (
                <TableRow key={field.id}>
                  {columns.map((col, i) => (
                    <TableCell key={i}>{field[col.name]}</TableCell>
                  ))}
                  <DeleteIcon onClick={() => remove(index)} />
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Button type="submit">Save</Button>
        </form>
      </Form>
    </div>
  );
}
