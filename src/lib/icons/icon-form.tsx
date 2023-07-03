import React from "react";
import CustomSvg, { type SVGProps } from "./custom-svg";

export default function IconForm(props: SVGProps) {
  return (
    <CustomSvg {...props}>
      <path
        d={
          "m10 10a3 3 0 0 0 0 6h4a3 3 0 0 0 0-6zm5 3a1 1 0 0 1 -1 1h-4a1 1 0" +
          " 0 1 0-2h4a1 1 0 0 1 1 1zm2 6a1 1 0 0 1 -1 1h-8a1 1 0 0 1 0-2h8a1" +
          " 1 0 0 1 1 1zm2.536-15.879-1.658-1.656a4.968 4.968 0 0 0 -3.535-1" +
          ".465h-6.343a5.006 5.006 0 0 0 -5 5v14a5.006 5.006 0 0 0 5 5h8a5.0" +
          "06 5.006 0 0 0 5-5v-12.343a4.968 4.968 0 0 0 -1.464-3.536zm-1.414" +
          " 1.414a3.1 3.1 0 0 1 .378.465h-2.5v-2.5a2.932 2.932 0 0 1 .464.37" +
          "7zm.878 14.465a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3-3v-14a3 3 0 0 1 3-3" +
          "h6v3a2 2 0 0 0 2 2h3z"
        }
      />
    </CustomSvg>
  );
}