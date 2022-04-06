import React from 'react';
import cx from 'classnames';

type BaseTextAreaTypes = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export const Textarea: React.FC<BaseTextAreaTypes> = ({
  className,
  children,
  ...props
}) => {
  return (
    <textarea  {...props} className={cx('t-textarea', { [className]: !!className })}>
      {children}
    </textarea>
  );
}
