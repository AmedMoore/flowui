import React from "react";
import CustomSvg, { type SVGProps } from "./custom-svg";

export default function IconArrowRight(props: SVGProps) {
  return (
    <CustomSvg {...props}>
      <path
        d={
          "M23.12,9.91,19.25,6a1,1,0,0,0-1.42,0h0a1,1,0,0,0,0,1.41L21.39,11H1" +
          "a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H21.45l-3.62,3.61a1,1,0,0,0,0,1.42h0" +
          "a1,1,0,0,0,1.42,0l3.87-3.88A3,3,0,0,0,23.12,9.91Z"
        }
      />
    </CustomSvg>
  );
}
