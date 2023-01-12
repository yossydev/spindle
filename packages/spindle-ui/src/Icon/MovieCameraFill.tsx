import * as React from 'react';
import { SVGProps } from 'react';

const SvgMovieCameraFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M12.27 12a2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1 5 0Zm9.74-4.23v8.46c0 .83-.96 1.3-1.62.79l-2.89-2.27v.75c0 1.66-1.34 3-3 3H5c-1.66 0-3-1.34-3-3v-7c0-1.66 1.34-3 3-3h9.5c1.66 0 3 1.34 3 3v.75l2.89-2.27c.65-.51 1.62-.05 1.62.79ZM13.77 12c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4-1.79 4-4Z" />
  </svg>
);

export default SvgMovieCameraFill;
