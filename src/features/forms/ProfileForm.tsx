import React from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { Input, TextArea } from '../../shared';

type TFormData = {
  name: string;
  aboutMe: string;
};

export const ProfileForm: React.FC = () => {
  const { t } = useTranslation();
  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TFormData>();

  const onSubmit = (data: TFormData): void => {
    console.log('Form :', data);
    reset();
  };

  return (
    <form className="grid gap-2" onSubmit={handleSubmit(onSubmit)}>
      <label className="grid gap-2">
        {t('forms.name.label')}
        <div>
          <Input value="" placeholder={t('forms.name.placeholder')} required />
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}
        </div>
      </label>
      <label className="grid gap-2">
        {t('forms.about.label')}
        <TextArea value="" placeholder={t('forms.about.placeholder')} required />
      </label>
    </form>
  );
};
