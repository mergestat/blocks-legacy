import React from 'react';
import { PlusIcon, RepositoryIcon } from '@mergestat/icons';

import { Button } from '../Button';

type EmptyStateProps = {
  onClick: () => void;
};

export const EmptyState: React.FC<
  EmptyStateProps &
    React.DetailedHTMLProps<
      React.DetailsHTMLAttributes<HTMLElement>,
      HTMLElement
    >
> = ({ onClick }) => {
  return (
    <div className="t-center">
      <div className="t-circle-icon">
        <RepositoryIcon className="t-icon" />
      </div>
      <p>No repositories added yet</p>
      <Button
        skin="secondary"
        onClick={onClick}
        startIcon={<PlusIcon className="t-icon" />}
      >
        Add Repository
      </Button>
    </div>
  );
};
