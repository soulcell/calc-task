import React from "react";

import { ScreenSize } from "./types";

const ScreenSizeContext = React.createContext<ScreenSize>({ x: 320, y: 320 });

export default ScreenSizeContext;
