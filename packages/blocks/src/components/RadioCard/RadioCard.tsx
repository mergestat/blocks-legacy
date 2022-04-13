import React from 'react';
import cx from 'classnames';

type RadioCardProps = {
  startIcon?: React.ReactNode;
  isSelected: boolean;
  label: string;
};

export const RadioCard: React.FC<RadioCardProps> = ({
  startIcon,
  isSelected,
  label,
}) => {
  return (
    <div className={cx('t-radio-card', {'t-tag-blue': isSelected})}>
      {startIcon && startIcon}
      {label && label}
    </div>
  );
};
