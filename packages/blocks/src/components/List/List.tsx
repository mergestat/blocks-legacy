import React from 'react';
import cx from 'classnames';

type ListItemsPropsT = {
  children: React.ReactNode;
  className?: string;
};

export const ListItems = (props: ListItemsPropsT) => {
  return (
    <div className={cx({ [props?.className]: !!props?.className })}>
      {props?.children}
    </div>
  );
};

type ListItemPropsT = {
  children: React.ReactNode;
  className?: string;
};

export const ListItem = (props: ListItemPropsT) => {
  return (
    <div
      className={cx('t-list-item', {
        [props?.className]: !!props?.className,
      })}
    >
      {props?.children}
    </div>
  );
};

type ListInnerPropsT = {
  children: React.ReactNode;
  className?: string;
};

export const ListInner = (props: ListInnerPropsT) => {
  return (
    <div
      className={cx('t-list-inner', {
        [props?.className]: !!props?.className,
      })}
    >
      {props?.children}
    </div>
  );
};

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >
  > {
  Items: typeof ListItems;
  Item: typeof ListItem;
  Inner: typeof ListInner;
}

export const List = ListItems as CompoundedComponent;
List.Items = ListItems;
List.Item = ListItem;
List.Inner = ListInner;
