import React from 'react';

import { Button } from '../Button';
import { alertStack } from './AlertStack';

export default {
  title: 'Utilities/AlertStack',
  argTypes: {},
}

export const AlertStackUtil = () => {
  const showAlertStack = (type: string) =>
    alertStack[type]({
      message: 'Alert Message',
      title: 'Alert Title',
      onClose: () => {
        console.log('Close');
      },
    });

  return (
    <div className="flex space-x-5">
      <Button skin="secondary" onClick={() => showAlertStack('success')}>
        Show Success Notification
      </Button>
      <Button skin="secondary" onClick={() => showAlertStack('error')}>
        Show Error Notification
      </Button>
      <Button skin="secondary" onClick={() => showAlertStack('warning')}>
        Show Warning Notification
      </Button>
      <Button skin="secondary" onClick={() => showAlertStack('info')}>
        Show Info Notification
      </Button>

      <Button skin="danger-primary" onClick={alertStack.destroy}>
        Destroy Alert
      </Button>
    </div>
  );
}
