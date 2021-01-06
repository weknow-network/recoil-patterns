import React from 'react';
import { Size } from '../../../interfaces';
import { ISizePickerProps } from './ISizePickerProps';

export const SizePickerRaw = ({
  className,
  value,
  setValue,
}: ISizePickerProps) => {
  return (
    <div className={className}>
      <h1 className="title">Select color:</h1>

      <div className="options">
        {Object.keys(Size).map((m) => (
          <div
            key={m}
            className={m === value ? 'item selected' : 'item'}
            onClick={() => setValue(m as Size)}
          >
            {m}
          </div>
        ))}
      </div>
    </div>
  );
};
