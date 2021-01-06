import React from 'react';
import { useRoutingInfo } from '../../routing';
import { Continue } from './Continue';
import { Details } from './Details';
import { Reviewer } from './Reviewer';
import { Select } from './Select';

export const ReviewScreens = () => {
  const { stageKey } = useRoutingInfo();
  return (
    <>
      {stageKey === undefined && <Select />}
      {stageKey === 'select' && <Select />}
      {stageKey === 'reviewer' && <Reviewer />}
      {stageKey === 'details' && <Details />}
      {stageKey === 'continue' && <Continue />}
    </>
  );
};
