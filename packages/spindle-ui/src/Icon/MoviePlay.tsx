import * as React from 'react';
import { SVGProps } from 'react';

const SvgMoviePlay = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 4H5C3.34 4 2 5.34 2 7v10c0 1.66 1.34 3 3 3h14c1.66 0 3-1.34 3-3V7c0-1.66-1.34-3-3-3Zm1 13c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v10Zm-5.22-5.42c.31.2.31.65 0 .85l-3.93 2.45a.495.495 0 0 1-.76-.42V9.55c0-.39.43-.63.76-.42l3.93 2.45Zm3.82-3.73v1.1c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.1a.749.749 0 1 1 1.5 0Zm0 3.6v1.1c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.1a.749.749 0 1 1 1.5 0Zm0 3.6v1.1c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.1c0-.41.34-.75.75-.75s.75.34.75.75ZM7.1 7.85v1.1c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.1a.749.749 0 1 1 1.5 0Zm0 3.6v1.1c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.1a.749.749 0 1 1 1.5 0Zm0 3.6v1.1a.749.749 0 1 1-1.5 0v-1.1c0-.41.34-.75.75-.75s.75.34.75.75Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgMoviePlay;
