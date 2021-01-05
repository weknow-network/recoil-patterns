import { atomFamily } from 'recoil';
import { JourneyType } from '../../interfaces';

/**
 * Trace all active product's ids under specific journey type
 */
export const stateOrderTracking = atomFamily<
  string[] /* product ids */,
  JourneyType /* journey type*/
>({
  key: 'state-product-tracking',
  default: [],
});
