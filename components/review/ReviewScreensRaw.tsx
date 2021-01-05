import React from 'react';
import { useRoutingInfo } from '../../routing';

export const ReviewScreensRaw = () => {
  const { stageKey } = useRoutingInfo();
  return (
    <>
      {stageKey === undefined && <h1>select</h1>}
      {stageKey === 'show' && <h1>show</h1>}
      {stageKey === 'reviewer' && <h1>reviewer</h1>}
      {stageKey === 'rank' && <h1>rank</h1>}
      {stageKey === 'continue' && <h1>Continue</h1>}
      {stageKey === 'thanks' && <h1>thanks</h1>}
    </>
  );
};