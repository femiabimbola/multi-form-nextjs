"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import useStore from "@/store/useStore";
import SectionHeader from "../SectionHeader";
import Container from "../Container";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

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
    console.log(personalInfo);
    setPersonalInfo({ ...personalInfo, ...values });
    increaseStep(1);
    console.log(personalInfo);
  };

  const form = useForm<ValidationSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: { ...personalInfo },
  });

  // console.log(form);

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = form;

  const SectionProps = {
    title: "Personal info",
    description: "Please provide your name, email address, and phone number.",
  };

  return (
    <Container onNext={handleSubmit(onSubmitHandler)}>
      <section>
        <SectionHeader {...SectionProps} />
        <Form {...form}>
          <form
            onSubmit={() => handleSubmit(onSubmitHandler)}
            className="flex flex-col gap-6"
          >
            <FormField
              control={control}
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
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-c-primary-marine-blue flex items-center justify-between">
                    Email Address
                    <FormMessage>{form.formState.errors.email?.message}</FormMessage>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className={cn(
                        "placeholder:font-medium placeholder:text-c-neutral-cool-gray border-c-neutral-light-gray text-c-primary-marine-blue"
                      )}
                      placeholder="e.g. stephenking@lorem.com"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-c-primary-marine-blue flex items-center justify-between">
                    Phone Number
                    <FormMessage>{errors.phone?.message}</FormMessage>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className={cn(
                        "placeholder:font-medium placeholder:text-c-neutral-cool-gray border-c-neutral-light-gray text-c-primary-marine-blue",
                        {
                          "border-c-primary-strawberry-red": errors.phone?.message,
                        }
                      )}
                      placeholder="e.g. +1 234 567 890"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
        {/* <button onClick={() => increaseStep(1)}> next step </button> */}
      </section>
    </Container>
  );
};
