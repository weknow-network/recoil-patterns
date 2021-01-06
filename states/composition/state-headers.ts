import { selectorFamily, waitForAll } from 'recoil';
import { stateCachedProducts } from '..';
import { IHeader, JourneyType } from '../../interfaces';
import { stateTracking } from '../tracking';

/**
 * Abstract retrieval of orders headers
 *
 * @description encapsulation of multiple disconnected state into single meaningful entity
 */
export const stateHeaders = selectorFamily<
  IHeader[],
  JourneyType /* recoil family key */
>({
  key: 'state-headers',
  get: (familyKey) => ({ get }) => {
    const { tracking, products } = get(
      waitForAll({
        tracking: stateTracking(familyKey),
        products: stateCachedProducts,
      })
    );

    const hash = new Map<string, string>(
      tracking.map((m) => [m.productId, m.id])
    );

    const headers: IHeader[] = products
      .filter((m) => hash.has(m.id))
      .map((m) => {
        return { id: hash.get(m.id) ?? '', product: m.title };
      });

    return headers;
  },
});
