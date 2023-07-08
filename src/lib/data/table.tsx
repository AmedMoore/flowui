import React from "react";
import Card from "../layout/card";
import Text from "../basic/text";
import type { Shadow } from "../layout/shadow-style-name";
import styles from "./table.module.scss";

export type ColumnData<TData extends Record<string, unknown>> = {
  label: string;
  dataKey: keyof TData;
  width?: number;
  colSpan?: number;
  format?: (value: TData[keyof TData]) => string;
  component?: (props: React.PropsWithChildren) => React.ReactNode;
};

export type TableProps<TData extends Record<string, unknown>> = {
  columns: ColumnData<TData>[];
  data: TData[];
  caption?: string;
  shadow?: true | Shadow;
};

const defaultColFormatFn = (v: unknown) => `${v}`;

export default function Table<TData extends Record<string, unknown> = {}>({
  columns,
  data,
  caption,
  shadow,
}: TableProps<TData>) {
  return (
    <Card fullWidth shadow={shadow} customClassName={styles.card}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((col, idx) => (
              <th key={`${idx}-${col.label}`} className={styles.headCol}>
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className={styles.bodyRow} tabIndex={0}>
              {columns.map((col, idx) => (
                <td key={`${idx}-${col.label}`} className={styles.bodyCol}>
                  {React.createElement(col.component || "span", {}, [
                    (col.format || defaultColFormatFn)(row[col.dataKey]),
                  ])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        {!!caption && (
          <caption className={styles.caption}>
            <Text align="left" size="sm" color="hint">
              {caption}
            </Text>
          </caption>
        )}
      </table>
    </Card>
  );
}
