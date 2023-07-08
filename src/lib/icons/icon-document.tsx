import React from "react";
import CustomSvg, { type SVGProps } from "./custom-svg";

export default function IconDocument(props: SVGProps) {
  return (
    <CustomSvg {...props}>
      <path
        d={
          "m17 14a1 1 0 0 1 -1 1h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1zm-4 3h-5a1" +
          " 1 0 0 0 0 2h5a1 1 0 0 0 0-2zm9-6.515v8.515a5.006 5.006 0 0 1 -5 " +
          "5h-10a5.006 5.006 0 0 1 -5-5v-14a5.006 5.006 0 0 1 5-5h4.515a6.95" +
          "8 6.958 0 0 1 4.95 2.05l3.484 3.486a6.951 6.951 0 0 1 2.051 4.949" +
          "zm-6.949-7.021a5.01 5.01 0 0 0 -1.051-.78v4.316a1 1 0 0 0 1 1h4.3" +
          "16a4.983 4.983 0 0 0 -.781-1.05zm4.949 7.021c0-.165-.032-.323-.04" +
          "7-.485h-4.953a3 3 0 0 1 -3-3v-4.953c-.162-.015-.321-.047-.485-.04" +
          "7h-4.515a3 3 0 0 0 -3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3z"
        }
      />
    </CustomSvg>
  );
}
