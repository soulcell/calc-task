import { SVGAttributes, useMemo } from "react";
import ICONS from "@constants/icons";

type SVGProps = {
  icon: (typeof ICONS)[number];
} & SVGAttributes<SVGSVGElement>;

export default function SVG(props: SVGProps) {
  const { icon } = props;
  const xlinkHref = useMemo(() => `/icons.svg#${icon}`, [icon]);
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg">
      <use xlinkHref={xlinkHref} />
    </svg>
  );
}
