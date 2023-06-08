import React from "react";
import { IconCrossSmall } from "../../icons";
import { Button } from "../../basic";

export default function ClearButton({ clear }: { clear?: () => void }) {
  return (
    <Button
      variant="text"
      color="secondary"
      onClick={clear}
      style={{ padding: 3 }}
    >
      <IconCrossSmall size={14} />
    </Button>
  );
}
