import { atomFamily } from 'recoil';

/**
 * Represent name choice of specific product
 */
export const stateSize = atomFamily<
  string /* name */,
  string /* the product id*/
>({
  key: 'state-product-name',
  default: 'new product',
});
