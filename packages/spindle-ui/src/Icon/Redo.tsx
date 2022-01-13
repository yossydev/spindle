import * as React from 'react';
import { SVGProps } from 'react';

const SvgRedo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M20.56 13.61c0 3.94-3.2 7.14-7.14 7.14H9c-.55 0-1-.45-1-1s.45-1 1-1h4.42c2.83 0 5.14-2.31 5.14-5.14 0-2.83-2.31-5.14-5.14-5.14H8.59v2.19c0 .89-1.08 1.34-1.71.71L3.74 8.21a.996.996 0 0 1 0-1.41l3.15-3.15c.63-.63 1.71-.18 1.71.71v2.11h4.82c3.93-.01 7.14 3.2 7.14 7.14z" />
  </svg>
);

export default SvgRedo;
