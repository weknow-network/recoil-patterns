import React from 'react';
import ReactStars from 'react-star-rating-component';
import { useRecoilState } from 'recoil';
import { IStarsPickerProps } from './IStarsPickerProps';

export const StarsPickerRaw = ({ className, state }: IStarsPickerProps) => {
  const [value, setValue] = useRecoilState(state);

  return (
    <div className={className}>
      <ReactStars
        name="raring"
        value={value}
        onStarClick={(r: number) => setValue(r)}
      />
    </div>
  );
};
