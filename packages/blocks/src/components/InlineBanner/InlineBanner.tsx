import React from 'react';

type InlineBannerProps = {};

export const InlineBanner: React.FC<InlineBannerProps> = ({ children }) => {
  return (
    <div className="p-3 bg-gray-100 text-center">
      <p className="t-inline-banner">
        {children && children}
      </p>
    </div>
  );
};
