import React from 'react';
import { ChevronRightIcon } from '@mergestat/icons';

type BreadcrumbNavProps = {
  data: {
    text: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    onClick?: () => void;
  }[];
};

export const BreadcrumbNav: React.FC<BreadcrumbNavProps> = ({ data }) => {
  return (
    <div className="flex items-center gap-1.5">
      {data.map((item, index) => {
        return (
          <div
            key={`key_${index}`}
            className="flex gap-1.5 items-center t-step-title"
          >
            {index !== 0 && <ChevronRightIcon className="t-icon" />}
            {item.startIcon && item.startIcon}
            <p
              className={`${index === data.length - 1 && `t-last-step`}`}
              onClick={() => item.onClick && item.onClick()}
            >
              {item.text}
            </p>
            {item.endIcon && item.endIcon}
          </div>
        );
      })}
    </div>
  );
};
