import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowRightCircleFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Zm5.5 11.4-3.3 3.3c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l2.3-2.3H6.5c-.6 0-1-.4-1-1s.4-1 1-1h8.6l-2.3-2.3c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l3.3 3.3c.4.4.6.9.6 1.4 0 .5-.2 1-.6 1.4Z" />
  </svg>
);

export default SvgArrowRightCircleFill;
