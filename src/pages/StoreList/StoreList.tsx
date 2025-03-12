import React from 'react';
import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { createPortal } from 'react-dom';
import { goods } from '../../assets/goods';
import { AsideFlter, AsideLayout, Container, Modal, ShortCard } from '../../entities';
import { IGoodsItem } from '../../entities/interfaces';
import { Btn, RangeSlider } from '../../shared';
import { generateRandomCardList } from '../../features/generators';
import { AddGoodForm } from '../../features/forms';
import { IRangeSliderChange } from '../../shared/interfaces';

export const StoreList: React.FC = () => {
  const [myGoods, setMyGoods] = React.useState<IGoodsItem[]>([]);
  const [lastId, setLastId] = React.useState<number>(goods[goods.length - 1].id);
  const [isModalVisible, setIsModalVisible] = React.useState<boolean>(false);

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
  const { reset } = useForm<IGoodsItem>();

  const changePriceFilter = ({ min, max }: IRangeSliderChange) => {
    console.log(`min = ${min}, max = ${max}`);
  };

  const changeModalVisibility = (): void => {
    setIsModalVisible(!isModalVisible);
  };

  const onSubmit = (data: Partial<IGoodsItem>): void => {
    setLastId(lastId + 1);
    console.log('Form :', data);
    reset();
    setIsModalVisible(!isModalVisible);
  };

  return (
    <>
      <Container>
        <div className="flex items-start gap-[21px]">
          <AsideLayout>
            <AsideFlter title="Price">
              <div className="mb-2">
                <RangeSlider min={0} max={100} onChange={changePriceFilter} />
              </div>
              <Btn onClick={changeModalVisibility}>{t('listPage.addGoodToStore')}</Btn>
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
      {isModalVisible &&
        createPortal(
          <Modal changeVisibility={changeModalVisibility}>
            <AddGoodForm newId={lastId} onSubmit={onSubmit} />
          </Modal>,
          document.body
        )}
    </>
  );
};
