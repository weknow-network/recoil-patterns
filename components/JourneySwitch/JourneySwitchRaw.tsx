import { useRouter } from 'next/router';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IWithClassName } from '../../interfaces';

export const JourneyTypeRaw = ({ className }: IWithClassName) => {
  const router = useRouter();

  return (
    <div className={className}>
      <div
        className="order btn"
        onClick={() => router.push(`/order?id=${uuidv4()}`)}
      >
        Order
      </div>
      <div
        className="review btn"
        onClick={() => router.push(`/review?id=${uuidv4()}`)}
      >
        Review
      </div>
    </div>
  );
};
