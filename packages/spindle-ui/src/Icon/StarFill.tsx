import * as React from 'react';
import { SVGProps } from 'react';

const SvgStarFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="m21.31 11.48-3.49 3.2.95 4.64c.14.7-.13 1.4-.71 1.82-.32.23-.69.35-1.06.35-.3 0-.61-.08-.89-.24L12 18.9l-4.12 2.34c-.28.16-.59.24-.89.24-.37 0-.74-.12-1.06-.35-.58-.42-.85-1.12-.71-1.82l.95-4.64-3.49-3.2a1.77 1.77 0 0 1-.5-1.88c.22-.68.8-1.15 1.51-1.23l4.7-.53 1.96-4.31c.31-.65.94-1.05 1.65-1.05s1.34.4 1.64 1.06l1.96 4.31 4.7.53c.71.08 1.29.55 1.51 1.23.22.68.03 1.4-.5 1.88Z" />
  </svg>
);

export default SvgStarFill;
