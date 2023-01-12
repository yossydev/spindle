import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowLeftBold = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M20 10.5H7.23l3.8-3.8c.59-.59.59-1.54 0-2.12-.59-.58-1.54-.59-2.12 0l-5.66 5.66c-.38.38-.61.85-.69 1.35-.03.12-.06.26-.06.41 0 .15.03.29.07.42.08.49.31.97.69 1.35l5.66 5.66c.29.29.68.44 1.06.44s.77-.15 1.06-.44c.59-.59.59-1.54 0-2.12l-3.8-3.8H20c.83 0 1.5-.67 1.5-1.5s-.67-1.51-1.5-1.51Z" />
  </svg>
);

export default SvgArrowLeftBold;
