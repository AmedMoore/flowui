import React from "react";
import CustomSvg, { type SVGProps } from "./custom-svg";

export default function IconSpinner(props: SVGProps) {
  return (
    <CustomSvg {...props}>
      <path
        d={
          "M12,24A12,12,0,1,1,22.714,6.59a1,1,0,1,1-1.785.9,10,10,0,1,0-.011," +
          "9.038,1,1,0,0,1,1.781.908A11.955,11.955,0,0,1,12,24Z"
        }
      />
    </CustomSvg>
  );
}
