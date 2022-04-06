import React from 'react';
import cx from 'classnames';

const PageWrapper: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, className }) => {
  return (
    <div
      className={cx('bg-gray-50 w-full h-full overflow-y-auto flex flex-col', {
        [className]: !!className,
      })}
    >
      {children}
    </div>
  );
}

const PageHeader: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, className }) => {
  return (
    <div
      className={cx('bg-white border-b border-gray-200 px-4 sm_px-6 lg_px-8', {
        [className]: !!className,
      })}
    >
      {children}
    </div>
  );
}

const PageContent: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      className={cx('flex flex-col flex-grow bg-gray-50 overflow-y-auto', {
        [className]: !!className,
      })}
    >
      {children}
    </div>
  );
}

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >
  > {
  Header: typeof PageHeader;
  Content: typeof PageContent;
}

export const Page = PageWrapper as CompoundedComponent;
Page.Header = PageHeader;
Page.Content = PageContent;
