import { SVGProps } from "react";

export const IconNesting = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect
      width={4}
      height={4}
      x={18}
      y={15}
      stroke="#97A3B6"
      strokeWidth={2}
      rx={2}
      transform="rotate(90 18 15)"
    />
    <rect
      width={4}
      height={4}
      x={6}
      y={8}
      stroke="#97A3B6"
      strokeWidth={2}
      rx={2}
      transform="rotate(-90 6 8)"
    />
    <path
      stroke="#97A3B6"
      strokeWidth={2}
      d="M8 8v5c0 1.886 0 2.828.586 3.414C9.172 17 10.114 17 12 17h2"
    />
  </svg>
);
