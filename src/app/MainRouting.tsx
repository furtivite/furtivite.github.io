import { nanoid } from 'nanoid';
import React from 'react';
import { BrowserRouter, Route, RouteProps, Routes } from 'react-router';
import { MainPage, Store } from 'src/pages';

export const MainRouting: React.FC = () => {
  const pages: RouteProps[] = [
    {
      path: '/',
      element: <MainPage />,
    },
    {
      path: '/store',
      element: <Store />,
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
