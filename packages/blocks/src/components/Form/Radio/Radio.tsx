import React from 'react';
import cx from 'classnames';

type RadioProps = {
  label?: string;
}

const RadioButton: React.FC<
  RadioProps &
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    > &
    any
> = ({ label, children, className, ...props }) => {
  return (
    <label className={cx('t-radio', { [className]: !!className })}>
      <input type="radio" {...props} />
      {label
        ? <span>{label}</span>
        : children && <span>{children}</span>
      }
    </label>
  );
}

const RadioGroup: React.FC<
  { className?: string; inline?: boolean } & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
> = ({ children, inline = false, className }) => {
  return (
    <div
      className={cx(`t-radio-group${inline ? '-inline' : ''}`, {
        [className]: !!className,
      })}
    >
      {children}
    </div>
  );
}

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    RadioProps &
      React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
      > &
      React.RefAttributes<HTMLElement>
  > {
  Button: typeof RadioButton;
  Group: typeof RadioGroup;
}

export const Radio = RadioButton as CompoundedComponent;
Radio.Group = RadioGroup;
