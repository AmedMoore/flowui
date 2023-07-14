import React from "react";
import CustomSvg, { type SVGProps } from "./custom-svg";

export default function IconItalic(props: SVGProps) {
  return (
    <CustomSvg {...props}>
      <path
        d={
          "M20,0H7A1,1,0,0,0,7,2h5.354L9.627,22H4a1,1,0,0,0,0,2H17a1,1,0,0,0" +
          ",0-2H11.646L14.373,2H20a1,1,0,0,0,0-2Z"
        }
      />
    </CustomSvg>
  );
}
