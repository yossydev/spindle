import * as React from 'react';
import { SVGProps } from 'react';

const SvgExclamationmark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M12 15.5c-.8 0-1.5-.7-1.5-1.5V5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v9c0 .8-.7 1.5-1.5 1.5Zm0 2c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5Z" />
  </svg>
);

export default SvgExclamationmark;
