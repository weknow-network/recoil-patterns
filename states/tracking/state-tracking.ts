import { atomFamily } from 'recoil';
import { JourneyType } from '../../interfaces';

/**
 * Trace all active ids under specific journey type
 */
export const stateTracking = atomFamily<
  string[] /* ids */,
  JourneyType /* journey type */
>({
  key: 'state-product-tracking',
  default: [],
});
