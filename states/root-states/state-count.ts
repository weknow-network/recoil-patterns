import { atomFamily } from 'recoil';

/**
 * Represent count of specific product
 */
export const stateSize = atomFamily<
  number /* count */,
  string /* the product id*/
>({
  key: 'state-count',
  default: 0,
});
