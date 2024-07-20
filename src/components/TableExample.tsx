import { useFieldArray, useForm } from "react-hook-form";
import { Button } from "./ui/button";

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
import { Form } from "./ui/form";
import { EditIcon, Trash2Icon } from "lucide-react";
import AddRowDialog from "./AddRowDialog";
import { useState } from "react";

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

export default function TableDemo() {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fieldName: rows,
    },
  });

  const { fields, append, remove, replace } = useFieldArray({
    name: "fieldName",
    control: form.control,
  });

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
      <div className="mb-2 flex justify-center">
        <Button onClick={() => setIsAddDialogOpen(true)}>Add</Button>
      </div>
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
                  <TableCell className="flex flex-row gap-2">
                    <EditIcon className="hover:cursor-pointer" />
                    <Trash2Icon
                      className="hover:cursor-pointer"
                      onClick={() => remove(index)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Button type="submit">Save</Button>
        </form>
      </Form>
      <AddRowDialog
        columns={columns}
        append={append}
        isOpen={isAddDialogOpen}
        setIsOpen={setIsAddDialogOpen}
      />
    </div>
  );
}
