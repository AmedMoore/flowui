import React from "react";
import clsx from "clsx";
import styles from "./input-label.module.scss";

export default function InputLabel({
  name,
  label,
}: {
  name?: string;
  label?: React.ReactNode;
}) {
  return (
    <label
      className={clsx(styles.label, {
        [styles.empty]: !label,
      })}
      htmlFor={name}
    >
      {label}
    </label>
  );
}
