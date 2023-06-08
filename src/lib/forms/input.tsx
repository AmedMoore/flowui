"use client";

import React from "react";
import clsx from "clsx";

import { Column, Row } from "../layout";
import { useManagedInputType } from "../hooks";
import { useReadonlyInput } from "./input/use-readonly-input";
import InputLabel from "./input/input-label";
import PasswordToggleButton from "./input/password-toggle-button";
import ClearButton from "./input/clear-button";
import styles from "./input.module.scss";

export type InputProps = {
  ref?: React.ForwardedRef<HTMLInputElement>;
  name: string;
  type?: "text" | "number" | "email" | "password";
  label?: React.ReactNode;
  placeholder?: string;
  helperText?: string;
  clearable?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  leadingIcon?: JSX.Element;
  leadingLabel?: string;
  trailingIcon?: JSX.Element;
  trailingLabel?: string;
  autoComplete?: string;
  value?: string;
  error?: string | null;
  onChange?: (value: string) => void;
  onClear?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
};

function InputWithForwardedRed(
  {
    name,
    type,
    label,
    placeholder,
    helperText,
    clearable,
    disabled,
    readOnly,
    leadingIcon,
    leadingLabel,
    trailingIcon,
    trailingLabel,
    autoComplete,
    value,
    error,
    onChange,
    onClear,
    onFocus,
    onBlur,
  }: Omit<InputProps, "ref">,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const { managedType, passwordShown, togglePasswordShown } =
    useManagedInputType(type);

  const [isReadOnly, resetReadOnly] = useReadonlyInput({
    readOnly,
    autoComplete,
  });

  const isPassword = React.useMemo(() => type == "password", [type]);

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(event.target.value);
      }
    },
    [onChange],
  );

  return (
    <Column customClassName={styles.inputWrapper} onClick={resetReadOnly}>
      <InputLabel name={name} label={label} />
      <Row
        customClassName={clsx(styles.inputContainer, {
          [styles.errorInput]: Boolean(error),
        })}
        expand
        gap="3"
        items="center"
      >
        <Row customClassName={styles.inputRow} expand gap="1" items="center">
          {(Boolean(leadingIcon) || Boolean(leadingLabel)) && (
            <Row customClassName={styles.inlineLabel} gap="1" items="center">
              {Boolean(leadingIcon) && (
                <Label
                  hasErrors={Boolean(error)}
                  label={leadingIcon}
                  name={name}
                />
              )}
              {Boolean(leadingLabel) && (
                <Label
                  hasErrors={Boolean(error)}
                  label={leadingLabel}
                  name={name}
                />
              )}
            </Row>
          )}
          <Row customClassName={styles.inputLabelContainer} expand>
            <input
              ref={ref}
              autoComplete={autoComplete}
              className={styles.input}
              disabled={disabled}
              id={name}
              name={name}
              onChange={handleChange}
              onFocus={onFocus}
              onBlur={onBlur}
              placeholder=" "
              readOnly={isReadOnly}
              type={managedType}
              value={value}
            />
            {Boolean(placeholder) && (
              <Label floating label={placeholder} name={name} />
            )}
            {(clearable || isPassword) && (
              <Row
                customClassName={styles.clearButtonContainer}
                gap="3"
                items="center"
              >
                {!!value && <ClearButton clear={onClear} />}
                <PasswordToggleButton
                  passwordShown={passwordShown}
                  togglePasswordShown={togglePasswordShown}
                  type={type}
                />
              </Row>
            )}
          </Row>
          {(Boolean(trailingLabel) || Boolean(trailingIcon)) && (
            <Row customClassName={styles.inlineLabel} gap="1" items="center">
              {Boolean(trailingLabel) && (
                <Label
                  hasErrors={Boolean(error)}
                  label={trailingLabel}
                  name={name}
                />
              )}
              {Boolean(trailingIcon) && (
                <Label
                  hasErrors={Boolean(error)}
                  label={trailingIcon}
                  name={name}
                />
              )}
            </Row>
          )}
        </Row>
      </Row>
      {(helperText || Boolean(error)) && (
        <div
          className={clsx(styles.helperText, {
            [styles.errorText]: Boolean(error),
          })}
        >
          {error || helperText}
        </div>
      )}
    </Column>
  );
}

function Label({
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

const Input = React.forwardRef(InputWithForwardedRed);

export default Input;
