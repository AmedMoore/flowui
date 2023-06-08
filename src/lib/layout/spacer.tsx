import React from "react";

export default function Spacer({ x, y }: { x?: number; y?: number }) {
  return <div style={{ minWidth: x, minHeight: y, width: x, height: y }} />;
}
