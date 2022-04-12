import React from 'react';
import { GithubIcon } from '@mergestat/icons';
import cx from 'classnames';

type RadioCardProps = {
  isSelected: boolean;
  label: string;
};

export const RadioCard: React.FC<RadioCardProps> = ({ isSelected, label }) => {
  return (
    <div className={cx('t-radio-card', isSelected && 't-tag-blue')}>
      <GithubIcon className="t-icon" />
      {label && label}
    </div>
  );
};
