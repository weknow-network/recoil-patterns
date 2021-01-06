import { selectorFamily, waitForAll } from 'recoil';
import { stateComment, stateProductId, stateReviewer, stateStars } from '..';
import { guardRecoilDefaultValue } from '../../guards';
import { IRecoilId, IReview } from '../../interfaces';
import { stateTracking } from '../tracking/state-tracking';

/**
 * Abstract access to structured object of a product's review.
 * Useful for load / save
 *
 * @description encapsulation of multiple disconnected state into single meaningful entity
 */
export const stateReview = selectorFamily<
  IReview,
  IRecoilId /* recoil family key */
>({
  key: 'state-review',
  get: (familyKey) => ({ get }) => {
    const { comment, stars, reviewer, productId } = get(
      waitForAll({
        comment: stateComment(familyKey),
        stars: stateStars(familyKey),
        reviewer: stateReviewer(familyKey),
        productId: stateProductId(familyKey),
      })
    );
    const review: IReview = {
      id: familyKey.id,
      productId,
      comment,
      reviewer,
      stars,
    };
    return review;
  },
  set: (familyKey) => ({ set, reset }, value) => {
    // reset (when recoil's value is empty)
    const { journey, id } = familyKey;
    if (guardRecoilDefaultValue(value)) {
      reset(stateComment(familyKey));
      reset(stateStars(familyKey));
      reset(stateReviewer(familyKey));
      reset(stateProductId(familyKey));

      // remove from tracking
      set(stateTracking(journey), (prv) => [...prv.filter((m) => m !== id)]);

      return;
    }
    // set
    set(stateComment(familyKey), value.comment);
    set(stateStars(familyKey), value.stars);
    set(stateReviewer(familyKey), value.reviewer);
    set(stateProductId(familyKey), value.productId);

    // track
    set(stateTracking(journey), (prv) => {
      // already exists
      if (prv.includes(id)) return prv;
      // add tracking
      return [...prv, id];
    });
  },
});
