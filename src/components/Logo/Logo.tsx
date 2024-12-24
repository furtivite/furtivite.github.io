import React from 'react';
import { ELogoType, ILogo } from './interface';

const Dark = (): React.ReactElement => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="20" fill="#0E1422" />
    <path
      d="M24.4768 11.3485L18.2039 7.55509C17.6118 7.19292 16.9387 7.0015 16.2531 7.00031C14.2093 7.00031 12.3346 8.71225 12.3346 11.105V25.3073L24.4768 17.9669C26.9081 16.4947 26.9081 12.82 24.4768 11.3485ZM15.8483 18.448V10.8679L22.1162 14.6567L15.8483 18.448Z"
      fill="white"
    />
    <path
      d="M27.8488 32.9844C27.8488 33.0273 15.9907 32.966 15.9907 32.966L14.9432 32.8425C13.2466 32.644 11.9441 31.1233 12.0018 29.3346C12.0018 29.2917 12.0055 29.2519 12.008 29.2103C12.0546 28.4365 12.326 27.6961 12.7857 27.0885C12.9724 26.8461 13.2008 26.6425 13.459 26.4882L22.478 21.0725C24.3413 19.9535 25.893 19.562 26.6998 17.5341C26.9973 16.7757 27.1258 15.9562 27.0756 15.1379L27.0444 14.5865L27.965 19.9204C28.0829 20.8264 27.9012 21.7537 27.421 22.5169C27.1325 22.9785 26.7474 23.3653 26.295 23.6479L15.8294 28.8943C15.819 28.9006 15.8088 28.9074 15.7991 28.9149C15.5126 29.1293 15.6894 29.6069 16.0402 29.5867L24.7514 29.6403C26.4431 29.5417 27.8524 31.2112 27.8488 32.9844Z"
      fill="white"
    />
  </svg>
);

const Light = (): React.ReactElement => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="0.5" width="43" height="43" rx="5.5" stroke="#E6E7E8" />
    <path
      d="M26.4768 13.3485L20.2039 9.55509C19.6118 9.19292 18.9387 9.0015 18.2531 9.00031C16.2093 9.00031 14.3346 10.7122 14.3346 13.105V27.3073L26.4768 19.9669C28.9081 18.4947 28.9081 14.82 26.4768 13.3485ZM17.8483 20.448V12.8679L24.1162 16.6567L17.8483 20.448Z"
      fill="#0E1422"
    />
    <path
      d="M29.8488 34.9844C29.8488 35.0273 17.9907 34.966 17.9907 34.966L16.9432 34.8425C15.2466 34.644 13.9441 33.1233 14.0018 31.3346C14.0018 31.2917 14.0055 31.2519 14.008 31.2103C14.0546 30.4365 14.326 29.6961 14.7857 29.0885C14.9724 28.8461 15.2008 28.6425 15.459 28.4882L24.478 23.0725C26.3413 21.9535 27.893 21.562 28.6998 19.5341C28.9973 18.7757 29.1258 17.9562 29.0756 17.1379L29.0444 16.5865L29.965 21.9204C30.0829 22.8264 29.9012 23.7537 29.421 24.5169C29.1325 24.9785 28.7474 25.3653 28.295 25.6479L17.8294 30.8943C17.819 30.9006 17.8088 30.9074 17.7991 30.9149C17.5126 31.1293 17.6894 31.6069 18.0402 31.5867L26.7514 31.6403C28.4431 31.5417 29.8524 33.2112 29.8488 34.9844Z"
      fill="#0E1422"
    />
  </svg>
);

const Admin = (): React.ReactElement => (
  <svg width="16" height="30" viewBox="0 0 16 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_1303_620)">
      <path
        d="M12.4768 6.34854L6.2039 2.55509C5.61183 2.19292 4.93872 2.0015 4.25307 2.00031C2.20933 2.00031 0.33463 3.71225 0.33463 6.10502V20.3073L12.4768 12.9669C14.9081 11.4947 14.9081 7.81996 12.4768 6.34854ZM3.84825 13.448V5.86793L10.1162 9.65667L3.84825 13.448Z"
        fill="#0E1422"
      />
      <path
        d="M15.8488 27.9844C15.8488 28.0273 3.99069 27.966 3.99069 27.966L2.94324 27.8425C1.2466 27.644 -0.0558684 26.1233 0.00184602 24.3346C0.00184602 24.2917 0.00552992 24.2519 0.00798585 24.2103C0.0545855 23.4365 0.325954 22.6961 0.785698 22.0885C0.972404 21.8461 1.20079 21.6425 1.45903 21.4882L10.478 16.0725C12.3413 14.9535 13.893 14.562 14.6998 12.5341C14.9973 11.7757 15.1258 10.9562 15.0756 10.1379L15.0444 9.58655L15.965 14.9204C16.0829 15.8264 15.9012 16.7537 15.421 17.5169C15.1325 17.9785 14.7474 18.3653 14.295 18.6479L3.82942 23.8943C3.81896 23.9006 3.80885 23.9074 3.79913 23.9149C3.5126 24.1293 3.68943 24.6069 4.04022 24.5867L12.7514 24.6403C14.4431 24.5417 15.8524 26.2112 15.8488 27.9844Z"
        fill="#0E1422"
      />
    </g>
    <defs>
      <clipPath id="clip0_1303_620">
        <rect width="15.9998" height="29.9994" fill="white" transform="translate(0 0.000305176)" />
      </clipPath>
    </defs>
  </svg>
);

export const Logo = ({ type, text }: ILogo): React.ReactElement => (
  <div className="flex items-center gap-3">
    {type === ELogoType.DARK && <Dark />}
    {type === ELogoType.LIGHT && <Light />}
    {type === ELogoType.NOBORDER && <Admin />}
    <span className="logo">{type === ELogoType.NOBORDER ? 'Admin' : text}</span>
  </div>
);