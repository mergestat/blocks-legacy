import React from 'react';
import { TrashIcon } from '@mergestat/icons';

type ListItemProps = {
  title: string;
  subline?: string;
  startIcon?: React.ReactNode;
  onClick?: () => void;
};

export const ListItem: React.FC<ListItemProps> = ({
  title,
  subline,
  startIcon,
  onClick,
}) => {
  return (
    <div className="w-full">
      <div className="w-full t-list-item-container">
        <div className="t-left-side">
          {startIcon && (
            <button className="t-list-button">
              {startIcon}
            </button>
          )}
          <div>
            <h3>{title}</h3>
            {subline && <p>{subline}</p>}
          </div>
        </div>
        <div className="t-right-side">
          <TrashIcon className="t-icon" onClick={onClick} />
        </div>
      </div>
    </div>
  );
};
