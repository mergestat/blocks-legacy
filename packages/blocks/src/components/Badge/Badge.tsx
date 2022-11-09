import React, { useState } from 'react';
import cx from 'classnames';
import { XIcon } from '@mergestat/icons';

type BadgeProps = {
  label?: string;
  children: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'default';
  iconOnly?: boolean;
  closable?: boolean;
  action?: boolean;
  onClose?: () => void;
  onClick?: () => void;
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  children,
  className,
  startIcon,
  endIcon,
  variant = 'default',
  iconOnly,
  closable,
  action,
  onClose,
  onClick
}) => {
  const [visible, setVisible] = useState<boolean>(true);

  if (!visible) return null;

  const MainComp = (
    <span
      className={cx('t-badge', `t-badge-${variant}`, {
        [className]: !!className,
        ['t-badge-icon']: iconOnly,
        ['t-badge-action cursor-pointer']: action,
      })}
    >
      {/* Start Icon */}
      {startIcon && startIcon}

      {/* Label or Child props */}
      {label ? <span>{label}</span> : children ? children : ''}

      {/* End Icon */}
      {endIcon && endIcon}
    </span>
  )

  return ( closable ? (
    <div className="t-badge-group">
      {MainComp}
      <div
        className={cx('t-badge t-badge-icon t-badge-action cursor-pointer', `t-badge-${variant}`)}
        onClick={() => {
          setVisible(false);
          if (onClose) onClose();
        }}
      >
        <XIcon className="t-icon"/>
      </div>

    </div>
    ) : (
      MainComp
    )
  );
}
