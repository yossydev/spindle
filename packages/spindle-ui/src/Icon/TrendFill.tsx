import * as React from 'react';
import { SVGProps } from 'react';

const SvgTrendFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M12.03 2C6.49 2 2 6.49 2 12.03c0 1.51.34 2.93.94 4.21l2.53-4.45c.36-.63 1.01-1.01 1.74-1.01s1.38.38 1.74 1.01l2.28 4.02 2.3-4.05-1.66-.79a.998.998 0 0 1-.08-1.76l4.38-2.6a1 1 0 0 1 1.5.72l.74 5.04c.12.79-.7 1.39-1.42 1.05l-1.64-.78-2.37 4.18c-.36.63-1.01 1.01-1.74 1.01s-1.38-.38-1.74-1.01L7.22 12.8l-3.1 5.39c1.84 2.35 4.69 3.87 7.91 3.87 5.54 0 10.03-4.49 10.03-10.03C22.06 6.49 17.57 2 12.03 2Z" />
  </svg>
);

export default SvgTrendFill;
