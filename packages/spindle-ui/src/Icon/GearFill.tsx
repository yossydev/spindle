import * as React from 'react';
import { SVGProps } from 'react';

const SvgGearFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M19.4 13.15c.06-.38.1-.76.1-1.15 0-.39-.04-.77-.1-1.15l1.44-1.11c.39-.31.5-.86.25-1.29L19.62 5.9c-.25-.43-.78-.61-1.24-.43l-1.68.69c-.6-.48-1.27-.87-2-1.15l-.25-1.8c-.07-.49-.49-.86-.99-.86h-2.94c-.5 0-.92.37-.99.86l-.25 1.8c-.73.28-1.4.67-2 1.15l-1.66-.68a.996.996 0 0 0-1.24.42L2.91 8.45c-.25.43-.14.98.25 1.29l1.44 1.11c-.06.38-.1.76-.1 1.15 0 .39.04.77.1 1.15l-1.44 1.11c-.39.31-.5.86-.25 1.29l1.47 2.54c.25.43.78.61 1.24.43l1.68-.68c.6.48 1.27.87 2 1.15l.25 1.8c.07.49.49.86.99.86h2.94c.5 0 .92-.37.99-.86l.25-1.8c.73-.28 1.4-.67 2-1.15l1.68.68c.46.19.99.01 1.24-.43l1.47-2.54c.25-.43.14-.98-.25-1.29l-1.46-1.11ZM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgGearFill;
