import React from 'react';

type InlineBannerProps = {
  onClick?: () => void;
};

export const InlineBanner: React.FC<InlineBannerProps> = ({ onClick }) => {
  return (
    <div className="t-inline-banner">
      <p>
        Want to automatically add repos from this organization?{' '}
        <a
          onClick={() => {
            if (onClick) {
              onClick();
            }
          }}
        >
          {' '}
          Auto import
        </a>{' '}
        repos from organization instead
      </p>
    </div>
  );
};
