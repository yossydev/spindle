import * as React from 'react';
import { SVGProps } from 'react';

const SvgStar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M7.2 21.785c-.49 0-.98-.16-1.41-.46a2.377 2.377 0 0 1-.94-2.42l.83-4.07-3.07-2.81c-.7-.64-.96-1.61-.66-2.51.29-.91 1.07-1.54 2.01-1.64l4.13-.48 1.72-3.79c.39-.87 1.23-1.41 2.18-1.41.95 0 1.79.54 2.19 1.41l1.72 3.78 4.13.47c.95.11 1.72.74 2.01 1.64.29.91.04 1.87-.66 2.51l-3.07 2.81.83 4.07c.19.93-.17 1.86-.94 2.42-.77.56-1.77.62-2.59.15L12 19.415l-3.62 2.05c-.37.21-.78.32-1.18.32zM12 4.205c-.1 0-.27.03-.36.23l-2.19 4.82-5.26.6c-.22.02-.31.18-.34.27-.03.09-.05.27.11.42l3.9 3.57-1.05 5.18c-.04.22.08.35.16.4.08.06.24.14.43.02l4.6-2.61 4.6 2.61c.19.11.35.03.43-.02.08-.06.2-.18.16-.4l-1.06-5.18 3.9-3.57c.17-.15.14-.33.11-.42a.373.373 0 0 0-.34-.27l-5.26-.59-2.19-4.82a.351.351 0 0 0-.35-.24z" />
  </svg>
);

export default SvgStar;
