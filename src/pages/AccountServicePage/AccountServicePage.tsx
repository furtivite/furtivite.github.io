import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '../../entities';
import { AccountService, ProductType, UserType } from '../../features/AccountService';

export const AccountServicePage: React.FC = () => {
  // Пример использования класса AccountService
  const service = new AccountService();
  const userType = UserType.Premium;
  const initialPrice = 5000000;

  const userDiscount = service.getDiscount(userType);
  const userProductDiscount = service.getUserProductDiscount(userType, ProductType.Car);
  const commonDiscount = service.getCommonDiscount(userType, ProductType.Car);
  const finalPrice = service.calculateFinalPrice(initialPrice, userType, ProductType.Car);

  const discountListPromise = service.getUserProductsDiscountList();
  discountListPromise.then((result) => {
    console.log(result);
  });

  const { t } = useTranslation();

  return (
    <Container>
      <ul className="mb-4">
        <li>
          {t('accountServicePage.userDiscount')} {userDiscount * 100}%
        </li>
        <li>
          {t('accountServicePage.userProductDiscount')} {userProductDiscount * 100}%
        </li>
      </ul>
      <p className="mb-8">
        {t('accountServicePage.commonDiscount')} {commonDiscount}%
      </p>
      <p className="mb-4">
        {t('accountServicePage.initialPrice')} {initialPrice.toLocaleString()}&nbsp;₽
      </p>
      <p>
        {t('accountServicePage.finalPrice')} {finalPrice.toLocaleString()}&nbsp;₽
      </p>
    </Container>
  );
};
