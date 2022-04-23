import React from 'react';
import cx from 'classnames';

type RadioCardProps = {
  className?: string | undefined;
  startIcon?: React.ReactNode;
  isSelected?: boolean;
  label?: string;
  onChange?: () => void;
};

export const RadioCard: React.FC<RadioCardProps> = ({
  className,
  startIcon,
  isSelected=false,
  label,
  onChange,
}) => {
  return (
    <div
      className={cx('t-radio-card', {
        't-tag-blue': isSelected,
        [className]: !!className
      })}
      onClick={() => {
        if (!isSelected && onChange) onChange();
      }}
    >
      {startIcon && startIcon}
      {label && label}
    </div>
  );
};
