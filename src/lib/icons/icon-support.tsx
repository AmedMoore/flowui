import React from "react";
import CustomSvg, { type SVGProps } from "./custom-svg";

export default function IconSupport(props: SVGProps) {
  return (
    <CustomSvg {...props}>
      <path
        d={
          "M21,12.424V11A9,9,0,0,0,3,11v1.424A5,5,0,0,0,5,22a2,2,0,0,0,2-2V14" +
          "a2,2,0,0,0-2-2V11a7,7,0,0,1,14,0v1a2,2,0,0,0-2,2v6H14a1,1,0,0,0,0," +
          "2h5a5,5,0,0,0,2-9.576ZM5,20H5a3,3,0,0,1,0-6Zm14,0V14a3,3,0,0,1,0,6Z"
        }
      />
    </CustomSvg>
  );
}
