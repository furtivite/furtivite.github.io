import React from 'react';
import { Header } from '../../components';
import { ILayout } from './interfaces';

export const Layout = ({ children }: ILayout): React.ReactElement => (
  <div className="relative">
    <Header />
    <main>{children}</main>
  </div>
);
