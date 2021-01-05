import { atomFamily } from 'recoil';
import { IRecoilId } from '../../interfaces';

/**
 * Represent name choice of specific reviewer
 */
export const stateReviewer = atomFamily<
  string,
  IRecoilId /* recoil family key */
>({
  key: 'state-reviewer',
  default: 'new product',
});
