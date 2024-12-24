import React from 'react';
import { IBtn, ICounter } from '../interfaces';
import { Btn, Counter } from '../../components';

const Icon = (): React.ReactElement => (
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_5500_48)">
      <g clipPath="url(#clip1_5500_48)">
        <path
          d="M15.3551 20.3571C15.1751 20.3571 15.0025 20.2894 14.8753 20.1688C14.748 20.0483 14.6765 19.8848 14.6765 19.7143C14.6765 19.5438 14.748 19.3803 14.8753 19.2597C15.0025 19.1391 15.1751 19.0714 15.3551 19.0714C15.5351 19.0714 15.7076 19.1391 15.8349 19.2597C15.9622 19.3803 16.0337 19.5438 16.0337 19.7143C16.0337 19.8848 15.9622 20.0483 15.8349 20.1688C15.7076 20.2894 15.5351 20.3571 15.3551 20.3571Z"
          fill="white"
          stroke="white"
          strokeWidth="1.42857"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.5338 20.3571C6.35383 20.3571 6.18123 20.2894 6.05397 20.1688C5.92672 20.0483 5.85522 19.8848 5.85522 19.7143C5.85522 19.5438 5.92672 19.3803 6.05397 19.2597C6.18123 19.1391 6.35383 19.0714 6.5338 19.0714C6.71376 19.0714 6.88636 19.1391 7.01362 19.2597C7.14088 19.3803 7.21237 19.5438 7.21237 19.7143C7.21237 19.8848 7.14088 20.0483 7.01362 20.1688C6.88636 20.2894 6.71376 20.3571 6.5338 20.3571Z"
          stroke="white"
          strokeWidth="1.42857"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.5338 11.3571H9.4624"
          stroke="white"
          strokeWidth="1.42857"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.4983 9.42856V13.2857"
          stroke="white"
          strokeWidth="1.42857"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.17847 3.64285H4.57132L4.92825 6.85714M4.92825 6.85714L5.8009 14.7064C5.83609 15.0222 5.99336 15.3144 6.24243 15.5269C6.4915 15.7394 6.81474 15.857 7.1499 15.8571H15.727C16.0296 15.8571 16.3235 15.7613 16.562 15.585C16.8005 15.4087 16.9699 15.1619 17.0435 14.8839L18.7399 8.45528C18.79 8.2657 18.7939 8.06779 18.7512 7.87659C18.7084 7.6854 18.6203 7.50594 18.4933 7.35186C18.3664 7.19779 18.2041 7.07315 18.0187 6.98743C17.8333 6.9017 17.6298 6.85714 17.4235 6.85714H4.92825Z"
          stroke="white"
          strokeWidth="1.42857"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_5500_48">
        <rect width="24" height="24" fill="white" transform="translate(0.5)" />
      </clipPath>
      <clipPath id="clip1_5500_48">
        <rect width="19" height="18" fill="white" transform="translate(0.5 3)" />
      </clipPath>
    </defs>
  </svg>
);

export const AddToCart = ({ counter, children }: IBtn & ICounter): React.ReactElement => {
  if (counter > 0) {
    return <Counter counter={counter} />;
  }
  return (
    <Btn>
      <div className="flex items-center gap-[6px]">
        {children}
        <Icon />
      </div>
    </Btn>
  );
};
