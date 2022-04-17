import React from 'react';
import cx from 'classnames';

type CheckboxProps = {
  label?: string;
}

const CheckboxInput: React.FC<
  CheckboxProps &
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >
> = ({ label, children, className, ...props }) => {
  return (
    <label className={cx('t-checkbox', { [className]: !!className })}>
      <input type="checkbox" {...props} className="cursor-pointer" />
      <span className="cursor-pointer w-fit">{label ? label : children ?? ''}</span>
    </label>
  );
}

const CheckboxGroup: React.FC<
  { className?: string; inline?: boolean } & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
> = ({ children, inline = false, className }) => {
  return (
    <div
      className={cx(`t-checkbox-group${inline ? '-inline' : ''}`, {
        [className]: !!className,
      })}
    >
      {children}
    </div>
  );
}

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    CheckboxProps &
      React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
      > &
      React.RefAttributes<HTMLElement>
  > {
  Input: typeof CheckboxInput;
  Group: typeof CheckboxGroup;
}

export const Checkbox = CheckboxInput as CompoundedComponent;
Checkbox.Group = CheckboxGroup;
