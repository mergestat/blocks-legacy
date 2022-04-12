import React, { useState } from 'react';
import cx from 'classnames';
import { XIcon } from '@mergestat/icons';

type TagProps = {
  closable?: boolean;
  onClose?: () => void;
  onClick?: () => void;
  children?: React.ReactNode;
  skin?: 'gray' | 'blue';
};

export const Tag: React.FC<TagProps> = ({
  onClose,
  onClick,
  closable = false,
  children,
  skin,
}) => {
  const [visible, setVisible] = useState<boolean>(true);

  const handleOnClose = () => {
    setVisible(false);
    onClose && onClose();
  };

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
    <div
      className={cx('t-flex-div', getButtonSkin(skin ?? 'primary'))}
      onClick={() => {
        handleOnClose();
        onClick();
      }}
    >
      <button>{children || 'Filter label'}</button>
      <div className="t-divider" />
      <XIcon className="t-icon " />
    </div>
  );
};
