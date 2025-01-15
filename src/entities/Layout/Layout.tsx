import React from 'react';
import { Header } from '../../entities';
import { ILayout } from '../../entities/interfaces';

export const Layout: React.FC<ILayout> = ({ children }: ILayout) => (
  <div className="relative">
    <Header />
    <main>{children}</main>
  </div>
);
