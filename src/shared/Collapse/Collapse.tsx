import React from 'react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { ICollapse } from './interfaces';
import { Btn } from '../Btns';

export const Collapse: React.FC<ICollapse> = ({ children, showenText }) => {
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = React.useState(0);
  const [isCollapseOpen, setIsCollapseOpen] = React.useState<boolean>(false);
  const { t } = useTranslation();

  // Хендлер для смены состояния открытости
  const handleToggle = (): void => {
    setIsCollapseOpen((prev) => !prev);
  };

  // Эффект для измерения высоты содержимого при значении флага isCollapseOpen === true
  React.useLayoutEffect(() => {
    if (isCollapseOpen && contentRef.current) {
      const newHeight = contentRef.current.scrollHeight;
      setContentHeight(newHeight);
    }
  }, [isCollapseOpen]);

  const contentClassNames = clsx(isCollapseOpen ? 'opacity-1 mt-8' : 'opacity-0');

  return (
    <div>
      <div className="flex justify-between items-center">
        <p>{showenText}</p>
        <Btn onClick={handleToggle}>{isCollapseOpen ? t('collapse.isOpened') : t('collapse.isClosed')}</Btn>
      </div>
      <div className={contentClassNames} style={{ height: isCollapseOpen ? `${contentHeight}px` : 0 }}>
        {children}
      </div>
    </div>
  );
};
