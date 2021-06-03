import * as React from 'react';

function SvgSunFill(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M16.5 12c0 2.48-2.02 4.5-4.5 4.5S7.5 14.48 7.5 12 9.52 7.5 12 7.5s4.5 2.02 4.5 4.5zM12 5.5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1s-1 .45-1 1v1.5c0 .55.45 1 1 1zm0 13c-.55 0-1 .45-1 1V21c0 .55.45 1 1 1s1-.45 1-1v-1.5c0-.55-.45-1-1-1zm5.3-10.8c.26 0 .51-.1.71-.29l1.06-1.06a.996.996 0 10-1.41-1.41L16.6 5.99a.996.996 0 000 1.41c.19.2.45.3.7.3zM5.99 16.6l-1.06 1.06a.996.996 0 00.71 1.7c.26 0 .51-.1.71-.29l1.06-1.06a.996.996 0 000-1.41c-.39-.39-1.03-.39-1.42 0zM21 11h-1.5c-.55 0-1 .45-1 1s.45 1 1 1H21c.55 0 1-.45 1-1s-.45-1-1-1zM5.5 12c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1h1.5c.55 0 1-.45 1-1zm12.51 4.6a.996.996 0 10-1.41 1.41l1.06 1.06c.2.2.45.29.71.29.26 0 .51-.1.71-.29a.996.996 0 000-1.41l-1.07-1.06zM5.99 7.4c.19.2.45.3.71.3.26 0 .51-.1.7-.3a.996.996 0 000-1.41L6.34 4.93a.996.996 0 10-1.41 1.41L5.99 7.4z" />
    </svg>
  );
}

export default SvgSunFill;