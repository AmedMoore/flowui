import React from "react";
import { IconEye, IconEyeCrossed } from "../../icons";
import styles from "./password-toggle-button.module.scss";

export default function PasswordToggleButton({
  type,
  passwordShown,
  togglePasswordShown,
}: {
  type?: string;
  passwordShown: boolean;
  togglePasswordShown: () => void;
}) {
  if (type != "password") return null;

  return (
    <button
      className={styles.button}
      onClick={togglePasswordShown}
      type="button"
    >
      {passwordShown ? <IconEyeCrossed /> : <IconEye />}
    </button>
  );
}
