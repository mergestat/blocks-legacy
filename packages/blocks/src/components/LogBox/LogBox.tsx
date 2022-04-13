import { ClipboardIcon } from '@mergestat/icons';
import React from 'react';

type LogBoxProps = {
  data: { massage: string | React.ReactNode }[];
  onClick?: ([]) => void;
};

export const LogBox: React.FC<LogBoxProps> = ({ data, onClick }) => {
  return (
    <div className="bg-gray-800 text-white p-10 rounded">
      {data.map((item, index) => (
        <div key={`key_${index}`}>{item.massage}</div>
      ))}
      <button
        className="absolute top-10 right-10 flex gap-1.5 items-center bg-gray-700 rounded p-2"
        onClick={() => onClick && onClick(data)}
      >
        <ClipboardIcon className="t-icon" /> Copy
      </button>
    </div>
  );
};
