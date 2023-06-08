import React from "react";
import CustomSvg, { type SVGProps } from "./custom-svg";

export default function IconAngleRight(props: SVGProps) {
  return (
    <CustomSvg {...props}>
      <path
        d={
          "M7,24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l8.17-8.17a3,3,0,0,0,0-4.2" +
          "4L6.29,1.71A1,1,0,0,1,7.71.29l8.17,8.17a5,5,0,0,1,0,7.08L7.71,23.7" +
          "1A1,1,0,0,1,7,24Z"
        }
      />
    </CustomSvg>
  );
}
