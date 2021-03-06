import { selectorFamily, waitForAll } from 'recoil';
import { stateColor, stateCount, stateProductId, stateSize } from '..';
import { guardRecoilDefaultValue } from '../../guards';
import { IOrder, IRecoilId } from '../../interfaces';
import { stateTracking } from '../tracking/state-tracking';

/**
 * Abstract access to structured object of a product's order.
 * Useful for load / save
 *
 * @description encapsulation of multiple disconnected state into single meaningful entity
 */
export const stateOrder = selectorFamily<
  IOrder,
  IRecoilId /* recoil family key */
>({
  key: 'state-order',
  get: (familyKey) => ({ get }) => {
    const { color, size, productId, count } = get(
      waitForAll({
        productId: stateProductId(familyKey),
        color: stateColor(familyKey),
        size: stateSize(familyKey),
        count: stateCount(familyKey),
      })
    );
    const product: IOrder = {
      id: familyKey.id,
      count,
      size,
      color,
      productId,
    };
    return product;
  },
  set: (familyKey) => ({ set, reset }, value) => {
    const { journey, id } = familyKey;

    // reset (when recoil's value is empty)
    if (guardRecoilDefaultValue(value)) {
      reset(stateProductId(familyKey));
      reset(stateColor(familyKey));
      reset(stateSize(familyKey));
      reset(stateCount(familyKey));

      // remove from tracking
      set(stateTracking(journey), (prv) => [...prv.filter((m) => m !== id)]);

      return;
    }
    // set
    set(stateProductId(familyKey), value.productId);
    set(stateColor(familyKey), value.color);
    set(stateSize(familyKey), value.size);
    set(stateCount(familyKey), value.count);

    // track
    set(stateTracking(journey), (prv) => {
      // already exists
      if (prv.includes(id)) return prv;
      // add tracking
      return [...prv, id];
    });
  },
});
