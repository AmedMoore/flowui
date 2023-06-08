import React from "react";
import CustomSvg, { type SVGProps } from "./custom-svg";

export default function IconArrowLeft(props: SVGProps) {
  return (
    <CustomSvg {...props}>
      <path
        d={
          "M.88,14.09,4.75,18a1,1,0,0,0,1.42,0h0a1,1,0,0,0,0-1.42L2.61,13H23a" +
          "1,1,0,0,0,1-1h0a1,1,0,0,0-1-1H2.55L6.17,7.38A1,1,0,0,0,6.17,6h0A1," +
          "1,0,0,0,4.75,6L.88,9.85A3,3,0,0,0,.88,14.09Z"
        }
      />
    </CustomSvg>
  );
}
