import { nanoid } from 'nanoid';
import React from 'react';
import { BrowserRouter, Route, RouteProps, Routes } from 'react-router';
import { MainPage, Store, StoreBasket, StoreCard } from 'src/pages';

export const Routing: React.FC = () => {
  const home = 'furtivite.github.io';
  const pages: RouteProps[] = [
    {
      path: `${home}/`,
      element: <MainPage />,
    },
    {
      path: `${home}/store/`,
      element: <Store />,
    },
    {
      path: `${home}/store/basket`,
      element: <StoreBasket />,
    },
    {
      path: `${home}/store/card`,
      element: <StoreCard />,
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {pages.map((item) => (
          <Route key={nanoid()} path={item.path} element={item.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
