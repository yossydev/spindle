import * as React from 'react';
import { SVGProps } from 'react';

const SvgAlbumFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M4.5 15.82a2.99 2.99 0 0 1-2-2.82V7c0-1.66 1.34-3 3-3h9c1.3 0 2.4.84 2.82 2H7.5c-1.65 0-3 1.35-3 3v6.82zM21 10.5v6c0 1.66-1.34 3-3 3H9c-1.66 0-3-1.34-3-3v-6c0-1.66 1.34-3 3-3h9c1.66 0 3 1.34 3 3zM10.5 10c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm9 6.5v-1.62a.47.47 0 0 0-.15-.35l-2.23-2.23a.996.996 0 0 0-1.41 0l-3.06 3.06c-.2.2-.51.2-.71 0l-.73-.73a.996.996 0 0 0-1.41 0l-2.01 2.01a.5.5 0 0 0-.08.61c.25.44.73.75 1.29.75h9c.83 0 1.5-.67 1.5-1.5z" />
  </svg>
);

export default SvgAlbumFill;
