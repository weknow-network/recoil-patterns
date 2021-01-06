import React from 'react';
import { useRecoilState } from 'recoil';
import { IRecoilId, IWithClassName } from '../../../interfaces';
import { useFlowRouter, useRoutingInfo } from '../../../routing';
import { stateComment, stateStars } from '../../../states';
import { StarsPicker } from '../../ui-units';

export const DetailsRaw = ({ className }: IWithClassName) => {
  const router = useFlowRouter();
  const { id, journey } = useRoutingInfo();
  const key: IRecoilId = {
    id,
    journey,
  };
  // best practice (encapsulate state within component will result with less rendering)
  const starState = stateStars(key);
  // bad practice (keeping the state at the global level will result in unnecessary rendering)
  const [comment, setComment] = useRecoilState(stateComment(key));

  return (
    <div className={className}>
      <h1 className="title">Details</h1>
      <StarsPicker className="raring" state={starState} />
      <div className="comment">
        <h1>Comment:</h1>
        <input
          className="comment-input"
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <div className="next" onClick={() => router.pushStage('continue')}>
        Next
      </div>
    </div>
  );
};
