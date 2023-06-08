import React from "react";
import CustomSvg, { type SVGProps } from "./custom-svg";

export default function IconAngleLeft(props: SVGProps) {
  return (
    <CustomSvg {...props}>
      <path
        d={
          "M17.17,24a1,1,0,0,1-.71-.29L8.29,15.54a5,5,0,0,1,0-7.08L16.46.29a1" +
          ",1,0,1,1,1.42,1.42L9.71,9.88a3,3,0,0,0,0,4.24l8.17,8.17a1,1,0,0,1," +
          "0,1.42A1,1,0,0,1,17.17,24Z"
        }
      />
    </CustomSvg>
  );
}
