import React, { useState } from 'react';
import { XIcon, CaretDownIcon } from '@mergestat/icons';
import { Button } from '../Button';

type AlertProps = {
  closable?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

export const Filter: React.FC<AlertProps> = ({
  closable = false,
  onClose,
  children
}) => {
  const [visible, setVisible] = useState<boolean>(true);

  if (!visible) return null;

  return (
    <div>
      {closable ? (
        <div className='t-flex-div'>
          <Button skin="borderless">
            {children ? children : "Filter label"}
          </Button>
          <div className='t-divider' />
          <XIcon className="t-icon " />
        </div>
      ) : (
        <Button skin="secondary" endIcon={<CaretDownIcon className="t-icon" />}>
          {children ? children : "Filter label"}
        </Button>
      )}
    </div>
  );
}
