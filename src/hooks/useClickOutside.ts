import { useCallback, useEffect, useRef } from "react";

export default function useClickOutside<T extends HTMLElement>(
  callback: () => void
) {
  const ref = useRef<T>(null);

  const clickHandler = useCallback((e: Event) => {
    if (!ref.current?.contains(e.target as Node)) {
      callback();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", clickHandler);
    return () => document.removeEventListener("mousedown", clickHandler);
  }, []);

  return ref;
}
