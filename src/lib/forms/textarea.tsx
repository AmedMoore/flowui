"use client";

import React from "react";
import clsx from "clsx";
import ReactTextAreaAutosize from "react-textarea-autosize";
import { Column, Row } from "../layout";
import { useReadonlyInput } from "./input/use-readonly-input";
import InputLabel from "./input/input-label";
import InputInlineLabel from "./input/input-inline-label";
import ClearButton from "./input/clear-button";
import styles from "./input.module.scss";

export type TextAreaProps = {
  ref?: React.ForwardedRef<HTMLTextAreaElement>;
  name: string;
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
  rows?: number;
  minRows?: number;
  maxRows?: number;
  onChange?: (value: string) => void;
  onClear?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
};

function TextAreaWithForwardedRed(
  {
    name,
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
    rows,
    minRows = 3,
    maxRows,
    onChange,
    onClear,
    onFocus,
    onBlur,
  }: Omit<TextAreaProps, "ref">,
  ref: React.ForwardedRef<HTMLTextAreaElement>,
) {
  const [isReadOnly, resetReadOnly] = useReadonlyInput({
    readOnly,
    autoComplete,
  });

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
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
            <Row customClassName={styles.inlineLabel} gap="1" items="start">
              {Boolean(leadingIcon) && (
                <InputInlineLabel
                  hasErrors={Boolean(error)}
                  label={leadingIcon}
                  name={name}
                />
              )}
              {Boolean(leadingLabel) && (
                <InputInlineLabel
                  hasErrors={Boolean(error)}
                  label={leadingLabel}
                  name={name}
                />
              )}
            </Row>
          )}
          <Row customClassName={styles.inputLabelContainer} expand>
            <ReactTextAreaAutosize
              ref={ref}
              autoComplete={autoComplete}
              className={clsx(styles.input, styles.multiline)}
              disabled={disabled}
              id={name}
              name={name}
              onChange={handleChange}
              onFocus={onFocus}
              onBlur={onBlur}
              placeholder=" "
              readOnly={isReadOnly}
              value={value}
              rows={rows}
              minRows={minRows}
              maxRows={maxRows}
            />
            {Boolean(placeholder) && (
              <InputInlineLabel floating label={placeholder} name={name} />
            )}
            {clearable && !!value && (
              <Row
                customClassName={clsx(
                  styles.clearButtonContainer,
                  styles.multiline,
                )}
                gap="3"
                items="start"
              >
                <ClearButton clear={onClear} />
              </Row>
            )}
          </Row>
          {(Boolean(trailingLabel) || Boolean(trailingIcon)) && (
            <Row customClassName={styles.inlineLabel} gap="1" items="start">
              {Boolean(trailingLabel) && (
                <InputInlineLabel
                  hasErrors={Boolean(error)}
                  label={trailingLabel}
                  name={name}
                />
              )}
              {Boolean(trailingIcon) && (
                <InputInlineLabel
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

const TextArea = React.forwardRef(TextAreaWithForwardedRed);

export default TextArea;
