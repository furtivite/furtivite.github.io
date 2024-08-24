import React from 'react';

import './tooltip.css';
import { createPortal } from 'react-dom';
import clsx from 'clsx';

export interface ITooltip {
  /** Разметка цели */
  children: JSX.Element;
  /** Текст тултипа */
  title: string;
  /** Позиция всплывания тултипа */
  // TODO передалать на ENUM
  position?: 'top' | 'left' | 'right' | 'bottom';
}

/**
 * Компонент "Тултип"
 *
 * В составе имеет две сущности:
 * 1. Цель (target) - то, на что наводим
 * 2. Подсказка (hint) - то, что всплывает
 */

export const Tooltip = ({ children, title, position = 'top' }: ITooltip): React.ReactElement => {
  /** Признак видимости подсказки */
  const [isHintVisible, setIsHintVisible] = React.useState<boolean>(false);

  /** Хендлер "наведения на цель" */
  const onMouseOver = (): void => {
    setIsHintVisible(true);
  };

  /** Хендлер при "уходе с цели" */
  const onMouseOut = (): void => {
    setTimeout(() => {
      setIsHintVisible(false);
    }, 300);
  };

  /** Реф элемента "Цель" */
  const targetRef = React.useRef<HTMLDivElement>();

  /** Цель
   * Формируется методом "cloneElement"
   * из входящего пропа children,
   * с добавлением необходимых пропов и атрибутов
   */
  const target = React.cloneElement(children, {
    style: { display: 'inline-block' },
    /** Лейбл для скринридеров */
    'aria-labelledby': title,
    onMouseOut: onMouseOut,
    onMouseOver: onMouseOver,
    ref: targetRef,
  });

  /** Тип для позиционирования подсказки */
  type TPosition = {
    top: string;
    left: string;
  };

  /** Изначальная/получившаяся позиция подсказки */
  const [tooltipPosition, setTooltipPosition] = React.useState<TPosition>({
    top: 'auto',
    left: 'auto',
  });

  /** Эффект для позиционирования подсказки по входящему пропу position компонента */
  React.useLayoutEffect(() => {
    /** Определяем размеры и позицию элемента "Цель" */
    const targetRect = targetRef.current.getBoundingClientRect();

    switch (position) {
      case 'left':
        // TODO перестало работать, надо пересчитать
        setTooltipPosition({
          top: `${targetRect.y - 12}px`,
          // TODO Bместо 200 искать ширину тултипа
          // Если нет расстояния, то меням позиционирование
          left: `${targetRect.left - 200}px`,
        });
        break;
      case 'right':
        // TODO перестало работать, надо пересчитать
        setTooltipPosition({
          top: `${targetRect.y - 12}px`,
          left: `${targetRect.left + targetRect.width + 12}px`,
        });
        break;
      case 'bottom':
        setTooltipPosition({
          top: `${targetRect.y + targetRect.height + 12}px`,
          left: `${targetRect.left}px`,
        });
        break;
      default:
        setTooltipPosition({
          // TODO Bместо 65 искать height тултипа
          top: `${targetRect.y - 50}px`,
          left: `${targetRect.left}px`,
        });
        break;
    }
  }, [position]);

  return (
    <>
      {isHintVisible &&
        createPortal(
          <div
            className={clsx(position, 'tooltip')}
            /** Два атрибута ниже для поддержки доступности */
            id={title}
            role="tooltip"
            style={{
              top: tooltipPosition.top,
              left: tooltipPosition.left,
            }}
          >
            {title}
          </div>,
          document.querySelector('main')
        )}
      {target}
    </>
  );
};
