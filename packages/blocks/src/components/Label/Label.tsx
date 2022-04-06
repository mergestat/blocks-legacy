import React from 'react';
import cx from 'classnames';

export const Label: React.FC<
  React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >
> = ({ className, children, ...props }) => {
  return (
    <label {...props} className={cx('t-label', { [className]: !!className })}>
      {children}
    </label>
  );
};
