import React, { useState } from 'react';
import {
  useDropdownToggle,
  Dropdown as RoDropdown,
  useDropdownMenu,
} from 'react-overlays';
import type { DropDirection } from 'react-overlays/DropdownContext';
import cx from 'classnames';
import styled from 'styled-components';

export const MenuContainerStyled = styled('div')`
  position: absolute;
  flex-direction: column;
  ${({ show, zIndex }: { show: boolean, zIndex: number }) => (`
    display: ${show} ? 'flex' : 'none';
    z-index: ${zIndex};
  `)}
`;

type DropdownProps = {
  alignEnd?: boolean;
  overlay: (close: () => void) => React.ReactNode;
  trigger: React.ReactNode;
  role?: string;
  drop?: DropDirection;
  disabled?: boolean;
  zIndex?: number;
}

const DropdownContent: React.FC<
  {
    overlay: () => React.ReactNode;
    zIndex: number;
  } & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >
> = ({ overlay, zIndex }) => {
  const [props, { show }] = useDropdownMenu({
    flip: true
  });

  return (
    <MenuContainerStyled {...props} show={show} zIndex={zIndex}>
      {overlay()}
    </MenuContainerStyled>
  );
}

const DropdownToggle: React.FC<any> = ({
  id,
  children,
  disabled,
}): any => {
  const [{ onClick, ...props }, { toggle, show }] = useDropdownToggle();

  return (
    <div
      {...props}
      id={id}
      className={cx('h-full')}
      {...(!disabled && {
        onClick: (event) => {
          onClick(event);
          toggle(!show);
        },
      })}
    >
      {children}
    </div>
  );
};

export const Dropdown: React.FC<DropdownProps> = ({
  alignEnd,
  role,
  drop = 'down',
  trigger,
  overlay,
  disabled = false,
  zIndex = 9,
}) => {
  const [show, setShow] = useState(false);

  const dropdownToggle = () => setShow(!show);

  return (
    <RoDropdown
      show={show}
      onToggle={setShow}
      drop={drop}
      alignEnd={alignEnd}
      itemSelector="button:not(:disabled)"
      children={
        <>
          <DropdownToggle id="dropdown-toggle" disabled={disabled}>
            {trigger}
          </DropdownToggle>
          <DropdownContent
            role={role}
            overlay={() => overlay(dropdownToggle)}
            zIndex={zIndex}
          />
        </>
      }
    />
  );
}
