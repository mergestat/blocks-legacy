import React from 'react';
import cx from 'classnames';

type VariantEnum = 'error' | 'success' | 'default';

type HelperTextProps = {
  variant?: VariantEnum;
};

export const HelpText: React.FC<
  HelperTextProps &
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    >
> = ({ className, children, variant = 'default', ...props }) => {
  return (
    <p
      {...props}
      className={cx(`t-help-text t-help-text-${variant}`, {
        [className]: !!className,
      })}
    >
      {children}
    </p>
  );
};
