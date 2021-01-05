import React, { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { IRecoilId, IWithClassName, Size } from '../../../interfaces';
import { fetchProductsMock } from '../../../proxies';
import { IProduct } from '../../../proxies/IProduct';
import { useRoutingInfo } from '../../../routing';
import { stateProductId } from '../../../states';
import { stateOrder } from '../../../states/composition/state-order';

export const AddRaw = ({ className }: IWithClassName) => {
  const { id, journey } = useRoutingInfo();
  const key: IRecoilId = {
    id,
    journey,
  };
  const [productId, setProductId] = useRecoilState(stateProductId(key));
  const setOrder = useSetRecoilState(stateOrder(key));
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const prods = fetchProductsMock();
    setProducts(prods);
  }, []);

  useEffect(() => {
    setOrder({ id, productId: '', color: '', size: Size.medium, count: 0 });
  }, [id]);

  return (
    <div className={className}>
      <h1 className="title">Select Product</h1>
      <div className="options">
        {products.map((p) => (
          <div
            key={p.id}
            className={p.id === productId ? `prod selected` : 'prod'}
            onClick={() => setProductId(p.id)}
          >
            {p.title}
          </div>
        ))}
      </div>
    </div>
  );
};
