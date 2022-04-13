import React from 'react';
import { CaretDownIcon } from '@mergestat/icons';

import { Tag } from './Tag';

type FilterProps = {
  closable?: boolean;
  onLabel?: () => void;
  children?: React.ReactNode;
};

export const Filter: React.FC<FilterProps> = ({
  closable = false,
  children,
  onLabel,
}) => {
  return (
    <div>
      {closable ? (
        <Tag skin="blue" onClick={onLabel}>
          {children || 'Filter label'}
        </Tag>
      ) : (
        <button className="t-flex-div t-tag-gray" onClick={onLabel}>
          <span>{children || 'Filter label'}</span>
          <CaretDownIcon className="t-icon" />
        </button>
      )}
    </div>
  );
};
