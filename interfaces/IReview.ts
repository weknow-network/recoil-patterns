import { IProductRef } from '.';

export interface IReview extends IProductRef {
  reviewer: string;
  comment: string;
  stars: number;
}
