import React, { useState } from 'react';
import cx from 'classnames';
import { XIcon } from '@mergestat/icons';

type TagProps = {
  skin?: 'gray' | 'blue';
  onClose?: () => void;
  onClick?: () => void;
  children?: React.ReactNode;
  closable?: boolean;
};

export const Tag: React.FC<TagProps> = ({
  onClose,
  onClick,
  children,
  skin,
  closable
}) => {
  const [visible, setVisible] = useState<boolean>(true);

  const getButtonSkin = (skin: string) => {
    switch (skin) {
      case 'gray':
        return 't-tag-gray';

      case 'blue':
        return 't-tag-blue';

      default:
        return 't-tag-gray';
    }
  };

  if (!visible) return null;

  const MainComp = (
    <div
      className={cx('t-tag', getButtonSkin(skin ?? 'primary'))}
      onClick={onClick}
      >
      {children || 'Filter label'}
    </div>
  )
  return ( closable ? (
    <div className="t-tag-group">
      {MainComp}
      <div
        className={cx('t-tag t-tag-icon px-1.5', getButtonSkin(skin ?? 'primary'))}
        onClick={() => {
          setVisible(false);
          if (onClose) onClose();
        }}
      >
        <XIcon className="t-icon"/>
      </div>
    </div>
    ) : (
      MainComp
    )
  );
};
