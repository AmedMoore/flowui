import React from "react";
import CustomSvg, { type SVGProps } from "./custom-svg";

export default function IconSystem(props: SVGProps) {
  return (
    <CustomSvg {...props}>
      <path
        d={
          "M19,3H5A5.006,5.006,0,0,0,0,8v6a5.006,5.006,0,0,0,5,5h6v1H8a1,1,0," +
          "0,0,0,2h8a1,1,0,0,0,0-2H13V19h6a5.006,5.006,0,0,0,5-5V8A5.006,5.00" +
          "6,0,0,0,19,3Zm3,11a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V8A3,3,0,0,1,5,5H1" +
          "9a3,3,0,0,1,3,3Z"
        }
      />
    </CustomSvg>
  );
}
