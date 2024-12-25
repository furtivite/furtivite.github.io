import React from 'react';
import { Header } from '../../components';
import { ILayout } from '../interfaces';

export const Layout: React.FC<ILayout> = ({ children }: ILayout) => (
  <div className="relative">
    <Header />
    <main>{children}</main>
  </div>
);
