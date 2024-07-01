import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";

const field2Items = [
  { id: "1", label: "1" },
  { id: "2", label: "2" },
  { id: "3", label: "3" },
  { id: "4", label: "4" },
  { id: "5", label: "5" },
] as const;
const field4Items = [
  { id: "1", label: "1" },
  { id: "2", label: "2" },
  { id: "3", label: "3" },
  { id: "4", label: "4" },
  { id: "5", label: "5" },
] as const;

const tab1FormSchema = z.object({
  field1: z.string().min(2, {
    message: "field1 must be at least 2 characters.",
  }),
  field2: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  field3: z.string().min(2, {
    message: "field3 must be at least 2 characters.",
  }),
  field4: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  field5: z.string().min(2, {
    message: "field5 must be at least 2 characters.",
  }),
});

export default function SectionAItem1Tab1() {
  function onSubmit(values: z.infer<typeof tab1FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
  }

  const tab1Form = useForm<z.infer<typeof tab1FormSchema>>({
    resolver: zodResolver(tab1FormSchema),
    defaultValues: {
      field1: "",
      field2: [],
      field3: "",
      field4: [],
      field5: "",
    },
  });

  return (
    <div className="mt-4">
      <div className="py-4">
        <h1 className="text-2xl font-semibold">Section A Item 1 Tab 1</h1>
        <p>Description for Section A Item 1 Tab 1</p>
      </div>
      <Form {...tab1Form}>
        <form onSubmit={tab1Form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Field 1 */}
          <FormField
            control={tab1Form.control}
            name="field1"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Field 1</FormLabel>
                <FormControl>
                  <Input placeholder="field1 placeholder" {...field} />
                </FormControl>
                <FormDescription>field1 description</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Field 2 */}
          <FormField
            control={tab1Form.control}
            name="field2"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-base">Field 2</FormLabel>
                  <FormDescription>field2 Description</FormDescription>
                </div>
                {field2Items.map((item) => (
                  <FormField
                    key={item.id}
                    control={tab1Form.control}
                    name="field2"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, item.id])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== item.id,
                                      ),
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Field 3 */}
          <FormField
            control={tab1Form.control}
            name="field3"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Field 3</FormLabel>
                <FormControl>
                  <Input placeholder="field3 placeholder" {...field} />
                </FormControl>
                <FormDescription>field3 description</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Field 4 */}
          <FormField
            control={tab1Form.control}
            name="field4"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-base">Field 4</FormLabel>
                  <FormDescription>field4 Description</FormDescription>
                </div>
                {field4Items.map((item) => (
                  <FormField
                    key={item.id}
                    control={tab1Form.control}
                    name="field4"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, item.id])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== item.id,
                                      ),
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Field 5 */}
          <FormField
            control={tab1Form.control}
            name="field5"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Field 5</FormLabel>
                <FormControl>
                  <Input placeholder="field5 placeholder" {...field} />
                </FormControl>
                <FormDescription>field5 description</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
