import React from 'react';
import cx from 'classnames';

type BadgeProps = {
  label?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'default';
  iconOnly?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  children,
  className,
  startIcon,
  endIcon,
  variant = 'default',
  iconOnly,
}) => {
  return (
    <span
      className={cx('t-badge', `t-badge-${variant}`, {
        [className]: !!className,
        ['t-badge-icon']: iconOnly,
      })}
    >
      {/* Start Icon */}
      {startIcon && startIcon}

      {/* Label or Child props */}
      {label ? <span>{label}</span> : children ? children : ''}

      {/* End Icon */}
      {endIcon && endIcon}
    </span>
  );
}
