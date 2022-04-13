import React from 'react';
import { AutoImportIcon, XIcon } from '@mergestat/icons';

type SplitButtonProps = {
  children?: React.ReactNode;
  onClickClose?: () => void;
  onClick?: () => void;
};

export const SplitButton: React.FC<SplitButtonProps> = ({
  children,
  onClickClose,
  onClick,
}) => {
  return (
    <div className="t-flex-split t-split-gray text-base">
      <label onClick={onClick}>
        <AutoImportIcon className="t-icon" />
        <button>{children || 'Create Auto Import'}</button>
      </label>
      <div className="t-divider" />
      <XIcon className="t-icon" onClick={onClickClose} />
    </div>
  );
};
