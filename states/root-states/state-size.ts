import { atomFamily } from 'recoil';
import { IRecoilId, Size } from '../../interfaces';

/**
 * Represent single size choice of specific product
 */
export const stateSize = atomFamily<Size, IRecoilId /* recoil family key */>({
  key: 'state-size',
  default: Size.medium,
});
