import { useCallback, useEffect, useState } from "react";

import { ScreenSize } from "./types";
import ScreenSizeContext from ".";

export default function ScreenSizeProvider({
  children,
}: React.PropsWithChildren): JSX.Element {
  const [screenSize, setScreenSize] = useState<ScreenSize>({
    x: window.innerWidth,
    y: window.innerHeight,
  });

  const handleResize = useCallback(() => {
    setScreenSize({ x: window.innerWidth, y: window.innerHeight });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ScreenSizeContext.Provider value={screenSize}>
      {children}
    </ScreenSizeContext.Provider>
  );
}
