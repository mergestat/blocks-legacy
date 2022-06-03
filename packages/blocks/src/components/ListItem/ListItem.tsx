import React from 'react';
import { TrashIcon } from '@mergestat/icons';
import { ColoredBox } from '../ColoredBox';
import { Button } from '../Button';
import cx from 'classnames';

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
      <div className="t-list-item-left">
        {startIcon && (
          <ColoredBox size="10">
            <>{startIcon}</>
          </ColoredBox>
        )}
        <div>
          <h3>{title}</h3>
          {subline && <p>{subline}</p>}
        </div>
      </div>
      <div className="t-list-item-right">
        <Button
          isIconOnly
          skin="borderless-muted"
          startIcon={ <TrashIcon className="t-icon" />}
        />
      </div>
    </div>
  );
};
