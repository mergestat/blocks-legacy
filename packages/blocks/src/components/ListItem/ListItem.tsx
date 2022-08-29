import { TrashIcon } from '@mergestat/icons';
import cx from 'classnames';
import React from 'react';
import { Button } from '../Button';
import { ColoredBox } from '../ColoredBox';

type ListItemProps = {
  title: string;
  subline?: string;
  startIcon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  onTrashClick?: () => void;
};

export const ListItem: React.FC<ListItemProps> = ({
  title,
  subline,
  startIcon,
  className,
  onClick,
  onTrashClick,
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
          startIcon={<TrashIcon className="t-icon" />}
          onClick={(e) => { onTrashClick() }}
        />
      </div>
    </div>
  );
};
