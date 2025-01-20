import React from 'react';
import { nanoid } from 'nanoid';
import { BrowserRouter, Route, RouteProps, Routes } from 'react-router';
import { MainPage, Store, StoreBasket, StoreCard } from 'src/pages';

function App() {
  const pages: RouteProps[] = [
    // {
    //   path: '/',
    //   element: <MainPage />,
    // },
    {
      path: '/',
      element: <Store />,
    },
    {
      path: '/store/basket',
      element: <StoreBasket />,
    },
    {
      path: '/store/card',
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
}

export default App;
