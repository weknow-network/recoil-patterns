import React from 'react';
import { useRoutingInfo } from '../../routing';
import { Add } from './Add';
import { Continue } from './Continue';
import { Details } from './Details';

export const OrderScreens = () => {
  const { stageKey } = useRoutingInfo();
  return (
    <>
      {stageKey === undefined && <Add />}
      {stageKey === 'add' && <Add />}
      {stageKey === 'details' && <Details />}
      {stageKey === 'continue' && <Continue />}
    </>
  );
};
