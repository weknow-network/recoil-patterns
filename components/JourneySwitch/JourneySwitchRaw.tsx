import { useRouter } from 'next/router';
import React from 'react';
import { IWithClassName } from '../../interfaces';

export const JourneyTypeRaw = ({ className }: IWithClassName) => {
  const router = useRouter();

  return (
    <div className={className}>
      <div className="order btn" onClick={() => router.push('/order')}>
        Order
      </div>
      <div className="review btn" onClick={() => router.push('/review')}>
        Review
      </div>
    </div>
  );
};
