import React from "react";
import CustomSvg, { type SVGProps } from "./custom-svg";

export default function IconArrowRightSmall(props: SVGProps) {
  return (
    <CustomSvg {...props}>
      <path
        d={
          "M18,12h0a2,2,0,0,0-.59-1.4l-4.29-4.3a1,1,0,0,0-1.41,0,1,1,0,0,0,0," +
          "1.42L15,11H5a1,1,0,0,0,0,2H15l-3.29,3.29a1,1,0,0,0,1.41,1.42l4.29-" +
          "4.3A2,2,0,0,0,18,12Z"
        }
      />
    </CustomSvg>
  );
}
