import * as React from 'react';
import { SVGProps } from 'react';

const SvgMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M19.5 13h-15c-.55 0-1-.45-1-1s.45-1 1-1h15c.55 0 1 .45 1 1s-.45 1-1 1Z" />
  </svg>
);

export default SvgMinus;
