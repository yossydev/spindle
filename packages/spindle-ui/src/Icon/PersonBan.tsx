import * as React from 'react';
import { SVGProps } from 'react';

const SvgPersonBan = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M12 11a4.5 4.5 0 1 0-4.5-4.5A4.51 4.51 0 0 0 12 11Zm0-7a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm1.05 18.2H12a25.901 25.901 0 0 1-6.25-.77 3 3 0 0 1-2-4.08A8.54 8.54 0 0 1 12 12c.936-.005 1.868.12 2.77.37a6.4 6.4 0 0 0-1.93 1.69c-.28 0-.54-.06-.84-.06a6.54 6.54 0 0 0-6.45 4.17 1 1 0 0 0 0 .83.999.999 0 0 0 .66.53c1.852.457 3.752.692 5.66.7a6.46 6.46 0 0 0 1.18 1.97ZM18 13a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 1.5a3.46 3.46 0 0 1 1.88.56l-4.82 4.82A3.46 3.46 0 0 1 14.5 18a3.5 3.5 0 0 1 3.5-3.5Zm0 7a3.46 3.46 0 0 1-1.88-.56l4.82-4.82A3.46 3.46 0 0 1 21.5 18a3.5 3.5 0 0 1-3.5 3.5Z" />
  </svg>
);

export default SvgPersonBan;
