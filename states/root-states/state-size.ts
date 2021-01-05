import { atomFamily } from 'recoil';
import { Size } from '../../interfaces';

/**
 * Represent single size choice of specific product
 */
export const stateSize = atomFamily<
  Size /* size */,
  string /* the product (parameter)*/
>({
  key: 'state-size',
  default: Size.medium,
});
