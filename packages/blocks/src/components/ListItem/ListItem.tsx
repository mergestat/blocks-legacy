import React from 'react';
import { TrashIcon } from '@mergestat/icons';
import cx from 'classnames';

import classNames from 'classnames';
type ListItemProps = {
  title: string;
  subline?: string;
  startIcon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  onCloseClick?: () => void;
};

export const ListItem: React.FC<ListItemProps> = ({
  title,
  subline,
  startIcon,
  className,
  onClick,
  onCloseClick,
}) => {
  return (
    <div
      className={cx('t-list-item-container', {
        [className]: !!className,
      })}
      onClick={(e) => {
        e.preventDefault()
        const element = e.target as HTMLElement;
        if (['svg', 'path', 'button'].includes(element.tagName)) { 
          return;
        }
        onClick();
      }}
    >
      <div className="t-left-side">
        {startIcon && (
          <div className="t-list-button">
            {startIcon}
          </div>
        )}
        <div>
          <h3>{title}</h3>
          {subline && <p>{subline}</p>}
        </div>
      </div>
      <button className="t-right-side" onClick={onCloseClick}>
        <TrashIcon className="t-icon" />
      </button>
    </div>
  );
};
