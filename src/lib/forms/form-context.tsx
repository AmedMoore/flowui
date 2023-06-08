"use client";

import React from "react";
import type { ZodObject, ZodTypeAny } from "zod";
import { useBoolean } from "usehooks-ts";

type ErrorsMap<Values> = {
  [P in keyof Values]?: string[] | null;
};

export type FormContextValue<
  Values extends Record<string, unknown> = Record<string, unknown>,
> = {
  loading: boolean;
  values: Values;
  errors: ErrorsMap<Values>;
  setValues: React.Dispatch<React.SetStateAction<Values>>;
  hasField: (fieldName: unknown) => fieldName is keyof Values;
  getValue: (field: keyof Values) => Values[typeof field];
  setValue: (field: keyof Values, value: Values[typeof field]) => void;
  getErrors: (field: keyof Values) => string[] | null;
  submit: () => Promise<void>;
};

const FormContext = React.createContext<FormContextValue>({
  loading: false,
  values: {},
  errors: {},
  setValues: () => Promise.resolve(),
  hasField: (field: unknown): field is string => false,
  getValue: () => null,
  setValue: () => Promise.resolve(),
  getErrors: () => null,
  submit: () => Promise.resolve(),
});

export function useForm<
  Values extends Record<string, unknown> = Record<string, unknown>,
>() {
  const ctx = React.useContext<FormContextValue<Values>>(
    FormContext as React.Context<FormContextValue<Values>>,
  );
  if (!ctx) {
    throw new Error("Using useForm() outside of <FormContext.Provider>");
  }
  return ctx;
}

export type FormContextProviderProps<
  Values extends Record<string, unknown> = Record<string, unknown>,
> = React.PropsWithChildren<{
  initialValues: Values;
  validation?: ZodObject<Record<keyof Values, ZodTypeAny>>;
  onSubmit: (values: Values) => Promise<void>;
}>;

export default function FormContextProvider<
  Values extends Record<string, unknown> = Record<string, unknown>,
>({
  initialValues,
  validation,
  onSubmit,
  children,
}: FormContextProviderProps<Values>) {
  const [values, setValues] = React.useState<Values>(initialValues);
  const [errors, setErrors] = React.useState<ErrorsMap<Values>>({});

  const {
    value: loading,
    setTrue: startLoading,
    setFalse: stopLoading,
  } = useBoolean(false);

  const hasField = React.useCallback(
    (fieldName: unknown): fieldName is keyof Values =>
      typeof fieldName === "string" && fieldName in initialValues,
    [initialValues],
  );

  const getValue = React.useCallback(
    (field: keyof Values) => values[field],
    [values],
  );

  const setValue = React.useCallback(
    (field: keyof Values, value: Values[typeof field]) => {
      setValues({ ...values, [field]: value });
    },
    [values],
  );

  const getErrors = React.useCallback(
    (field: keyof Values) => errors[field] ?? null,
    [errors],
  );

  const validate = React.useCallback(() => {
    if (validation) {
      const v = validation.safeParse(values);
      if (!v.success) {
        setErrors(v.error.formErrors.fieldErrors as ErrorsMap<Values>);
        return false;
      }
      setErrors({});
      return true;
    }
    return true;
  }, [validation, values]);

  const submit = React.useCallback(async () => {
    if (loading) return;
    if (!validate()) return;
    startLoading();
    await onSubmit(values);
    stopLoading();
  }, [loading, validate, startLoading, onSubmit, values, stopLoading]);

  return (
    <FormContext.Provider
      value={
        {
          loading,
          values,
          errors,
          setValues,
          hasField,
          getValue,
          setValue,
          getErrors,
          submit,
        } as FormContextValue
      }
    >
      {children}
    </FormContext.Provider>
  );
}
