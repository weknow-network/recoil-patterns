import React from 'react';
import { useRecoilState } from 'recoil';
import { ColorPicker, SizePicker } from '../..';
import { IRecoilId, IWithClassName } from '../../../interfaces';
import { useFlowRouter, useRoutingInfo } from '../../../routing';
import { stateColor, stateCount, stateSize } from '../../../states';

export const DetailsRaw = ({ className }: IWithClassName) => {
  const router = useFlowRouter();
  const { id, journey } = useRoutingInfo();
  const key: IRecoilId = {
    id,
    journey,
  };
  const [color, setColor] = useRecoilState(stateColor(key));
  const [size, setSize] = useRecoilState(stateSize(key));
  const [count, setCount] = useRecoilState(stateCount(key));

  return (
    <div className={className}>
      <h1 className="title">Details</h1>
      <ColorPicker className="color" value={color} setValue={setColor} />
      <SizePicker className="size" value={size} setValue={setSize} />
      <div className="count">
        <h1>Count:</h1>
        <input
          className="count-input"
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.valueAsNumber)}
        />
      </div>
      <div className="next" onClick={() => router.pushStage('continue')}>
        Next
      </div>
    </div>
  );
};
