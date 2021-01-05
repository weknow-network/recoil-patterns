import { atomFamily } from 'recoil';
import { IRecoilId } from '../../interfaces';

/**
 * Represent count of specific product's order
 */
export const stateCount = atomFamily<number, IRecoilId /* recoil family key */>(
  {
    key: 'state-count',
    default: 0,
  }
);
