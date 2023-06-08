import React from "react";
import CustomSvg, { type SVGProps } from "./custom-svg";

export default function IconMoreVertical(props: SVGProps) {
  return (
    <CustomSvg {...props}>
      <circle cx="12" cy="2" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="12" cy="22" r="2" />
    </CustomSvg>
  );
}
