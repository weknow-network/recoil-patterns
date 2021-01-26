import React from 'react';
import { useRecoilState } from 'recoil';
import { Size } from '../../../interfaces';
import { ISizePickerProps } from './ISizePickerProps';

export const SizePickerRaw = ({ className, state }: ISizePickerProps) => {
  const [value, setValue] = useRecoilState(state);

  return (
    <div className={className}>
      <h1 className="title">Select size:</h1>

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
