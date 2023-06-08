export type Shadow =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "inner";

export const shadowStyleName: Record<Shadow, string> = {
  0: "shadow_0",
  1: "shadow_1",
  2: "shadow_2",
  3: "shadow_3",
  4: "shadow_4",
  5: "shadow_5",
  inner: "shadow_inner",
};
