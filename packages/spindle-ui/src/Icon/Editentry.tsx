import * as React from 'react';

function SvgEditentry(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.06 19.95c1.1 0 2-.9 2-2v-6.02l2-2v8.02c0 2.21-1.79 4-4 4H7.05c-2.21 0-4-1.79-4-4v-12c0-2.21 1.79-4 4-4h9c1 0 1.91.38 2.61.99l-.83.83-.58.58c-.33-.25-.74-.4-1.19-.4H7.05c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9.01zm-8.01-13c-.55 0-1 .45-1 1s.45 1 1 1h4.6l2-2h-6.6zm0 4h3.75l-.28.99c-.1.34-.09.68 0 1.01H8.05c-.55 0-1-.45-1-1s.45-1 1-1zm7 6h-7c-.55 0-1-.45-1-1s.45-1 1-1h7c.55 0 1 .45 1 1s-.45 1-1 1zm-1.46-6.82l-.63 2.21a.4.4 0 00.38.51c.033 0 .06-.007.09-.015l.02-.005 2.21-.63 5.31-5.31-2.07-2.07-5.31 5.31zm7.96-7.39l1.51 1.51c.16.16.16.41-.01.56L22 5.86l-2.07-2.07 1.05-1.05c.16-.16.41-.16.57 0z"
      />
    </svg>
  );
}

export default SvgEditentry;