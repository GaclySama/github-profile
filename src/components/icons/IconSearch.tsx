import { SVGProps } from "react";

export const IconSearch = ({
  width = 24,
  height = 24,
  fill = "none",
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill={fill}
  >
    <circle cx={11} cy={11} r={7} stroke="#CDD5E0" strokeWidth={2} />
    <path
      stroke="#CDD5E0"
      strokeLinecap="round"
      strokeWidth={2}
      d="m20 20-3-3"
    />
  </svg>
);
