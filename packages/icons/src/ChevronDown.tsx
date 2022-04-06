import * as React from 'react';
import { Icon } from './Icon';
import type { IconProps } from './index';

function SvgChevronDown(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.293 8.293a1 1 0 011.414 0L12 14.586l6.293-6.293a1 1 0 111.414 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 010-1.414z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgChevronDown;
