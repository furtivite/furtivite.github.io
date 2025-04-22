export enum EGoodsSizes {
  S = 's',
  M = 'm',
  XL = 'xl',
  XXL = 'xxl',
}

export interface IGoogsColor {
  colors: string[];
}

export interface IGoodsSizes {
  sizes: EGoodsSizes[];
}

export interface ICommonGoodsItem {
  id: number;
  title: string;
  imageListing: string;
  price: number;
}

export interface IGoodsItem extends ICommonGoodsItem, IGoogsColor, IGoodsSizes {
  isInStock: boolean;
  details: string | string[];
  imageFull: string[];
  colors: string[];
}
