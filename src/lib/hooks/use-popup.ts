import { useEffect, useRef } from "react";
import { useBoolean } from "usehooks-ts";
import usePopupPositionSensor from "./use-popup-position-sensor";

export default function usePopup({
  anchorRef,
  alignment,
  windowCornerMargin,
  anchorMargin,
}: {
  anchorRef: any;
  alignment: any;
  windowCornerMargin: any;
  anchorMargin: any;
}) {
  const popupRef = useRef<HTMLElement>(null);

  const {
    value: visible,
    setTrue: showPopup,
    setFalse: hidePopup,
  } = useBoolean(false);

  const [x, y] = usePopupPositionSensor({
    anchorRef,
    popupRef,
    visible,
    alignment,
    windowCornerMargin,
    anchorMargin,
  });

  useEffect(() => {
    const anchor = anchorRef.current;
    anchor?.addEventListener("mouseenter", showPopup);
    anchor?.addEventListener("mouseleave", hidePopup);
    return () => {
      anchor?.removeEventListener("mouseenter", showPopup);
      anchor?.removeEventListener("mouseleave", hidePopup);
    };
  }, [anchorRef, hidePopup, showPopup]);

  useEffect(() => {
    const popup = popupRef.current;
    if (!popup) return;
    popup.style.left = `${x}px`;
    popup.style.top = `${y}px`;
  }, [visible, x, y]);

  return [popupRef];
}
