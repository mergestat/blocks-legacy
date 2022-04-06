import React from 'react';
import { Tab as RCTab } from '@headlessui/react';
import cx from 'classnames';

type TabGroupProps = {
  as?: string | React.Component;
  defaultIndex?: number;
  onChange?: (index: number) => void;
  vertical?: boolean;
  manual?: boolean;
}

type TabListProps = {}

type TabItemProps = {
  disabled?: boolean;
}

type TabPanelsProps = {}

type TabPanelProps = {}

const TabGroup: React.FC<
  TabGroupProps &
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLBaseElement>,
      HTMLBaseElement
    >
> = ({ children, defaultIndex, onChange, vertical }) => {
  return (
    <RCTab.Group
      defaultIndex={defaultIndex}
      onChange={onChange}
      vertical={vertical}
      manual
    >
      {children}
    </RCTab.Group>
  );
}

const TabList: React.FC<TabListProps & React.HTMLAttributes<HTMLElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <RCTab.List
      className={cx('border-b border-gray-200', { [className]: !!className })}
      {...props}
    >
      <nav className="flex space-x-2">{children}</nav>
    </RCTab.List>
  );
}

const TabItem: React.FC<TabItemProps & React.HTMLAttributes<HTMLElement>> = ({
  className,
  disabled = false,
  children,
  ...props
}) => {
  return (
    <RCTab
      disabled={disabled}
      {...props}
      className={({ selected }) =>
        cx('t-tab', {
          active: selected,
          't-tab-disabled': disabled,
        })
      }
    >
      {children}
    </RCTab>
  );
}

const TabPanels: React.FC<TabPanelsProps & React.HTMLAttributes<HTMLElement>> =
  ({ className, children, ...props }) => {
    return (
      <RCTab.Panels {...props} className={cx({ [className]: !!className })}>
        {children}
      </RCTab.Panels>
    );
  }

const TabPanel: React.FC<TabPanelProps & React.HTMLAttributes<HTMLElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <RCTab.Panel {...props} className={cx({ [className]: !!className })}>
      {children}
    </RCTab.Panel>
  );
}

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    TabGroupProps &
      React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLBaseElement>,
        HTMLBaseElement
      >
  > {
  Group: typeof TabGroup;
  List: typeof TabList;
  Item: typeof TabItem;
  Panels: typeof TabPanels;
  Panel: typeof TabPanel;
}

export const Tabs = TabGroup as CompoundedComponent;
Tabs.Group = TabGroup;
Tabs.List = TabList;
Tabs.Item = TabItem;
Tabs.Panels = TabPanels;
Tabs.Panel = TabPanel;
