import React from 'react';
import { useRecoilState } from 'recoil';
import { IRecoilId, IWithClassName } from '../../../interfaces';
import { useFlowRouter, useRoutingInfo } from '../../../routing';
import { stateReviewer } from '../../../states';

export const ReviewerRaw = ({ className }: IWithClassName) => {
  const router = useFlowRouter();
  const { id, journey } = useRoutingInfo();
  const key: IRecoilId = {
    id,
    journey,
  };
  const [reviewer, setReviewer] = useRecoilState(stateReviewer(key));

  return (
    <div className={className}>
      <div className="reviewer">
        <h1>Reviewer:</h1>
        <input
          className="reviewer-input"
          type="text"
          value={reviewer}
          onChange={(e) => setReviewer(e.target.value)}
        />
      </div>
      <div className="next" onClick={() => router.pushStage('details')}>
        Next
      </div>
    </div>
  );
};
