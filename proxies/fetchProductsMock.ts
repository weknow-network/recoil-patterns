import { IProduct } from './IProduct';

export const fetchProductsMock = (): IProduct[] => {
  const products: IProduct[] = [
    {
      id: '1',
      title: 'bike',
    },
    {
      id: '2',
      title: 'phone',
    },
    {
      id: '3',
      title: 'donkey',
    },
    {
      id: '4',
      title: 'secret wand',
    },
  ];

  return products;
};
