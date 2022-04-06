import React from 'react';
import cx from 'classnames';
import Tippy, { useSingleton } from '@tippyjs/react';

import 'tippy.js/dist/tippy.css';

type BaseProps = {
  children?: React.ReactNode | string;
  className?: string;
  placement?: 'top' | 'bottom' | 'right' | 'left' | 'auto';
  content: React.ReactNode | string;
  delay?: number | undefined;
  offset?: [number, number]; // default [skidding, distance]
};

export const Tooltip = ({
  children,
  className,
  placement = 'auto',
  content,
  delay = 100,
  offset = [0, 20],
}: BaseProps): any => {
  const [source, target] = useSingleton({
    overrides: ['placement'],
  });

  return (
    <>
      <Tippy
        singleton={source}
        delay={delay}
        offset={offset}
      />

      <Tippy content={content} singleton={target} placement={placement}>
        <span className={cx({ [className]: !!className })}>
          {children}
        </span>
      </Tippy>
    </>
  );
};
