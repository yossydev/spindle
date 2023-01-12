import * as React from 'react';
import { SVGProps } from 'react';

const SvgFlagFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M7.63 4v16c0 .55-.45 1-1 1s-1-.45-1-1V4c0-.55.45-1 1-1s1 .45 1 1Zm12 3.93-8.54-3.97c-.13-.06-.26-.08-.38-.09-.01 0-.03-.01-.04-.01-.01 0-.02.01-.03.01-.11 0-.22.03-.33.07l-.06.03c-.09.03-.18.08-.25.15-.01.01-.03.02-.04.03-.08.08-.14.18-.19.28-.01.02-.02.05-.03.07-.04.11-.08.23-.08.36v7.95c0 .13.03.25.07.36.01.02.02.05.03.07.05.1.11.2.19.27.01.01.03.02.04.03.08.07.16.12.25.16l.06.03c.1.04.21.06.33.06.01 0 .02.01.03.01.01 0 .03-.01.04-.01.13-.01.26-.03.38-.09l8.54-3.97c.78-.35.78-1.44.01-1.8Z" />
  </svg>
);

export default SvgFlagFill;
