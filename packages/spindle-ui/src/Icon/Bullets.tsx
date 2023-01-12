import * as React from 'react';
import { SVGProps } from 'react';

const SvgBullets = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M8 6.6c0-.55.45-1 1-1h11c.55 0 1 .45 1 1s-.45 1-1 1H9c-.55 0-1-.44-1-1ZM4.5 5.1c-.83 0-1.5.68-1.5 1.5s.67 1.5 1.5 1.5S6 7.43 6 6.6s-.67-1.5-1.5-1.5ZM20 11.08H9c-.55 0-1 .45-1 1s.45 1 1 1h11c.55 0 1-.45 1-1s-.45-1-1-1Zm-15.5-.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5ZM20 16.66H9c-.55 0-1 .45-1 1s.45 1 1 1h11c.55 0 1-.45 1-1s-.45-1-1-1Zm-15.5-.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgBullets;
