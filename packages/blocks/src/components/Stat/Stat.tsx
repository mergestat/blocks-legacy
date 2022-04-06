import React from 'react';
import cx from 'classnames';

export const StatOuter: React.FC<
  {} & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
> = ({ children, className, ...props }) => {
  return (
    <div
      className={cx(
        't-stat',
        { [className]: !!className }
      )}
    >
      {children}
    </div>
  );
}

export const StatLeft: React.FC<
  {} & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
> = ({ className, children, ...props }) => {
  return (
    <div
      className={cx('t-stat-left', {
        [className]: !!className,
      })}
    >
      {children}
    </div>
  );
}

export const StatRight: React.FC<
  {} & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
> = ({ className, children, ...props }) => {
  return (
    <div
      className={cx('t-stat-right', {
        [className]: !!className,
      })}
    >
      {children}
    </div>
  );
}

export const StatLabel: React.FC<
  {} & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
> = ({ className, children, ...props }) => {
  return (
    <div
      className={cx('t-stat-label', {
        [className]: !!className,
      })}
    >
      {children}
    </div>
  );
}

export const StatNumber: React.FC<
  {} & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
> = ({ className, children, ...props }) => {
  return <div className="t-stat-number">{children}</div>;
}

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >
  > {
  Label: typeof StatLabel;
  Number: typeof StatNumber;
  Left: typeof StatLeft;
  Right: typeof StatRight;
}

export const Stat = StatOuter as CompoundedComponent;
Stat.Label = StatLabel;
Stat.Number = StatNumber;
Stat.Left = StatLeft;
Stat.Right = StatRight;
