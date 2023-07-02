import type { PropsWithChildren } from "react";
import styles from "./code.module.scss";

export function Code({ children }: PropsWithChildren) {
  return <code className={styles.code}>{children}</code>;
}
