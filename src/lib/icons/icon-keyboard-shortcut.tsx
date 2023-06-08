import React from "react";
import CustomSvg, { type SVGProps } from "./custom-svg";

export default function IconKeyboardShortcut(props: SVGProps) {
  return (
    <CustomSvg {...props} customClassName="fill-none stroke-current">
      <path
        d={
          "M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6" +
          "a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0" +
          " 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
        }
      />
    </CustomSvg>
  );
}
