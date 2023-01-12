import * as React from 'react';
import { SVGProps } from 'react';

const SvgPlusCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8Zm5.4-8c0 .6-.4 1-1 1H13v3.4c0 .6-.4 1-1 1s-1-.4-1-1V13H7.6c-.6 0-1-.4-1-1s.4-1 1-1H11V7.6c0-.6.4-1 1-1s1 .4 1 1V11h3.4c.5 0 1 .4 1 1Z" />
  </svg>
);

export default SvgPlusCircle;
