import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import { IHeader, IWithClassName, JourneyType } from '../../interfaces';
import { stateHeaders } from '../../states';

export const JourneyTypeRaw = ({ className }: IWithClassName) => {
  const router = useRouter();
  const orders = useRecoilValue<IHeader[]>(stateHeaders(JourneyType.order));
  const reviews = useRecoilValue<IHeader[]>(stateHeaders(JourneyType.review));

  return (
    <div className={className}>
      <div className="order">
        <div
          className="btn"
          onClick={() => router.push(`/order?id=${uuidv4()}`)}
        >
          Order
        </div>
        {orders.map((m) => (
          <div className="item">
            <Link href={`/order?id=${m.id}`}>{m.product}</Link>
          </div>
        ))}
      </div>
      <div className="review">
        <div
          className="btn"
          onClick={() => router.push(`/review?id=${uuidv4()}`)}
        >
          Review
        </div>
        {reviews.map((m) => (
          <div className="item">
            <Link href={`/review?id=${m.id}`}>{m.product}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};
