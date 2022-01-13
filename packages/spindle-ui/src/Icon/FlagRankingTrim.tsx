import * as React from 'react';
import { SVGProps } from 'react';

const SvgFlagRankingTrim = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 13"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    role="img"
    {...props}
  >
    <g clipPath="url(#flag_ranking_trim_svg__a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0v13h14l4-13H0zm10.2 9.69H4.89a.3.3 0 0 1-.3-.3c0-.17.13-.3.3-.3h5.31c.16 0 .3.13.3.3a.3.3 0 0 1-.3.3zm.3-4.43v2.85c0 .22-.18.39-.39.39H4.98a.39.39 0 0 1-.39-.39V5.26C4.26 5.26 4 5 4 4.67c0-.33.26-.59.59-.59.33 0 .59.26.59.59 0 .18-.08.34-.2.44l1.07.96c.2.18.52.11.63-.14l.65-1.59a.697.697 0 0 1-.48-.65c0-.38.31-.69.69-.69.38 0 .69.31.69.69 0 .3-.2.56-.46.65l.65 1.59c.1.25.42.33.63.14l1.07-.96a.606.606 0 0 1-.2-.44c0-.33.26-.59.59-.59.33 0 .59.26.59.59-.01.33-.28.59-.6.59z"
      />
    </g>
    <defs>
      <clipPath id="flag_ranking_trim_svg__a">
        <path d="M0 0h18v13H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgFlagRankingTrim;
