// !DEPRECATED
// This component is deprecated please use the Input component one

import React from 'react';
import cx from 'classnames';

import { Input } from './Input';
import type { InputProps } from './Input';

type InputWithIconPropsProps = {
  icon: React.ReactNode;
}

export const InputWithIcon: React.FC<
  InputProps &
    InputWithIconPropsProps &
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >
> = ({ className, icon, ...props }) => {
  return (
    <div
      className={cx('t-input-with-icon', {
        [className]: !!className,
      })}
    >
      {icon && icon}
      <Input {...props} />
    </div>
  );
}
