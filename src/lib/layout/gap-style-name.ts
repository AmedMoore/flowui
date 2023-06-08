export type FlexGapValue =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 14
  | 16
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 44
  | 48
  | 52
  | 56
  | 60
  | 64
  | 72
  | 80
  | 96;

export type FlexGap = FlexGapValue | `${FlexGapValue}`;

export const gapStyleName: Record<FlexGap, string> = {
  0: "gap_0",
  1: "gap_1",
  2: "gap_2",
  3: "gap_3",
  4: "gap_4",
  5: "gap_5",
  6: "gap_6",
  7: "gap_7",
  8: "gap_8",
  9: "gap_9",
  10: "gap_10",
  11: "gap_11",
  12: "gap_12",
  14: "gap_14",
  16: "gap_16",
  20: "gap_20",
  24: "gap_24",
  28: "gap_28",
  32: "gap_32",
  36: "gap_36",
  40: "gap_40",
  44: "gap_44",
  48: "gap_48",
  52: "gap_52",
  56: "gap_56",
  60: "gap_60",
  64: "gap_64",
  72: "gap_72",
  80: "gap_80",
  96: "gap_96",
};
