import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Modal } from '../../entities';
import { Btn, Input } from 'src/shared';

export const Store: React.FC = () => {
  const [inputValue, setInputValue] = React.useState<string>('');
  const [isModalVisible, setIsModalVisible] = React.useState<boolean>(false);

  const { t } = useTranslation();

  const changeInputValue = (value: string): void => {
    setInputValue(value);
  };

  const changeModalVisibility = (): void => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <>
      <Container>
        <div className="flex gap-3">
          <div className="flex w-[75%]">
            <Input placeholder={t('mainPage.placeholder')} value={inputValue} changeInputValue={changeInputValue} />
          </div>
          <Btn onClick={changeModalVisibility} isDisabled={inputValue === ''}>
            {t('mainPage.showBtn')}
          </Btn>
        </div>
      </Container>
      {isModalVisible && (
        <Modal changeVisibility={changeModalVisibility}>
          <p>{inputValue}</p>
        </Modal>
      )}
    </>
  );
};
