import { atomFamily } from 'recoil';
import { IRecoilId } from '../../interfaces';

/**
 * Represent single color choice of specific product
 */
export const stateColor = atomFamily<
  string /* color */,
  IRecoilId /* recoil family key */
>({
  key: 'state-color',
  default: 'black',
});
