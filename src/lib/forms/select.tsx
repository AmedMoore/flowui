"use client";

import React from "react";
import { useBoolean } from "usehooks-ts";
import Input, { type InputProps } from "./input";
import Dropdown, { DropdownMenu, DropdownMenuItem } from "../layout/dropdown";
import Text from "../basic/text";
import Column from "../layout/column";
import type { ElementType } from "@flowui/react/types/element-type";
import styles from "./select.module.scss";

export type SelectOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

export type SelectProps = InputProps & {
  options: SelectOption[];
  multiple?: boolean;
};

export type SelectComponent = ElementType<SelectProps, HTMLInputElement>;

function SelectWithForwardedRef(
  {
    options,
    value,
    onChange,
    onValueChange,
    ...props
  }: Omit<SelectProps, "ref">,
  forwardedRef: React.ForwardedRef<HTMLInputElement>,
) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const fallbackRef = React.useRef<HTMLInputElement>(null);
  const [filter, setFilter] = React.useState("");
  const {
    value: menuOpen,
    setTrue: openMenu,
    setFalse: closeMenu,
  } = useBoolean(false);

  const inputRef = forwardedRef ?? fallbackRef;
  const dropdownAnchorRef =
    (typeof forwardedRef === "object" && forwardedRef) || fallbackRef;

  const filteredOptions = React.useMemo(() => {
    if (!filter) return options;
    return options.filter(({ label }) =>
      label.toLowerCase().includes(filter.trim().toLowerCase()),
    );
  }, [options, filter]);

  const handleSelectChange = React.useCallback(
    (value: string) => {
      if (onValueChange) {
        onValueChange(value);
      }
      setFilter("");
    },
    [onValueChange],
  );

  const handleFilterChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFilter(event.target.value);
    },
    [],
  );

  const handleClearValue = React.useCallback(() => {
    if (onValueChange) {
      onValueChange("");
    }
  }, [onValueChange]);

  const displayValue = React.useMemo(
    () => filter || options.find((o) => o.value === value)?.label || "",
    [filter, options, value],
  );

  return (
    <div ref={containerRef}>
      <Input
        {...props}
        ref={inputRef}
        value={displayValue}
        onChange={handleFilterChange}
        onFocus={openMenu}
        onClear={handleClearValue}
      />
      <Dropdown
        open={menuOpen}
        onOpen={openMenu}
        onClose={closeMenu}
        containerRef={containerRef}
        anchorRef={dropdownAnchorRef}
      >
        <DropdownMenu align="left" customClassName={styles.dropdownMenu}>
          <Column expand>
            {filteredOptions.length ? (
              filteredOptions.map((option) => (
                <SelectOption
                  key={option.value}
                  option={option}
                  onSelect={handleSelectChange}
                />
              ))
            ) : (
              <Text color="hint" size="sm" customClassName="p-3">
                No Results
              </Text>
            )}
          </Column>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

function SelectOption({
  option,
  onSelect,
}: {
  option: SelectOption;
  onSelect: (value: string) => void;
}) {
  const handleSelect = React.useCallback(() => {
    onSelect(option.value);
  }, [option.value, onSelect]);

  return (
    <DropdownMenuItem
      onClick={handleSelect}
      disabled={option.disabled}
      toggleMenuOnClick
    >
      <Text size="sm" color="secondary" align="left" customClassName="truncate">
        {option.label}
      </Text>
    </DropdownMenuItem>
  );
}

const Select = React.forwardRef(SelectWithForwardedRef) as SelectComponent;

export default Select;
