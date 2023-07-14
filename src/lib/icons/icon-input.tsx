import React from "react";
import CustomSvg, { type SVGProps } from "./custom-svg";

export default function IconInput(props: SVGProps) {
  return (
    <CustomSvg {...props}>
      <path
        d={
          "m7,8v8c0,.553-.448,1-1,1s-1-.447-1-1v-8c0-.553.448-1,1-1s1,.447,1" +
          ",1Zm17,0v8c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5v-8C0,5.243," +
          "2.243,3,5,3h14c2.757,0,5,2.243,5,5Zm-2,0c0-1.654-1.346-3-3-3H5c-1" +
          ".654,0-3,1.346-3,3v8c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3v-8Z"
        }
      />
    </CustomSvg>
  );
}
