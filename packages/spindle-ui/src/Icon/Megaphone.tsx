import * as React from 'react';
import { SVGProps } from 'react';

const SvgMegaphone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M20 2.75h-2c-.8 0-1.5.5-1.8 1.2l-8.3 2.3H5c-1.7 0-3 1.3-3 3v3c0 1.2.7 2.2 1.7 2.7l2.1 5.1c.3.7 1 1.2 1.8 1.2h1.2c.6 0 1.1-.2 1.5-.7.4-.4.6-1 .5-1.5l-.3-3.1 5.6 1.5c.3.7 1 1.2 1.8 1.2h2c1.1 0 2-.9 2-2V4.75c.1-1.1-.8-2-1.9-2ZM4 9.25c0-.6.4-1 1-1h1.5c.3 0 .5.2.5.5v4c0 .3-.2.5-.5.5H5c-.5 0-1-.5-1-1v-3Zm3.7 10-1.6-3.8 2.5.3.3 3.6H7.7v-.1ZM16 6.05v9.4l-6.6-1.8c-.3-.1-.4-.3-.4-.5v-4.8c0-.2.2-.4.4-.5l6.6-1.8Zm3.5 10.7h-1c-.3 0-.5-.2-.5-.5v-11c0-.3.2-.5.5-.5h1c.3 0 .5.2.5.5v11c0 .3-.2.5-.5.5Z" />
  </svg>
);

export default SvgMegaphone;
