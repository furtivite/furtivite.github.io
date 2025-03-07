import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { goods } from '../../assets/goods';
import { EThemeVariables, StoreContext } from '../../app/StoreContext';
import { Btn } from '../../shared';
import { IGoodsItem } from 'src/entities/interfaces';
import { generateRandomNumber } from '../generators';

export const AddGoodForm: React.FC = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<IGoodsItem>();
  const [lastId, setLastId] = React.useState<number>(goods[goods.length - 1].id);
  const { t } = useTranslation();

  const onSubmit = (data: Partial<IGoodsItem>): void => {
    setLastId(lastId + 1);
    console.log('Form :', data);
    reset();
  };

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
      <input id="id" value={lastId} className={className} disabled />
      <label htmlFor="title" className="pt-2">
        Title:
      </label>
      <input
        {...register('title', {
          value: `Some cool goods ${lastId}`,
          required: true,
        })}
        id="title"
        className={className}
      />
      <label htmlFor="details" className="pt-2">
        Details:
      </label>
      <textarea
        {...register('details', {
          value:
            'Curabitur tincidunt ex vel magna iaculis varius. Duis eleifend ligula vitae lectus cursus, eu luctus leo rutrum. ',
          required: true,
        })}
        className={className}
        name="details"
        required
      />
      <label htmlFor="price" className="pt-2">
        Price
      </label>
      <input
        {...register('price', {
          value: generateRandomNumber(50, 250),
          required: true,
        })}
        id="price"
        className={className}
      />
      <Btn type="submit">{t('forms.submit')}</Btn>
    </form>
  );
};
