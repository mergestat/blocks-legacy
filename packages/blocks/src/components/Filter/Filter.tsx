import React from 'react';
import { CaretDownIcon } from '@mergestat/icons';

import { Tag } from './Tag';

type FilterProps = {
  closable?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
};

export const Filter: React.FC<FilterProps> = ({
  closable = false,
  onClose,
  children,
}) => {
  return (
    <div>
      {closable ? (
        <Tag skin="blue">{children || 'Filter label'}</Tag>
      ) : (
        <button className="t-flex-div t-tag-gray">
          <span>{children || 'Filter label'}</span>
          <CaretDownIcon className="t-icon" />
        </button>
      )}
    </div>
  );
};
