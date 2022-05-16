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
  display: ${({ show }: { show: boolean }) => (show ? 'flex' : 'none')};
  position: absolute;
  z-index: 9;
  flex-direction: column;
`;

type DropdownProps = {
  alignEnd?: boolean;
  overlay: (close: () => void) => React.ReactNode;
  trigger: React.ReactNode;
  role?: string;
  drop?: DropDirection;
  disabled?: boolean;
}

const DropdownContent: React.FC<
  {
    overlay: () => React.ReactNode;
  } & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >
> = ({ overlay }) => {
  const [props, { show }] = useDropdownMenu({
    flip: true,
    offset: [0, 8],
  });

  return (
    <MenuContainerStyled {...props} show={show}>
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
      className={cx('h-full', { 'opacity-50 cursor-not-allowed': disabled })}
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
          />
        </>
      }
    />
  );
}
