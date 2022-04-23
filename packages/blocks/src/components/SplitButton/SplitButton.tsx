import React from 'react';
import cx from 'classnames';
import { CaretDownIcon } from '@mergestat/icons';
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
}, ref: any) => {
  return (
    <div className={cx("t-flex-split", {[className]: !!className})} ref={ref}>
      <label
        onClick={() => {
          if (!disabled && onButtonClick) onButtonClick();
        }}
        className="t-split-gray h-full"
      >
        {startIcon && startIcon}
        <button disabled={disabled}>
          {text || "Split Button"}
        </button>
        {endIcon && endIcon}
      </label>
      <Dropdown
        alignEnd
        disabled={disabled}
        trigger={
          <div className="relative t-split-gray h-full cursor-pointer border-l">
            <CaretDownIcon className="t-icon" />
          </div>
        }
        overlay={(close: any) => (
          <Menu className="absolute right-0 -top-1.5">
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
