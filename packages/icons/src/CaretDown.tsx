import * as React from 'react';
import { Icon } from './Icon';
import type { IconProps } from './index';

function SvgCaretDown(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M17 9L12 15L7 9H17Z" fill="currentColor"/>
    </Icon>
  );
}

export default SvgCaretDown;
