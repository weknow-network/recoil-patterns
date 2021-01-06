import { atomFamily } from 'recoil';
import { IProductRef, JourneyType } from '../../interfaces';

/**
 * Trace all active ids under specific journey type
 */
export const stateTracking = atomFamily<
  IProductRef[] /* ids */,
  JourneyType /* journey type */
>({
  key: 'state-product-tracking',
  default: [],
});
