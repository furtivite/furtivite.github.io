import React from 'react';

import './tooltip.css';
import { createPortal } from 'react-dom';

export interface ITooltip {
  children: JSX.Element;
  title: string;
  // TODO передалать на ENUM
  position?: 'top' | 'left' | 'right' | 'bottom';
}

/**
 * Компонент "Тултип"
 */
export const Tooltip = ({ children, title, position = 'top' }: ITooltip): React.ReactElement => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  const onMouseOver = (): void => {
    setIsVisible(true);
  };

  const onMouseOut = (): void => {
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  const child = React.Children.only(children);

  const targetRef = React.useRef<HTMLDivElement>();

  const handleTransitionEnd = () => {
    console.log('transition end');
  };

  // TODO Избавится от двух тегов при создании
  const target = React.createElement(
    child.type,
    {
      style: { display: 'inline-block' },
      'aria-labelledby': title,
      onMouseOut: onMouseOut,
      onMouseOver: onMouseOver,
      ref: targetRef,
    },
    child
  );

  type TPosition = {
    top: string;
    left: string;
  };

  const [tooltipPosition, setTooltipPosition] = React.useState<TPosition>({
    top: 'auto',
    left: 'auto',
  });

  React.useLayoutEffect(() => {
    const rect = targetRef.current.getBoundingClientRect();

    console.log(rect);

    switch (position) {
      case 'left':
        setTooltipPosition({
          top: `${rect.y - 15}px`,
          // TODO Bместо 200 искать ширину тултипа
          // Если нет расстояния, то меням позиционирование
          left: `${rect.left - 200}px`,
        });
        break;
      case 'right':
        setTooltipPosition({
          top: `${rect.y - 15}px`,
          left: `${rect.left + rect.width + 15}px`,
        });
        break;
      case 'bottom':
        setTooltipPosition({
          top: `${rect.y + rect.height + 15}px`,
          left: `${rect.left}px`,
        });
        break;
      default:
        setTooltipPosition({
          // TODO Bместо 65 искать height тултипа
          top: `${rect.y - 65}px`,
          left: `${rect.left}px`,
        });
        break;
    }
  }, [position]);

  return (
    <>
      {isVisible &&
        createPortal(
          <div
            onTransitionEnd={handleTransitionEnd}
            className="tooltip"
            id={title}
            role="tooltip"
            style={{
              top: tooltipPosition.top,
              left: tooltipPosition.left,
            }}
          >
            {title}
          </div>,
          document.body
        )}
      {target}
      <br />
      <br />
    </>
  );
};
