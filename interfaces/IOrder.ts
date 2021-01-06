import { IProductRef } from '.';
import { Size } from './Size';

export interface IOrder extends IProductRef {
  color: string;
  size: Size;
  count: number;
}
