import { RepositoryIcon, TrashIcon } from '@mergestat/icons';
import React from 'react';

type ListItemProps = {
  repositoryName: string;
  subline?: string;
  onClick?: () => void;
};

export const ListItem: React.FC<ListItemProps> = ({
  repositoryName,
  subline,
  onClick,
}) => {
  return (
    <div className="w-full">
      <div className="w-full t-list-item-container">
        <div className="t-left-side">
          <button className="t-list-button">
            <RepositoryIcon className="t-icon" />
          </button>
          <div>
            <h3>{repositoryName}</h3>
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
