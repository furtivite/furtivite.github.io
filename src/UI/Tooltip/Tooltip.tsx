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
  direction?: 'top' | 'left' | 'right' | 'bottom';
}

/**
 * Компонент "Тултип"
 *
 * В составе имеет две сущности:
 * 1. Цель (target) - то, на что наводим
 * 2. Подсказка (hint) - то, что всплывает
 */

export const Tooltip = ({ children, title, direction = 'top' }: ITooltip): React.ReactElement => {
  /** Признак видимости подсказки */
  const [isHintMount, setIsHintMount] = React.useState<boolean>(false);
  const [isShowHint, setIsShowHint] = React.useState<boolean>(false);

  /** Хендлер "наведения на цель" */
  const onMouseOver = (): void => {
    setIsHintMount(true);
  };

  /** Эфект для плавного появления тултипа */
  React.useLayoutEffect(() => {
    setTimeout(() => {
      isHintMount && setIsShowHint(true);
    }, 200);
    !isHintMount && setIsShowHint(false);
  }, [isHintMount]);

  /** Хендлер при "уходе с цели" */
  const onMouseOut = (): void => {
    setIsHintMount(false);
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
  const [position, setPosition] = React.useState<TPosition>({
    top: 'auto',
    left: 'auto',
  });

  /** Эффект для позиционирования подсказки по входящему пропу position компонента */
  React.useLayoutEffect(() => {
    /** Определяем размеры и позицию элемента "Цель" */
    const targetRect = targetRef.current.getBoundingClientRect();

    switch (direction) {
      case 'left':
        // TODO перестало работать, надо пересчитать
        setPosition({
          top: `${targetRect.y - 12}px`,
          // TODO Bместо 200 искать ширину тултипа
          // Если нет расстояния, то меням позиционирование
          left: `${targetRect.left - 200}px`,
        });
        break;
      case 'right':
        // TODO перестало работать, надо пересчитать
        setPosition({
          top: `${targetRect.y - 12}px`,
          left: `${targetRect.left + targetRect.width + 12}px`,
        });
        break;
      case 'bottom':
        setPosition({
          top: `${targetRect.y + targetRect.height + 12}px`,
          left: `${targetRect.left}px`,
        });
        break;
      default:
        setPosition({
          // TODO Bместо 65 искать height тултипа
          top: `${targetRect.y - 50}px`,
          left: `${targetRect.left}px`,
        });
        break;
    }
  }, [direction]);

  return (
    <>
      {isHintMount &&
        createPortal(
          <div
            className={clsx(direction, 'tooltip', isShowHint && 'tooltip-visible')}
            /** Два атрибута ниже для поддержки доступности */
            id={title}
            role="tooltip"
            style={{
              top: position.top,
              left: position.left,
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
