import React from 'react';
import ReactStars from 'react-star-rating-component';
import { useRecoilState } from 'recoil';
import { IRecoilId, IWithClassName } from '../../../interfaces';
import { useFlowRouter, useRoutingInfo } from '../../../routing';
import { stateComment, stateStars } from '../../../states';

export const DetailsRaw = ({ className }: IWithClassName) => {
  const router = useFlowRouter();
  const { id, journey } = useRoutingInfo();
  const key: IRecoilId = {
    id,
    journey,
  };
  const [stars, setStars] = useRecoilState(stateStars(key));
  const [comment, setComment] = useRecoilState(stateComment(key));

  return (
    <div className={className}>
      <h1 className="title">Details</h1>
      <div className="raring">
        <ReactStars
          name="raring"
          value={stars}
          onStarClick={(r: number) => setStars(r)}
        />
      </div>
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
