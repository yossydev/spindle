import * as React from 'react';
import { SVGProps } from 'react';

const SvgPencilBold = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="m19.6 9.2-4.9-4.9c-.2-.2-.2-.5 0-.7l1.8-1.8c.4-.4 1-.4 1.4 0L22.1 6c.4.4.4 1 0 1.4l-1.8 1.8c-.2.2-.5.2-.7 0zm-7-3.5-8.1 8.1L3 19.7c-.2.7.5 1.4 1.2 1.2l5.8-1.4 8.1-8.1c.2-.2.2-.5 0-.7l-4.9-4.9c-.1-.3-.5-.3-.6-.1z" />
  </svg>
);

export default SvgPencilBold;
