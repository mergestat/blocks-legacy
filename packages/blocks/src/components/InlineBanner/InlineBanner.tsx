import React from 'react';
import cx from 'classnames';

type InlineBannerProps = {
  className?: string;
};

export const InlineBanner: React.FC<InlineBannerProps> = ({ className, children }) => {
  return (
    <div className={cx("p-3 bg-gray-100 text-center", { [className]: !!className })}>
      <p className="t-inline-banner">
        {children && children}
      </p>
    </div>
  );
};
