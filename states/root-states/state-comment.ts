import { atomFamily } from 'recoil';
import { IRecoilId } from '../../interfaces';

/**
 * Represent name choice of specific comment
 */
export const stateComment = atomFamily<
  string,
  IRecoilId /* recoil family key */
>({
  key: 'state-comment',
  default: 'new product',
});
