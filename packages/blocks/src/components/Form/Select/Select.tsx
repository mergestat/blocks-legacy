import React from 'react';
import cx from 'classnames';

type SelectProps = {}
type OptionsProps = {}

const SelectInput: React.FC<
  SelectProps &
    React.DetailedHTMLProps<
      React.SelectHTMLAttributes<HTMLSelectElement>,
      HTMLSelectElement
    >
> = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <select className={cx('t-select', { [className]: !!className })} {...props} ref={ref}>
      {children}
    </select>
  );
});

const SelectOption: React.FC<
  OptionsProps &
    React.DetailedHTMLProps<
      React.OptionHTMLAttributes<HTMLOptionElement>,
      HTMLOptionElement
    >
> = React.forwardRef(({ children, ...props }, ref) => {
  return <option {...props} ref={ref}>{children}</option>;
});

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    React.DetailedHTMLProps<
      React.SelectHTMLAttributes<HTMLSelectElement>,
      HTMLSelectElement
    > &
      React.RefAttributes<HTMLElement>
  > {
  Input: typeof SelectInput;
  Option: typeof SelectOption;
}

export const Select = SelectInput as CompoundedComponent;
Select.Option = SelectOption;
