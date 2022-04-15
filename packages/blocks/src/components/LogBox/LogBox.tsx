import React from 'react';
import { ClipboardIcon } from '@mergestat/icons';

type LogBoxProps = {
  data: { massage: string | React.ReactNode }[];
  onClick?: () => void;
};

export const LogBox: React.FC<LogBoxProps> = ({ data, onClick }) => {
  return (
    <div className="t-log-box">
      {data.map((item, index) => (
        <div key={`key_${index}`}>{item.massage}</div>
      ))}
      <button
        className="absolute top-10 right-10 flex gap-1.5 items-center bg-gray-700 rounded p-3"
        onClick={() => {
          if (onClick) onClick();
        }}
      >
        <ClipboardIcon className="t-icon" /> Copy
      </button>
    </div>
  );
};
