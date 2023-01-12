import * as React from 'react';
import { SVGProps } from 'react';

const SvgService = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="m10.38 14.83-.95.47.26 1.36c.07.35-.28.46-.57.18L8 15.75l-1.11.17c-.29.04-.64-.35-.57-.65l.26-1.14-.95-1.25c-.25-.33-.11-.68.22-.58l1.27.38.53-.94c.14-.25.57-.07.71.29l.53 1.38 1.27.67c.33.17.47.63.22.75ZM21 8.62v6.76c0 .76-.42 1.45-1.11 1.79l-7 3.5c-.28.14-.59.21-.89.21-.3 0-.61-.07-.89-.21l-7-3.5A1.971 1.971 0 0 1 3 15.38V8.62c0-.76.42-1.45 1.11-1.79l7-3.5c.56-.28 1.23-.28 1.79 0l7 3.5c.68.34 1.1 1.02 1.1 1.79ZM6.24 8 12 10.88 17.76 8 12 5.12 6.24 8ZM12 18.88v-5.76l-7-3.5v5.76l7 3.5ZM8.54 7.47l2.26-1.12c.35-.22.91-.23 1.25-.04l.21.13.42-.05c.19-.02.38.01.51.08l1.01.49c.13.08.19.19.16.3l-.08.33.44.25c.34.2.34.53-.01.75l-1.83 1.02c-.35.22-.91.23-1.25.04l-3.1-1.43c-.35-.2-.34-.53.01-.75Zm2.15 1.1c.57.33 1.48.34 2.03.03.55-.31.54-.83-.03-1.16-.57-.33-1.48-.34-2.03-.03-.55.31-.54.83.03 1.16Zm.4-.24c.34.2.89.21 1.22.02.33-.18.32-.49-.03-.69-.34-.2-.89-.21-1.22-.02-.33.19-.32.5.03.69Z" />
  </svg>
);

export default SvgService;
