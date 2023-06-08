import React from "react";
import CustomSvg, { type SVGProps } from "./custom-svg";

export default function IconAngleUpSmall(props: SVGProps) {
  return (
    <CustomSvg {...props}>
      <path
        d={
          "M18,15.5a1,1,0,0,1-.71-.29l-4.58-4.59a1,1,0,0,0-1.42,0L6.71,15.21a" +
          "1,1,0,0,1-1.42-1.42L9.88,9.21a3.06,3.06,0,0,1,4.24,0l4.59,4.58a1,1" +
          ",0,0,1,0,1.42A1,1,0,0,1,18,15.5Z"
        }
      />
    </CustomSvg>
  );
}
