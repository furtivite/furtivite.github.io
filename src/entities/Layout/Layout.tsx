import React from 'react';
import clsx from 'clsx';
import { Header } from '../../entities';
import { ILayout } from '../../entities/interfaces';
import { EThemeVariables, StoreContext } from '../../app/StoreContext';
import { initApp } from '../../features/app/appSlice';
import { useAppDispatch, useAppSelector } from 'src/app/store/hooks';

export const Layout: React.FC<ILayout> = ({ children }: ILayout) => {
  const { theme, lang } = React.useContext(StoreContext);
  const className = clsx('relative min-h-screen', theme === EThemeVariables.DARK ? 'bg-black text-w-100' : '');

  const dispatch = useAppDispatch();
  const isInitApp = useAppSelector((state) => state.app.isInit);

  console.log(isInitApp);

  React.useEffect(() => {
    dispatch(initApp())
  }, [])
  
  return (
    <div className={className} lang={lang}>
      <Header />
      <main>{children}</main>
    </div>
  );
};
