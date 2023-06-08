import React from "react";
import CustomSvg, { type SVGProps } from "./custom-svg";

export default function IconBars(props: SVGProps) {
  return (
    <CustomSvg {...props}>
      <rect height="2" rx="1" width="24" y="11" />
      <rect height="2" rx="1" width="24" y="4" />
      <rect height="2" rx="1" width="24" y="18" />
    </CustomSvg>
  );
}
