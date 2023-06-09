import React from "react";
import CustomSvg, { type SVGProps } from "./custom-svg";

export default function IconArrowLeftSmall(props: SVGProps) {
  return (
    <CustomSvg {...props}>
      <path
        d={
          "M19,11H9l3.29-3.29a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0l-4.29,4.3A2,2" +
          ",0,0,0,6,12H6a2,2,0,0,0,.59,1.4l4.29,4.3a1,1,0,1,0,1.41-1.42L9,13H" +
          "19a1,1,0,0,0,0-2Z"
        }
      />
    </CustomSvg>
  );
}
