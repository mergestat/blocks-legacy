import React from 'react';
import { CaretDownIcon } from '@mergestat/icons';

import { Tag } from './Tag';

type FilterProps = {
  closable?: boolean;
  onOpen?: () => void;
  children?: React.ReactNode;
};

export const Filter: React.FC<FilterProps> = ({
  closable = false,
  children,
  onOpen,
}) => {
  return (
    <div>
      {closable ? (
        <Tag skin="blue">{children || 'Filter label'}</Tag>
      ) : (
        <button className="t-flex-div t-tag-gray" onClick={onOpen}>
          <span>{children || 'Filter label'}</span>
          <CaretDownIcon className="t-icon" />
        </button>
      )}
    </div>
  );
};
