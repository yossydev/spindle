import * as React from 'react';
import { SVGProps } from 'react';

const SvgPinFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="m19.048 11.85-.7-.3c-.4-.2-.8-.1-1.1.2l-2.5 2.5c-.6.6-.7 1.4-.4 2.2l.6 1.4c.2.6.1 1.2-.3 1.6-.6.6-1.6.6-2.2 0l-8-7.8c-.6-.6-.6-1.6 0-2.2.5-.4 1.1-.6 1.7-.3l1.4.6c.8.2 1.6.1 2.2-.5l2.5-2.5c.3-.3.4-.7.2-1.1l-.3-.7c-.2-.5-.1-1 .3-1.4.5-.5 1.3-.5 1.8 0l.6.6 2.5 2.5 3.1 3.1c.5.5.5 1.3 0 1.8-.3.4-.9.5-1.4.3zm-12.2 3.8-3.4 3.5c-.4.4-.4 1 0 1.4.2.2.5.3.7.3.2 0 .5-.1.7-.3l3.5-3.5-1.5-1.4z" />
  </svg>
);

export default SvgPinFill;
