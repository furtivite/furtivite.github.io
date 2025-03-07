import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { EThemeVariables, StoreContext } from '../../app/StoreContext';
import { Btn } from '../../shared';

type TFormData = {
  login: string;
  password: string;
};

export enum EAuthRegVariables {
  registration = 'REG',
  authorization = 'AUTH',
}

interface IAuthRegForm {
  type: EAuthRegVariables;
}

export const AuthRegForm: React.FC<IAuthRegForm> = ({ type }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const { t } = useTranslation();

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
    <form name="auth-reg" className="grid gap-2" onSubmit={handleSubmit(onSubmit)}>
      <label className="grid gap-2">
        {t('forms.authReg.login.label')}
        <div>
          <input
            {...register('login', {
              required: t('forms.authReg.login.requiredMessage'),
              pattern: {
                value: /^[A-Za-z]+$/g,
                message: t('forms.authReg.login.patternMessage'),
              },
            })}
            className={className}
            placeholder={t('forms.authReg.login.placeholder')}
            name="login"
            required
            form="auth-reg"
          />
        </div>
      </label>
      <label className="grid gap-2">
        {t('forms.authReg.password.label')}
        <div>
          <input
            {...register('password', {
              required: t('forms.authReg.password.requiredMessage'),
              minLength: type === EAuthRegVariables.registration && {
                value: 8,
                message: t('forms.authReg.password.patternMessage'),
              },
            })}
            className={className}
            placeholder={t('forms.authReg.password.placeholder')}
            name="password"
            required
            form="auth-reg"
          />
        </div>
      </label>

      <Btn type="submit">
        {type === EAuthRegVariables.registration ? t('forms.authReg.submitReg') : t('forms.authReg.submitAuth')}
      </Btn>
    </form>
  );
};
