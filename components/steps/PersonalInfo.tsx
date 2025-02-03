"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import useStore from "@/store/useStore";
import SectionHeader from "../SectionHeader";
import Container from "../Container";

const formSchema = z.object({
  name: z.string().min(5, { message: "Name is required" }).max(100),
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  phone: z.string().min(8, { message: "Enter your phone" }),
  // phone: z.string().refine((val) => /^\d{10}$/.test(val), {
  //   message: "Phone is required",
  // }),
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
    <Container>
      <section>
        <SectionHeader {...SectionProps} />
        The Personal info
        <button onClick={() => increaseStep(1)}> next step </button>
      </section>
    </Container>
  );
};
