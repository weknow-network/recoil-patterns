import { atomFamily } from 'recoil';
import { IRecoilId } from '../../interfaces';

/**
 * Represent count of specific review evaluation
 */
export const stateStars = atomFamily<number, IRecoilId /* recoil family key */>(
  {
    key: 'state-stars',
    default: 0,
  }
);
