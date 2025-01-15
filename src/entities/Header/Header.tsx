import React from 'react';
import { Logo } from '../../shared';
import { ELogoType } from '../../shared/interfaces';

export const Header: React.FC = () => (
  <header className="sticky top-0 py-[22px] border-b-[1px] border-b-100 border-solid">
    <div className="container mx-auto px-3">
      <Logo type={ELogoType.DARK} text="Ecommerce" />
    </div>
  </header>
);
