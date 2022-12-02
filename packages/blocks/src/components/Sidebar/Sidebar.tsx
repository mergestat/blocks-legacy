import React from 'react';
import cx from 'classnames';
import { useState } from 'react';

import {
  ChevronDownIcon,
  ChevronUpIcon
} from '@mergestat/icons';

type SidebarItemProps = {
  icon?: React.ReactNode;
  label: string;
  active?: boolean;
  compact?: boolean;
  disabled?: boolean;
  subLevel?: boolean;
}

type SidebarProps = {
  dark?: boolean;
  compact?: boolean;
}

const SidebarOuter: React.FC<
  SidebarProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({
  dark,
  compact = true,
  children,
  className }) => {
  return (
    <div
      className={cx(
        't-sidebar',
        { [className]: !!className,
          ['t-sidebar-compact ']: compact,
          ['t-sidebar-dark']: dark
        }

      )}
    >
      <nav className='t-sidebar-inner' aria-label='Sidebar'>
        {children}
      </nav>
    </div>
  );
}


const SidebarHeader: React.FC<
 React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({
  children,
  className }) => {
  return (
    <div className={cx('t-sidebar-header', {[className]: !!className})}>
      {children}
    </div>
  );
}

const SidebarFooter: React.FC<
 React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({
  children,
  className }) => {
  return (
    <div className={cx('t-sidebar-footer', {[className]: !!className})}>
      {children}
    </div>
  );
}

const SidebarMain: React.FC<
 React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({
  children,
  className }) => {
  return (
    <ul className={cx('t-sidebar-main', {[className]: !!className})}>
      {children}
    </ul>
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
    children,
    disabled = false,
    compact = true,
    subLevel = false,
  }, ref) => {
    const [showSubNav, setShowSubNav] = useState(false);

    return (
      <li className='list-none'>
        <a
          className={cx('t-sidebar-item default', {
            [className]: !!className,
            ['t-sidebar-item-compact ']: compact,
            ['t-sidebar-item-sub']: subLevel,
            disabled: disabled,
            active: active,
          })}
          href={href}
          ref={ref}
          onClick={onClick? onClick : () => setShowSubNav(!showSubNav)}
        >
          {icon && <div className='t-sidebar-item-icon-wrap'>{icon}</div>}
          <div className='flex-1'>{label}</div>
          {children && <div className='t-sidebar-item-icon-wrap'>
            {showSubNav? <ChevronUpIcon className='t-icon t-icon-small' /> : <ChevronDownIcon className='t-icon t-icon-small' />}</div>}
        </a>
        {children &&
        <div className={cx('t-sidebar-nav-sub', {['active'] : showSubNav})}>
          {children}
        </div>
        }
      </li>
    );
  }
);

SidebarItem.defaultProps = {
  active: false,
}

const SidebarDivider: React.FC = () => {
  return <div className='t-sidebar-divider' />;
}

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
  SidebarProps & React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >
  > {
  Outer: typeof SidebarOuter;
  Item: typeof SidebarItem;
  Divider: typeof SidebarDivider;
  Header: typeof SidebarHeader;
  Footer: typeof SidebarFooter
  Main: typeof SidebarMain
}

const CompoundedSidebar = SidebarOuter as CompoundedComponent;
CompoundedSidebar.Item = SidebarItem;
CompoundedSidebar.Divider = SidebarDivider;
CompoundedSidebar.Header = SidebarHeader;
CompoundedSidebar.Footer = SidebarFooter;
CompoundedSidebar.Main = SidebarMain;

export const Sidebar = CompoundedSidebar;
