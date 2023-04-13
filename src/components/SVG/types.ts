import { SVGAttributes } from "react";
import ICONS from "@constants/icons";

export type SVGProps = {
  icon: (typeof ICONS)[number];
} & SVGAttributes<SVGSVGElement>;
