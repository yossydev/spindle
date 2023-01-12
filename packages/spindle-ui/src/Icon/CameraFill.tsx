import * as React from 'react';
import { SVGProps } from 'react';

const SvgCameraFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M19 5.5h-2.14L16 4.33c-.38-.51-.97-.81-1.61-.81H9.62A2 2 0 0 0 8 4.34L7.16 5.5H5c-1.66 0-3 1.34-3 3v8.99c0 1.66 1.34 3 3 3h14c1.66 0 3-1.34 3-3V8.5c0-1.66-1.34-3-3-3Zm-7 12.49c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5Zm3-5c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3Z" />
  </svg>
);

export default SvgCameraFill;
