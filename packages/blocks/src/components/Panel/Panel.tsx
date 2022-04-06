import React from 'react';
import cx from 'classnames';

type BaseProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLBaseElement>,
  HTMLBaseElement
>;

const PanelWrapper: React.FC<BaseProps> = ({ children, className }) => {
  return (
    <div className={cx('t-panel', { [className]: !!className})}>{children}</div>
  );
}

const PanelHeader: React.FC<BaseProps> = ({ children, className }) => {
  return (
    <div className={cx('t-panel-header py-0 px-6', { [className]: !!className })}>
      {children}
    </div>
  );
}

const PanelBody: React.FC<BaseProps> = ({ children, className }) => {
  return (
    <div className={cx('t-panel-body', { [className]: !!className})}>{children}</div>
  );
}

const PanelFooter: React.FC<BaseProps> = ({ children, className }) => {
  return (
    <div className={cx('t-panel-footer', { [className]: !!className })}>
      {children}
    </div>
  );
}

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<BaseProps> {
  Header: typeof PanelHeader;
  Body: typeof PanelBody;
  Footer: typeof PanelFooter;
}

export const Panel = PanelWrapper as CompoundedComponent;
Panel.Header = PanelHeader;
Panel.Body = PanelBody;
Panel.Footer = PanelFooter;
