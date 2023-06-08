import React from "react";
import CustomSvg, { type SVGProps } from "./custom-svg";

export default function IconMoreHorizontal(props: SVGProps) {
  return (
    <CustomSvg {...props}>
      <circle cx="2" cy="12" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="22" cy="12" r="2" />
    </CustomSvg>
  );
}
