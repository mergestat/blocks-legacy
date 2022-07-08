import React from 'react';
import cx from 'classnames';

type VerticalNavItemProps = {
  active?: boolean;
  className?: string;
  text?: string | React.ReactNode;
  icon?: React.ReactElement;
  disabled?: boolean;
  onClick?: () => void;
};

const VerticalNavItems: React.FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  >
> = ({ children, className }) => {
  return (
    <ul
      className={cx('t-vertical-nav', {
        [className]: !!className,
      })}
    >
      {children}
    </ul>
  );
};

const VerticalNavItem: React.FC<
  VerticalNavItemProps &
    React.DetailedHTMLProps<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >
> = React.forwardRef(
  (
    {
      color,
      text,
      href,
      icon,
      disabled = false,
      active = false,
      className,
      onClick,
      ...props
    },
    ref
  ) => (
    <li className={cx('t-vertical-nav-item', { ['t-vertical-nav-item-disabled']: disabled, ['t-vertical-nav-item-active']: active })} >
      <a
        {...props}
        href={href}
        className={cx('cursor-pointer', {
          [color]: !!color,
          [className]: !!className,
        })}
        onClick={onClick}
        ref={ref}
      >
        {icon && icon}
        {text && <span>{text}</span>}
      </a>
    </li>
  )
);

const VerticalNavDivider: React.FC<
  React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>
> = ({ className, ...props }) => (
  <li
    className={cx('t-vertical-nav-divider', { [className]: !!className })}
    role="presentation"
    {...props}
  />
);

VerticalNavItem.defaultProps = {
  onClick: () => {},
}

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLUListElement>,
      HTMLUListElement
    >
  > {
  Items: typeof VerticalNavItems;
  Item: typeof VerticalNavItem;
  Divider: typeof VerticalNavDivider;
}


export const VerticalNav = VerticalNavItems as CompoundedComponent;
VerticalNav.Item = VerticalNavItem;
VerticalNav.Divider = VerticalNavDivider;
