import React from 'react';
import { useTranslation } from 'react-i18next';
import { nanoid } from 'nanoid';
import '../../app/tailwind.css';
import { defaultContext, ELangVariables, EThemeVariables, IStoreContext, StoreContext } from '../../app/StoreContext';
import { FullCard, Layout } from '../../entities';
import { goods } from '../../assets/goods';

export const StoreCard: React.FC = () => {
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
      path: '/store',
      text: t('tempLinks.toMain'),
    },
    {
      path: '/store/basket',
      text: t('tempLinks.toBasket'),
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
          <FullCard
            id={item.id}
            title={item.title}
            price={item.price}
            details={item.details}
            imageListing={item.imageListing}
            imageFull={item.imageFull}
            isInStock={item.isInStock}
            colors={item.colors}
            sizes={item.sizes}
          />
        </div>
      </Layout>
    </StoreContext.Provider>
  );
};
