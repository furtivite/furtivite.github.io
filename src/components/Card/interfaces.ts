export interface IGoodsItem {
  id: number;
  isInStock: boolean;
  title: string;
  details: string | string[];
  price: number;
  imageListing: string;
  imageFull: string[];
}
