import * as React from 'react';
import { SVGProps } from 'react';

const SvgBell = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="m20 15-.6-.8c-.26-.34-.4-.77-.4-1.2v-2.75c0-3.38-2.31-6.28-5.37-7.05C13.27 2.46 12.7 2 12 2c-.69 0-1.27.46-1.62 1.19-1.22.29-2.33.89-3.25 1.79A6.903 6.903 0 0 0 5 10v3c0 .43-.14.86-.4 1.2L4 15c-.57.76-.66 1.77-.24 2.62C4.19 18.47 5.05 19 6 19h12c.95 0 1.81-.53 2.24-1.38.42-.85.33-1.86-.24-2.62zm-1.55 1.72A.48.48 0 0 1 18 17H6a.48.48 0 0 1-.45-.28c-.04-.08-.12-.3.05-.52l.6-.8c.52-.69.8-1.54.8-2.4v-3c0-1.36.54-2.64 1.52-3.59C9.46 5.5 10.69 5 12 5h.16c2.67.08 4.84 2.44 4.84 5.25V13c0 .86.28 1.71.8 2.4l.6.8c.17.22.09.44.05.52zM13.73 20c.39 0 .63.43.43.76C13.72 21.5 12.92 22 12 22c-.92 0-1.72-.5-2.16-1.24-.2-.33.04-.76.43-.76h3.46z" />
  </svg>
);

export default SvgBell;
