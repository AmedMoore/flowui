import React from "react";
import CustomSvg, { type SVGProps } from "./custom-svg";

export default function IconCircle(props: SVGProps) {
  return (
    <CustomSvg {...props}>
      <path
        d={
          "M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12," +
          "10,10,0,0,1,12,22Z"
        }
      />
    </CustomSvg>
  );
}
