import React from 'react';
import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';
import { goods } from '../../assets/goods';
import { AsideFlter, AsideLayout, Container, ShortCard } from '../../entities';
import { IGoodsItem } from '../../entities/interfaces';
import { Btn, RangeSlider } from '../../shared';
import { generateRandomCardList } from '../../features/generators';
import { IRangeSliderChange } from 'src/shared/interfaces';

export const StoreList: React.FC = () => {
  const [myGoods, setMyGoods] = React.useState<IGoodsItem[]>([]);
  const [lastId, setLastId] = React.useState<number>(goods[goods.length - 1].id);

  React.useLayoutEffect(() => {
    const onlyAwailible: IGoodsItem[] = goods.filter((el) => el.isInStock);
    const onlyUnAwailible: IGoodsItem[] = goods.filter((el) => !el.isInStock);
    const newGoods: IGoodsItem[] = [...onlyAwailible, ...onlyUnAwailible];

    setMyGoods(newGoods);
  }, []);

  const cardGenerator = () => {
    const newCount = 3;
    const newGoods: IGoodsItem[] = generateRandomCardList(lastId, newCount);
    setMyGoods([...myGoods, ...newGoods]);
    setLastId(lastId + newCount);
  };

  const { t } = useTranslation();

  const changePriceFilter = ({ min, max }: IRangeSliderChange) => {
    console.log(`min = ${min}, max = ${max}`);
  };

  return (
    <Container>
      <div className="flex items-start gap-[21px]">
        <AsideLayout>
          <AsideFlter title="Price">
            <RangeSlider min={0} max={100} onChange={changePriceFilter} />
          </AsideFlter>
        </AsideLayout>
        <section>
          <ul className="grid grid-cols-3 mb-4">
            {myGoods.map((item) => (
              <li key={nanoid()}>
                <ShortCard {...item} />
              </li>
            ))}
          </ul>
          <div className="flex gap-3">
            <Btn onClick={cardGenerator}>{t('listPage.addMore')}</Btn>
          </div>
        </section>
      </div>
    </Container>
  );
};
