import React from "react";
import CustomSvg, { type SVGProps } from "./custom-svg";

export default function IconAngleLeftSmall(props: SVGProps) {
  return (
    <CustomSvg {...props}>
      <path
        d={
          "M10.6,12.71a1,1,0,0,1,0-1.42l4.59-4.58a1,1,0,0,0,0-1.42,1,1,0,0,0-" +
          "1.41,0L9.19,9.88a3,3,0,0,0,0,4.24l4.59,4.59a1,1,0,0,0,.7.29,1,1,0," +
          "0,0,.71-.29,1,1,0,0,0,0-1.42Z"
        }
      />
    </CustomSvg>
  );
}
