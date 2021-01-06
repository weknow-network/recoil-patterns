import React from 'react';
import { useRecoilValue } from 'recoil';
import { IRecoilId, IWithClassName } from '../../../interfaces';
import { useFlowRouter, useRoutingInfo } from '../../../routing';
import { stateOrder } from '../../../states/composition/state-order';

export const ContinueRaw = ({ className }: IWithClassName) => {
  const router = useFlowRouter();
  const { id, journey } = useRoutingInfo();
  const key: IRecoilId = {
    id,
    journey,
  };
  const { count, size, color, productId } = useRecoilValue(stateOrder(key));

  return (
    <div className={className}>
      <h1 className="title">Continue</h1>
      <div className="entry">
        <h1>Product Id: {productId}</h1>
      </div>
      <div className="entry">
        <h1>Color: {color}</h1>
      </div>
      <div className="entry">
        <h1>Size: {size}</h1>
      </div>
      <div className="entry">
        <h1>Count: {count}</h1>
      </div>
      <div className="action" onClick={() => router.pushStage('add', true)}>
        Add
      </div>
      <div className="action" onClick={() => router.push('/')}>
        Exit
      </div>
    </div>
  );
};
