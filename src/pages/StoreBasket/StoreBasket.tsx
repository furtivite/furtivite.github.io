import React from 'react';
import { useTranslation } from 'react-i18next';
import { nanoid } from 'nanoid';
import '../../app/tailwind.css';
import { defaultContext, ELangVariables, EThemeVariables, IStoreContext, StoreContext } from '../../app/StoreContext';
import { BasketGoodsItem, Layout } from '../../entities';
import { goods } from '../../assets/goods';

export const StoreBasket: React.FC = () => {
  const [contextValue, setContextValue] = React.useState<IStoreContext>(defaultContext);

  const { theme, lang } = contextValue;
  const { i18n, t } = useTranslation();

  const themeSwitchHandler = (): void => {
    if (theme === 'light') {
      setContextValue({ ...contextValue, theme: EThemeVariables.DARK });
    } else {
      setContextValue({ ...contextValue, theme: EThemeVariables.LIGHT });
    }
  };

  const langSwitchHandler = (): void => {
    if (lang === 'ru') {
      setContextValue({ ...contextValue, lang: ELangVariables.EN });
      i18n.changeLanguage('en-US');
    } else {
      setContextValue({ ...contextValue, lang: ELangVariables.RU });
      i18n.changeLanguage('ru-RU');
    }
  };

  // TODO: Delete this Links and translation in future
  const tempLinks = [
    {
      path: '/',
      text: t('tempLinks.toMain'),
    },
    {
      path: '/store/card',
      text: t('tempLinks.toCard'),
    },
  ];

  const item = goods[0];

  return (
    <StoreContext.Provider value={{ theme, lang, themeSwitchHandler, langSwitchHandler }}>
      <Layout>
        <nav className="container mx-auto my-4 px-3">
          <ol className="flex gap-2">
            {tempLinks.map((item) => (
              <li key={nanoid()}>
                <a href={item.path}>{item.text}</a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="container mx-auto my-4 px-3">
          <BasketGoodsItem
            size={item.sizes[0]}
            color={item.colors[0]}
            counter={1}
            title={item.title}
            price={item.price}
            image={item.imageListing}
          />
        </div>
      </Layout>
    </StoreContext.Provider>
  );
};
