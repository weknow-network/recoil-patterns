import { selectorFamily, waitForAll } from 'recoil';
import { stateColor, stateCount, stateProductId, stateSize } from '..';
import { guardRecoilDefaultValue } from '../../guards';
import { IOrder, IRecoilId } from '../../interfaces';
import { stateOrderTracking } from '../tracking/state-order-tracking';

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
  key: 'state-product',
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
    // reset (when recoil's value is empty)
    const { journey, id } = familyKey;
    if (guardRecoilDefaultValue(value)) {
      reset(stateProductId(familyKey));
      reset(stateColor(familyKey));
      reset(stateSize(familyKey));
      reset(stateCount(familyKey));

      // remove from tracking
      set(stateOrderTracking(journey), (prv) => [
        ...prv.filter((m) => m !== id),
      ]);

      return;
    }
    // set
    set(stateProductId(familyKey), value.productId);
    set(stateColor(familyKey), value.color);
    set(stateSize(familyKey), value.size);
    set(stateCount(familyKey), value.count);

    // track
    set(stateOrderTracking(journey), (prv) => {
      // already exists
      if (prv.includes(id)) return prv;
      // add tracking
      return [...prv, id];
    });
  },
});
