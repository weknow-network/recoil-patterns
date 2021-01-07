import { selectorFamily, waitForAll } from 'recoil';
import { stateCachedProducts, stateProductId } from '..';
import { IHeader, IRecoilId, JourneyType } from '../../interfaces';
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
  get: (journey) => ({ get }) => {
    const { tracking, products } = get(
      waitForAll({
        tracking: stateTracking(journey),
        products: stateCachedProducts,
      })
    );

    const pIds = get(
      waitForAll(
        tracking.map((id) => {
          const key: IRecoilId = { journey, id };
          // get the product it out of the atomic state
          const pIdState = stateProductId(key);
          return pIdState;
        })
      )
    );

    // create index of  product id => order / review id
    const hash = new Map<string, string>(tracking.map((m, i) => [pIds[i], m]));

    const headers: IHeader[] = products
      .filter((m) => hash.has(m.id))
      .map((m) => {
        return { id: hash.get(m.id) ?? '', product: m.title };
      });

    return headers;
  },
});
