import React from "react";
import CustomSvg, { type SVGProps } from "./custom-svg";

export default function IconCopy(props: SVGProps) {
  return (
    <CustomSvg {...props}>
      <path
        d={
          "m15 20h-10a5.006 5.006 0 0 1 -5-5v-10a5.006 5.006 0 0 1 5-5h10a5." +
          "006 5.006 0 0 1 5 5v10a5.006 5.006 0 0 1 -5 5zm-10-18a3 3 0 0 0 -" +
          "3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-10a3 3 0 0 0 -3-3zm19 17v-" +
          "13a1 1 0 0 0 -2 0v13a3 3 0 0 1 -3 3h-13a1 1 0 0 0 0 2h13a5.006 5." +
          "006 0 0 0 5-5z"
        }
      />
    </CustomSvg>
  );
}
