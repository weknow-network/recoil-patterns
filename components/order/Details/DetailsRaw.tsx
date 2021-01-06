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
  // best practice (encapsulate state within component will result with less rendering)
  const colorState = stateColor(key);
  const sizeState = stateSize(key);
  // bad practice (keeping the state at the global level will result in unnecessary rendering)
  const [count, setCount] = useRecoilState(stateCount(key));

  return (
    <div className={className}>
      <h1 className="title">Details</h1>
      <ColorPicker className="color" state={colorState} />
      <SizePicker className="size" state={sizeState} />
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
