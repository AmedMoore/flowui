import { useState } from "react";
import { useIsomorphicLayoutEffect } from "usehooks-ts";

export default function usePopupPositionSensor({
  anchorRef,
  popupRef,
  visible,
  alignment,
  windowCornerMargin,
  anchorMargin,
}: {
  anchorRef: any;
  popupRef: any;
  visible: any;
  alignment: any;
  windowCornerMargin: any;
  anchorMargin: any;
}) {
  const [position, setPosition] = useState<[x: number, y: number]>([0, 0]);

  useIsomorphicLayoutEffect(() => {
    if (!visible) return;

    const anchorRect = anchorRef?.current?.getBoundingClientRect();
    const popupRect = popupRef.current?.getBoundingClientRect();

    if (!anchorRect) return;
    if (!popupRect) return;

    // center align by default
    let x = anchorRect.left + anchorRect.width / 2 - popupRect.width / 2;

    if (alignment === "left") {
      x = anchorRect.left;
    }

    if (alignment === "right") {
      x = anchorRect.right - popupRect.width;
    }

    // fix popup overflow over the window's right corner
    const left = x - windowCornerMargin;
    if (left < 0) {
      x = anchorRect.left;
    }

    // fix popup overflow over the window's left corner
    const right = x + popupRect.width + windowCornerMargin;
    if (right > window.innerWidth) {
      x = anchorRect.right - popupRect.width;
    }

    let y = anchorRect.bottom + anchorMargin;
    const bottom = y + popupRect.height + windowCornerMargin;
    if (bottom > window.innerHeight) {
      y = anchorRect.top - popupRect.height - anchorMargin;
    }

    setPosition([Math.floor(x), Math.floor(y)]);
  }, [visible, anchorRef]);

  return position;
}
