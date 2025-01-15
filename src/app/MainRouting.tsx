import { nanoid } from 'nanoid';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { MainPage } from 'src/pages';

export const MainRouting: React.FC = () => {
  const pages = [
    {
      path: '/',
      element: <MainPage />,
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
