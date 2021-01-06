import React from 'react';
import { useRoutingInfo } from '../../routing';
import { Product } from '../Product';
import { Continue } from './Continue';
import { Details } from './Details';
import { Reviewer } from './Reviewer';

export const ReviewScreens = () => {
  const { stageKey } = useRoutingInfo();
  return (
    <>
      {stageKey === undefined && <Product />}
      {stageKey === 'select' && <Product />}
      {stageKey === 'reviewer' && <Reviewer />}
      {stageKey === 'details' && <Details />}
      {stageKey === 'continue' && <Continue />}
    </>
  );
};
