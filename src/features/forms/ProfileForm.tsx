import React from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { EThemeVariables, StoreContext } from '../../app/StoreContext';
import { Btn } from '../../shared';

type TFormData = {
  name: string;
  aboutMe: string;
};

export const ProfileForm: React.FC = () => {
  const { t } = useTranslation();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<TFormData>();

  const onSubmit = (data: TFormData): void => {
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
    <form name="profile" className="grid gap-2" onSubmit={handleSubmit(onSubmit)}>
      <label className="grid gap-2">
        {t('forms.name.label')}
        <div>
          <input
            {...register('name', {
              required: t('forms.name.requiredMessage'),
              pattern: {
                value: /^[A-Za-zА-Яа-я]+$/g,
                message: t('forms.name.patternMessage'),
              },
            })}
            className={className}
            placeholder={t('forms.name.placeholder')}
            name="name"
            required
            form="profile"
          />
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}
        </div>
      </label>
      <label className="grid gap-2">
        {t('forms.about.label')}
        <textarea
          {...register('aboutMe')}
          className={className}
          placeholder={t('forms.about.placeholder')}
          name="about"
          required
          form="profile"
        />
      </label>
      <Btn type="submit">{t('forms.submit')}</Btn>
    </form>
  );
};
