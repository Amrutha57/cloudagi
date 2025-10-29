"use client";

import { useEffect } from "react";

type EventType =
  | "mousedown"
  | "mouseup"
  | "touchstart"
  | "touchend"
  | "focusin"
  | "focusout";

export function useOnClickOutside(
  target:
    | HTMLElement
    | null
    | (() => HTMLElement | null)
    | React.RefObject<HTMLElement>
    | (HTMLElement | null)[],
  handler: (event: MouseEvent | TouchEvent | FocusEvent) => void,
  eventType: EventType = "mousedown",
  eventListenerOptions: AddEventListenerOptions = {}
): void {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent | FocusEvent) => {
      let elements: (HTMLElement | null)[] = [];

      if (typeof target === "function") {
        elements = [target()];
      } else if (Array.isArray(target)) {
        elements = target;
      } else if ("current" in (target as React.RefObject<HTMLElement>)) {
        elements = [(target as React.RefObject<HTMLElement>).current];
      } else {
        elements = [target as HTMLElement | null];
      }

      // If any element contains the clicked target, do nothing
      if (
        elements.some(
          (el) => el && (el === event.target || el.contains(event.target as Node))
        )
      ) {
        return;
      }

      handler(event);
    };

    document.addEventListener(eventType, listener, eventListenerOptions);
    return () => {
      document.removeEventListener(eventType, listener, eventListenerOptions);
    };
  }, [target, handler, eventType, eventListenerOptions]);
}
