import { Size } from './Size';

export interface IOrder {
  id: string;
  productId: string;
  color: string;
  size: Size;
  count: number;
}
