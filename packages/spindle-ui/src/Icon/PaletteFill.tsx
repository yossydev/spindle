import * as React from 'react';
import { SVGProps } from 'react';

const SvgPaletteFill = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.56 4.5C9.09 2.72 3.06 6.62 2.17 10.86c-1.56 7.48 7.59 10.49 13.17 8.48 3.01-1.12 3.01-3.35 2.01-4.46-1.12-1.23-.67-3.46 1.45-2.68 2.12.78 2.79.22 3.12-.78.56-2.01-2.01-5.8-6.36-6.92ZM6.02 15.48a1.33 1.33 0 1 1 0-2.66c.74 0 1.33.59 1.33 1.33 0 .74-.6 1.33-1.33 1.33Zm.89-3.79a1.33 1.33 0 1 1-.001-2.659 1.33 1.33 0 0 1 .001 2.66Zm3.14-2.24a1.33 1.33 0 1 1-.001-2.659 1.33 1.33 0 0 1 .001 2.66Zm3.92-.33a1.33 1.33 0 1 1-.001-2.659 1.33 1.33 0 0 1 .001 2.66Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgPaletteFill;
