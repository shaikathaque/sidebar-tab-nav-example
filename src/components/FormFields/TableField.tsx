import { Control, useFieldArray } from "react-hook-form";
import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ZodString } from "zod";
import { EditIcon, Trash2Icon } from "lucide-react";
import AddRowDialog from "../AddRowDialog";
import { useState } from "react";
import EditRowDialog from "../EditRowDialog";
import { Label } from "../ui/label";

export interface Column {
  name: string;
  label: string;
  schema: ZodString;
}

interface Props {
  columns: Column[];
  name: string;
  formControl: Control;
  label: string;
}

export default function TableDemo({
  columns,
  name,
  formControl,
  label,
}: Props) {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editRowIndex, setEditRowIndex] = useState<number | undefined>();

  const { fields, append, remove, update } = useFieldArray({
    name: name,
    control: formControl,
  });

  return (
    <div className="mt-4 flex w-full flex-col justify-center">
      <div className="mb-2 flex">
        <Button type="button" onClick={() => setIsAddDialogOpen(true)}>
          Add
        </Button>
      </div>

      <Label>{label}</Label>

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
              <TableCell className="flex flex-row justify-end gap-2">
                <EditIcon
                  className="hover:cursor-pointer"
                  onClick={() => {
                    setEditRowIndex(index);
                    setIsEditDialogOpen(true);
                  }}
                />
                <Trash2Icon
                  className="hover:cursor-pointer"
                  onClick={() => remove(index)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <AddRowDialog
        columns={columns}
        append={append}
        isOpen={isAddDialogOpen}
        setIsOpen={setIsAddDialogOpen}
      />
      {isEditDialogOpen && editRowIndex && (
        <EditRowDialog
          columns={columns}
          update={update}
          isOpen={isEditDialogOpen}
          setIsOpen={setIsEditDialogOpen}
          rowIndex={editRowIndex}
          defaultValues={fields[editRowIndex]}
        />
      )}
    </div>
  );
}
