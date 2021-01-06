import React from 'react';
import Rating from 'react-star-rating-component';
import { useRecoilValue } from 'recoil';
import { IRecoilId, IWithClassName } from '../../../interfaces';
import { useFlowRouter, useRoutingInfo } from '../../../routing';
import { stateReview } from '../../../states/composition/state-review';

export const ContinueRaw = ({ className }: IWithClassName) => {
  const router = useFlowRouter();
  const { id, journey } = useRoutingInfo();
  const key: IRecoilId = {
    id,
    journey,
  };
  const { reviewer, stars, comment, productId } = useRecoilValue(
    stateReview(key)
  );

  return (
    <div className={className}>
      <h1 className="title">Continue</h1>
      <div className="entry">
        <h1>Product Id: {productId}</h1>
      </div>
      <div className="entry">
        <h1>Reviewer: {reviewer}</h1>
      </div>
      <Rating name="raring" value={stars} editing={false} />
      <p>{comment}</p>
      <div className="action" onClick={() => router.pushStage('select', true)}>
        Review other product
      </div>
      <div className="action" onClick={() => router.push('/')}>
        Exit
      </div>
    </div>
  );
};
