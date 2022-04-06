import React from 'react';
import cx from 'classnames';

type SpinnerProps = {
  size?: 'sm' | 'md';
  skin?: 'primary' | 'muted'
  className?: string;
};

export const Spinner = ({ size = 'md', skin = 'primary', className }: SpinnerProps) => {
  return (
    <div className={cx(`t-spinner t-spinner-${size} t-spinner-${skin}`, { [className]: !!className })} />
  );
};
