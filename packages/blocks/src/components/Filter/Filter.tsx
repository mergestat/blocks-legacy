import React, { useState } from 'react';
import { CaretDownIcon } from '@mergestat/icons';

import { Tag } from "./Tag"

type FilterProps = {
  closable?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

export const Filter: React.FC<FilterProps> = ({
  closable = false,
  onClose,
  children
}) => {
  const [visible, setVisible] = useState<boolean>(true);

  if (!visible) return null;

  return (
    <div>
      {closable ? (
        <Tag skin='blue'>{children ? children : "Filter label"}</Tag>
      ) : (
        <button className='t-button bg-gray-50'>
          <span>
            {children ? children : "Filter label"}
          </span>
          <CaretDownIcon className="t-icon" />
        </button>
      )}
    </div>
  );
}
