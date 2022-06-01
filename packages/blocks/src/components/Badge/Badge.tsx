import React, { useState } from 'react';
import cx from 'classnames';
import { XIcon } from '@mergestat/icons';

type BadgeProps = {
  label?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'default';
  iconOnly?: boolean;
  closable?: boolean;
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
  onClose,
  onClick
}) => {
  const [visible, setVisible] = useState<boolean>(true);

  if (!visible) return null;

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

      {closable && (
        <div
          className="t-badge-close"
          onClick={() => {
            setVisible(false);
            if (onClose) onClose();
          }}
          >
            <XIcon className="t-icon"/>
        </div>
      )}

    </span>

  );
}
