import React from "react";
import clsx from "clsx";
import styles from "../input.module.scss";

export default function InputInlineLabel({
  name,
  label,
  floating,
  hasErrors,
}: {
  name?: string;
  label?: string | JSX.Element;
  floating?: boolean;
  hasErrors?: boolean;
}) {
  if (!label) return null;
  return (
    <label
      className={clsx(styles.placeholder, {
        [styles.floatingLabel]: floating,
        [styles.errorText]: hasErrors,
      })}
      htmlFor={name}
    >
      {label}
    </label>
  );
}
