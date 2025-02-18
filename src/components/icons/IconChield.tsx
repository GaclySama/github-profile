import { SVGProps } from "react";

export const IconChield = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#97A3B6"
      strokeLinecap="round"
      strokeWidth={2}
      d="M16.8 16.4 15 17.75a5 5 0 0 1-6 0L7.2 16.4A8 8 0 0 1 4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4a8 8 0 0 1-3.2 6.4Z"
    />
    <circle cx={12} cy={10} r={1} fill="#97A3B6" />
    <circle cx={9} cy={10} r={1} fill="#97A3B6" />
    <circle cx={15} cy={10} r={1} fill="#97A3B6" />
  </svg>
);
