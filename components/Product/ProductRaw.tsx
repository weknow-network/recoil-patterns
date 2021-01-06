import React from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { IProductRef, IRecoilId, IWithClassName } from '../../interfaces';
import { IProduct } from '../../proxies/IProduct';
import { useFlowRouter, useRoutingInfo } from '../../routing';
import {
  stateCachedProducts,
  stateProductId,
  stateTracking,
} from '../../states';

export const ProductRaw = ({ className }: IWithClassName) => {
  const router = useFlowRouter();
  const { id, journey } = useRoutingInfo();
  const key: IRecoilId = {
    id,
    journey,
  };
  const [productId, setProductId] = useRecoilState(stateProductId(key));
  const setTracking = useSetRecoilState(stateTracking(journey));
  const products = useRecoilValue<IProduct[]>(stateCachedProducts);

  return (
    <div className={className}>
      <h1 className="title">Select Product</h1>
      <div className="options">
        {products.map((p) => (
          <div
            key={p.id}
            className={p.id === productId ? `prod selected` : 'prod'}
            onClick={() => {
              setProductId(p.id);
            }}
          >
            {p.title}
          </div>
        ))}
      </div>
      <div
        className={productId === '' ? `next disable` : 'next'}
        onClick={() => {
          if (productId === '') return;
          const key: IProductRef = { id, productId };
          setTracking((prev) => (prev.includes(key) ? prev : [key, ...prev]));

          router.pushStage('details');
        }}
      >
        Next
      </div>
    </div>
  );
};
