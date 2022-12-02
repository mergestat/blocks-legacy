import * as React from 'react';
import { Icon } from './Icon';
import type { IconProps } from './index';

function SvgCaretUp(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M7 15L12 9L17 15L7 15Z" fill="currentColor" />
    </Icon>
  );
}

export default SvgCaretUp;
