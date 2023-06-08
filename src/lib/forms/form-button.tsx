"use client";

import React from "react";
import Button, { type ButtonProps } from "../basic/button";
import { useForm } from "./form-context";

export default function FormButton({
  width = "full",
  disabled,
  children,
  ...props
}: React.PropsWithChildren<ButtonProps>) {
  const { loading } = useForm();

  return (
    <Button
      {...props}
      disabled={loading || disabled}
      loading={loading}
      type="submit"
      width={width}
    >
      {children}
    </Button>
  );
}
