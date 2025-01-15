import React from 'react';
import { IStockStatus } from './interfaces';

export const StockStatus: React.FC<IStockStatus> = ({ isInStock }) => (
  <span className="px-4 py-[2px] border-[1px] border-solid border-b-100 rounded-full font-inter text-xs leading-6">
    {isInStock ? 'IN STOCK' : 'OUT OF STOCK'}
  </span>
);
