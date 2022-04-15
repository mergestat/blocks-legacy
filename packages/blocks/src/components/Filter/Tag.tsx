import React, { useState } from 'react';
import cx from 'classnames';
import { XIcon } from '@mergestat/icons';

type TagProps = {
  skin?: 'gray' | 'blue';
  onClose?: () => void;
  onClick?: () => void;
  children?: React.ReactNode;
};

export const Tag: React.FC<TagProps> = ({
  onClose,
  onClick,
  children,
  skin,
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

  return (
    <div className={cx('t-flex-div', getButtonSkin(skin ?? 'primary'))}>
      <div onClick={onClick}>
        {children || 'Filter label'}
      </div>
      <div className="t-divider" />
      <XIcon
        className="t-icon"
        onClick={() => {
          setVisible(false);
          if (onClose) onClose();
        }}
      />
    </div>
  );
};
