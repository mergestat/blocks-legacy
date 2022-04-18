import React from 'react';
import { AutoImportIcon, CaretDownIcon } from '@mergestat/icons';

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
    <div className="t-flex-split text-base">
      <label onClick={onClick} className="t-split-gray h-full">
        <AutoImportIcon className="t-icon" />
        <button>{children || 'Create Auto Import'}</button>
      </label>
      <div className="t-divider" />
      <div className="t-split-gray h-full cursor-pointer">
      	<CaretDownIcon className="t-icon" onClick={onClickClose} />
      </div>
    </div>
  );
};
