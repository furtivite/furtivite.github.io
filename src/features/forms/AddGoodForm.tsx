import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { EThemeVariables, StoreContext } from '../../app/StoreContext';
import { Btn } from '../../shared';
import { IGoodsItem } from '../../entities/interfaces';

interface IAddGoodForm {
  /** Новый id */
  newId: number;
  /** функция сабмита формы */
  onSubmit: (data: Partial<IGoodsItem>) => void;
}

export const AddGoodForm: React.FC<IAddGoodForm> = ({ newId, onSubmit }) => {
  const { handleSubmit, register } = useForm<IGoodsItem>();
  const { t } = useTranslation();

  const { theme } = React.useContext(StoreContext);
  const isDarkTheme = theme === EThemeVariables.DARK;

  const className = clsx(
    'w-full p-2 border-[1px] border-solid active:outline focus:outline rounded',
    'disabled:bg-w-100 txt-b-700',
    isDarkTheme
      ? 'bg-b-900 border-b-100 active:outline-w-900 focus:outline-w-900'
      : 'bg-w-900 active:outline-b-900 border-b-200 focus:outline-b-900'
  );

  return (
    <form name="add-good" className="grid gap-2 grid-cols-[100px_auto]" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="id" className="pt-2">
        ID:
      </label>
      <input id="id" value={newId} className={className} disabled />
      <label htmlFor="title" className="pt-2">
        {t('forms.goods.title')}
      </label>
      <input
        {...register('title', {
          value: '',
          required: true,
        })}
        id="title"
        className={className}
        placeholder={t('forms.goods.titlePlaceholder')}
      />
      <label htmlFor="details" className="pt-2">
        {t('forms.goods.details')}
      </label>
      <textarea
        {...register('details', {
          value: '',
          required: true,
        })}
        className={className}
        name="details"
        placeholder={t('forms.goods.detailsPlaceholder')}
        required
      />
      <label htmlFor="price" className="pt-2">
        {t('forms.goods.price')}
      </label>
      <input
        {...register('price', {
          value: Number(''),
          required: true,
        })}
        id="price"
        placeholder={t('forms.goods.pricePlaceholder')}
        className={className}
      />
      <Btn type="submit">{t('forms.submit')}</Btn>
    </form>
  );
};
