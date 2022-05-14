import React from 'react';
import cx from 'classnames';
import { CaretDownIcon } from '@mergestat/icons';
import { Button } from '../Button';
import { Dropdown } from '../Dropdown';
import { Menu } from '../Menu';

export type SplitButtonItemProps = {
  text?: string;
  icon?: React.ReactElement;
  className?: string;
}

export type SplitButtonProps = {
  text?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  items?: Array<SplitButtonItemProps>;
  disabled?: boolean;
  className?: string;
  menuContainerClassName?: string;
  onButtonClick?: () => void;
  onItemClick?: (index: number) => void;
};

export const SplitButton: React.FC<SplitButtonProps> = React.forwardRef(({
  text,
  startIcon,
  endIcon,
  items=[],
  disabled=false,
  className,
  onButtonClick,
  onItemClick,
  menuContainerClassName,
}, ref: any) => {
  return (
    <div className={cx("t-split-button", {[className]: !!className})} ref={ref}>
      <div
      >
        <Button
          skin="secondary"
          startIcon={startIcon}
          endIcon={endIcon}
          disabled={disabled} label={text || "Split button"}
          className="t-split-button-left"
          onClick={() => {
            if (!disabled && onButtonClick) onButtonClick();
          }}
        />
      </div>
      <Dropdown
        alignEnd
        disabled={disabled}
        trigger={
          <Button skin="secondary" isIconOnly startIcon={<CaretDownIcon className="t-icon" />} className="t-split-button-right" />
        }
        overlay={(close: any) => (
          <Menu className={cx('absolute right-0 -top-1.5', { [menuContainerClassName]: !!menuContainerClassName})}>
            {items.map(({text, icon, className}, index) => (
              <Menu.Item
                key={index}
                text={text}
                withIcon
                className={cx("whitespace-nowrap", { [className]: !!className })}
                onClick={() => {
                  if (onItemClick) onItemClick(index);
                  close();
                }}
                icon={icon}
              />
            ))}
          </Menu>
        )}
      />
    </div>
  );
});

SplitButton.defaultProps = {
  text: 'Split Button',
}
