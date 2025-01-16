import React from 'react';
import { useTranslation } from 'react-i18next';
import { ICounter } from '../../shared/interfaces';

export const Counter: React.FC<ICounter> = ({ counter }) => {
  const { t } = useTranslation();

  return (
    <div className="min-w-[164px] max-w-fit min-h-[47px] flex justify-between items-center px-4 border-[1px] border-solid border-b-100 rounded font-inter text-sm text-b-800 leading-7">
      <button>
        <img
          src="https://raw.githubusercontent.com/furtivite/cdn.furtivite.github.io/refs/heads/main/images/minus.svg"
          alt=""
          width={20}
          height={20}
        />
        <span className="sr-only">{t('counter.decrease')}</span>
      </button>
      {counter}
      <button>
        <img
          src="https://raw.githubusercontent.com/furtivite/cdn.furtivite.github.io/refs/heads/main/images/plus.svg"
          alt=""
          width={20}
          height={20}
        />
        <span className="sr-only">{t('counter.increase')}</span>
      </button>
    </div>
  );
};
