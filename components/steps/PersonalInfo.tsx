"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import useStore from "@/store/useStore";
import SectionHeader from "../SectionHeader";
import Container from "../Container";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string().min(5, { message: "Name is required" }).max(100),
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  phone: z.string().refine((val) => /^\+?(\d{1,3})?[-. ]?\(?\d{1,4}\)?[-. ]?\d{1,4}[-. ]?\d{1,9}$/.test(val), {
    message: "Phone is required",
  }),
});

type ValidationSchema = z.infer<typeof formSchema>;

export const PersonalInfo = () => {
  const { personalInfo, setPersonalInfo, increaseStep } = useStore((state) => state);

  const onSubmitHandler = (values: ValidationSchema) => {
    setPersonalInfo({ ...personalInfo, ...values });
    increaseStep(1);
  };

  const form = useForm<ValidationSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: { ...personalInfo },
  });

  const SectionProps = {
    title: "Personal info",
    description: "Please provide your name, email address, and phone number.",
  };

  return (
    <Container onNext={form.handleSubmit(onSubmitHandler)}>
      <section>
        <SectionHeader {...SectionProps} />
        <Form {...form}>
          <form>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="shadcn"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>This is your public display name.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <button onClick={() => increaseStep(1)}> next step </button>
      </section>
    </Container>
  );
};
