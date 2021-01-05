import { atomFamily } from 'recoil';
import { JourneyType } from '../../interfaces';

/**
 * Trace all active product's ids under specific journey type
 */
export const stateReviewTracking = atomFamily<
  string[] /* product ids */,
  JourneyType /* journey type*/
>({
  key: 'state-review-tracking',
  default: [],
});
