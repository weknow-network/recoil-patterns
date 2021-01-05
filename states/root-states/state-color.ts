import { atomFamily } from 'recoil';

/**
 * Represent single color choice of specific product
 */
export const stateColor = atomFamily<
  string | undefined /* color */,
  string /* the product (parameter)*/
>({
  key: 'state-color',
  default: undefined,
});
