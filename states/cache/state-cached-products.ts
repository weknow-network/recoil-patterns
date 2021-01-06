import { selector } from 'recoil';
import { fetchProductsMock } from '../../proxies';
import { IProduct } from '../../proxies/IProduct';

/**
 * Cache fake service
 */
export const stateCachedProducts = selector<IProduct[]>({
  key: 'state-cached-products',
  get: () => fetchProductsMock(),
});
