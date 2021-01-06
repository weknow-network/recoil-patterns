import React from 'react';
import { SketchPicker } from 'react-color';
import { useRecoilState } from 'recoil';
import { IColorPickerProps } from './IColorPickerProps';

export const ColorPickerRaw = ({ className, state }: IColorPickerProps) => {
  const [value, setValue] = useRecoilState(state);

  return (
    <div className={className}>
      <h1 className="color-title">Select color:</h1>
      <SketchPicker
        className="picker"
        color={value}
        onChangeComplete={(color: { hex: string }) => setValue(color.hex)}
      />
    </div>
  );
};
