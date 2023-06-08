"use client";

import React from "react";
import type { ZodObject, ZodTypeAny } from "zod";

import FormContextProvider, { useForm } from "./form-context";
import { Column } from "../layout";

export type FormProps<
  Values extends Record<string, unknown> = Record<string, unknown>,
> = React.PropsWithChildren<{
  readonly initialValues: Values;
  readonly validation?: ZodObject<Record<keyof Values, ZodTypeAny>>;
  readonly autoComplete?: string;
  readonly onSubmit: (values: Values) => Promise<void>;
}>;

export default function Form<
  Values extends Record<string, unknown> = Record<string, unknown>,
>({
  initialValues,
  validation,
  autoComplete,
  onSubmit,
  children,
}: FormProps<Values>) {
  return (
    <FormContextProvider
      initialValues={initialValues}
      onSubmit={onSubmit}
      validation={validation}
    >
      <FormElement autoComplete={autoComplete}>{children}</FormElement>
    </FormContextProvider>
  );
}

function FormElement({
  autoComplete,
  children,
}: React.PropsWithChildren<{ autoComplete?: string }>) {
  const { submit } = useForm();

  const handleSubmit = React.useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();
      await submit();
    },
    [submit],
  );

  return (
    <form autoComplete={autoComplete} onSubmit={handleSubmit}>
      <Column gap="5">{children}</Column>
    </form>
  );
}
