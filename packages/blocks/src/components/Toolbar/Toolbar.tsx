import React from 'react';
import cx from 'classnames';

type BaseProps = React.HTMLAttributes<HTMLElement>;

const ToolbarOuter: React.FC<BaseProps> = ({ children, className }) => {
  return (
    <div className={cx('t-toolbar', { [className]: !!className })}>
      {children}
    </div>
  );
}

const ToolbarLeft: React.FC<BaseProps> = ({ children, className }) => {
  return (
    <div className={cx('t-toolbar-left', { [className]: !!className })}>
      {children}
    </div>
  );
}

const ToolbarRight: React.FC<BaseProps> = ({ children, className }) => {
  return (
    <div className={cx('t-toolbar-right', { [className]: !!className })}>
      {children}
    </div>
  );
}

const ToolbarItem: React.FC<BaseProps> = ({ children, className }) => (
  <div className={cx('t-toolbar-item', { [className]: !!className })}>
    {children}
  </div>
);

const ToolbarTitle: React.FC<BaseProps> = ({ children, className }) => (
  <h2 className={cx('t-toolbar-title', { [className]: !!className })}>
    {children}
  </h2>
);

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<BaseProps> {
  Outer: typeof ToolbarOuter;
  Left: typeof ToolbarLeft;
  Right: typeof ToolbarRight;
  Item: typeof ToolbarItem;
  Title: typeof ToolbarTitle;
}

export const Toolbar = ToolbarOuter as CompoundedComponent;
Toolbar.Outer = ToolbarOuter;
Toolbar.Left = ToolbarLeft;
Toolbar.Right = ToolbarRight;
Toolbar.Item = ToolbarItem;
Toolbar.Title = ToolbarTitle;