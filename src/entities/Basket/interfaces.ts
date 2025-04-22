import { EGoodsSizes, ICommonGoodsItem } from '../../entities/interfaces';

export interface IBasketGoodsItem extends ICommonGoodsItem {
  size: EGoodsSizes;
  color: string;
  counter: number;
}
