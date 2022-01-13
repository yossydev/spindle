import * as React from 'react';
import { SVGProps } from 'react';

const SvgNice = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-3.03-8.51c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7.54-1.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm-1.24 3.58c.4.29.5.85.21 1.26-.8 1.11-2.1 1.78-3.47 1.78s-2.67-.67-3.47-1.78a.9.9 0 0 1 .21-1.26.9.9 0 0 1 1.26.21c.46.64 1.21 1.03 2.01 1.03.8 0 1.55-.38 2.01-1.03.27-.41.83-.5 1.24-.21z" />
  </svg>
);

export default SvgNice;
