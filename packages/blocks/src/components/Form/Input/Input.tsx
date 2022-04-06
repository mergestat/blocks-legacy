import React from 'react';
import cx from 'classnames';

type BaseInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type InputVarian = 'error' | 'default';

export type InputProps = {
  variant?: InputVarian;
  startIcon?: React.ReactNode | any;
}

export const Input: React.FC<InputProps & BaseInputProps> = ({
  className,
  startIcon,
  variant = 'default',
  ...props
}) => {
  if (startIcon) {
    return (
      <div
        className={cx('t-input-with-icon', {
          [className]: !!className,
        })}
      >
        {startIcon && startIcon}
        <input
          className={cx('t-input', {
            [`t-input-${variant}`]: !!variant,
          })}
          {...props}
        />
      </div>
    );
  } else {
    return (
      <input
        className={cx('t-input', {
          [className]: !!className,
          [`t-input-${variant}`]: !!variant,
        })}
        {...props}
      />
    );
  }
}
