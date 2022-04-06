import React from 'react';
import {
  CircleInformationFilledIcon,
  CircleCheckFilledIcon,
  CircleWarningFilledIcon,
  WarningFilledIcon,
} from '@mergestat/icons';

export const AlertIcon: React.FC<{ type?: string }> = ({ type = 'warning' }) => {
  switch (type) {
    case 'warning':
      return (
        <WarningFilledIcon className="t-icon t-icon-mono-icons-warning-filled t-icon-warning" />
      );

    case 'info':
      return (
        <CircleInformationFilledIcon className="t-icon t-icon-mono-icons-circle-information-filled t-icon-info" />
      );

    case 'success':
      return (
        <CircleCheckFilledIcon className="t-icon t-icon-mono-icons-circle-check-filled t-icon-success" />
      );

    case 'error':
      return (
        <CircleWarningFilledIcon className="t-icon t-icon-mono-icons-circle-warning-filled t-icon-danger" />
      );

    default:
      return (
        <WarningFilledIcon className="t-icon t-icon-mono-icons-warning-filled t-icon-warning" />
      );
  }
}
