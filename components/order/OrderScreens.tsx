import React from 'react';
import { useRoutingInfo } from '../../routing';
import { Product } from '../Product';
import { Continue } from './Continue';
import { Details } from './Details';

export const OrderScreens = () => {
  const { stageKey } = useRoutingInfo();
  return (
    <>
      {stageKey === undefined && <Product />}
      {stageKey === 'select' && <Product />}
      {stageKey === 'details' && <Details />}
      {stageKey === 'continue' && <Continue />}
    </>
  );
};
