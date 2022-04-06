import React from 'react';
import cx from 'classnames';

type SidebarItemProps = {
  icon?: React.ReactNode;
  label: string;
  active?: boolean;
  compact?: boolean;
  disabled?: boolean;
}

const SidebarOuter: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, className }) => {
  return (
    <div
      className={cx(
        'h-full flex-none flex flex-col border-r border-gray-200 pb-4 bg-white overflow-y-auto w-28',
        { [className]: !!className }
      )}
    >
      <nav className="pt-5 flex-1 space-y-2" aria-label="Sidebar">
        {children}
      </nav>
    </div>
  );
}

const SidebarItem: React.FC<
  SidebarItemProps &
    React.DetailedHTMLProps<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >
> = React.forwardRef(
  ({
    label,
    icon,
    active,
    onClick,
    href,
    className,
    disabled = false,
    compact = true,
  }, ref) => {
    return (
      <a
        href={href}
        className={cx('t-sidebar-item default', {
          [className]: !!className,
          ['t-sidebar-item-compact ']: compact,
          disabled: disabled,
          active: active,
        })}
        ref={ref}
        onClick={onClick}
      >
        {icon && <div className="t-sidebar-item-icon-wrap">{icon}</div>}
        {label}
      </a>
    );
  }
);

SidebarItem.defaultProps = {
  active: false,
}

const SidebarDivider: React.FC = () => {
  return <div className="border-b border-gray-200" />;
}

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >
  > {
  Outer: typeof SidebarOuter;
  Item: typeof SidebarItem;
  Divider: typeof SidebarDivider;
}

const CompoundedSidebar = SidebarOuter as CompoundedComponent;
CompoundedSidebar.Item = SidebarItem;
CompoundedSidebar.Divider = SidebarDivider;

export const Sidebar = CompoundedSidebar;
