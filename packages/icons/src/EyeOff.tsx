import * as React from 'react';
import { Icon } from './Icon';
import type { IconProps } from './index';

function SvgEyeoff(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.293 2.293a1 1 0 011.414 0l3.04 3.04A10.955 10.955 0 0112 4c4.927 0 9.095 3.238 10.497 7.7a1 1 0 010 .6 11.014 11.014 0 01-3.552 5.231l2.762 2.762a1 1 0 01-1.414 1.414l-18-18a1 1 0 010-1.414zm5.943 4.53l1.732 1.731a4 4 0 015.478 5.478l2.076 2.076A9.022 9.022 0 0020.489 12 9.004 9.004 0 008.236 6.822zm5.696 5.695a2 2 0 00-2.45-2.45l2.45 2.45zM4.625 8.174a1 1 0 01.194 1.4A8.975 8.975 0 003.512 12a9.004 9.004 0 0010.177 5.842 1 1 0 01.372 1.965c-.668.127-1.357.193-2.06.193-4.927 0-9.095-3.238-10.497-7.7a1 1 0 010-.6 10.97 10.97 0 011.72-3.332 1 1 0 011.4-.194z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgEyeoff;
