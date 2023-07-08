"use client";

import React from "react";

import { useForm } from "./form-context";
import Input, { type InputProps } from "./input";

export default function FormField({ name, ...props }: InputProps) {
  const { hasField, getValue, setValue, getErrors } = useForm();

  const value = React.useMemo(
    () => (hasField(name) ? getValue(name) : ""),
    [name, hasField, getValue],
  ) as string;

  const errors = React.useMemo(
    () => (hasField(name) ? getErrors(name) : []) ?? [],
    [name, hasField, getErrors],
  );

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (hasField(name)) {
        setValue(name, event.target.value);
      }
    },
    [name, hasField, setValue],
  );

  const handleClear = React.useCallback(() => {
    if (hasField(name)) {
      setValue(name, "" as unknown);
    }
  }, [name, hasField, setValue]);

  return (
    <Input
      {...props}
      error={errors.length ? errors[0] : null}
      name={name}
      onChange={handleChange}
      onClear={handleClear}
      value={value}
    />
  );
}
