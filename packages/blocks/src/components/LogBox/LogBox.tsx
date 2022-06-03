import React from 'react';
import cx from 'classnames';
import { ClipboardIcon } from '@mergestat/icons';
import { Button } from '../Button';

type LogBoxProps = {
  logs: Array<string | React.ReactNode>;
  className?: string;
  copyBtnClassName?: string;
  onCopy?: () => void;
};

export const LogBox: React.FC<LogBoxProps> = ({ logs, className, copyBtnClassName, onCopy }) => {
  return (
    <div className={cx("t-log-box", { [className]: !!className })}>
      {logs.map((log, index) => (
        <p key={index}>
          {log}
        </p>
      ))}
      {onCopy && (
        <Button
          className={cx('log-copy-btn', {[copyBtnClassName]: !!copyBtnClassName})}
          size='small'
          skin='secondary'
          startIcon = {<ClipboardIcon className="t-icon" />}
          onClick={onCopy}
        >
          Copy
        </Button>
      )}
    </div>
  );
};
