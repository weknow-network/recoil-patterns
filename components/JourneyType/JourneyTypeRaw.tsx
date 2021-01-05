import React from 'react';
import { IWithClassName } from '../../interfaces';

export const JourneyTypeRaw = ({ className }: IWithClassName) => {
  return (
    <div className={className}>
      <button type="button" onClick={() => {}}>
        Order
      </button>
      <button type="button" onClick={() => {}}>
        Order
      </button>
    </div>
  );
};
