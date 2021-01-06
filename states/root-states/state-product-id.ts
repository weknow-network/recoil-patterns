import { atomFamily } from 'recoil';
import { IRecoilId } from '../../interfaces';

/**
 * Represent name choice of specific product id
 */
export const stateProductId = atomFamily<
  string,
  IRecoilId /* recoil family key */
>({
  key: 'state-title',
  default: '',
});
