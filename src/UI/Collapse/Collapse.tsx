import React from 'react';
import clsx from 'clsx';

import './collapse.css';

interface Props {
  children: string;
  opened: boolean;
  onClick: () => void;
}

export const Collapse = ({ children, opened, onClick }: Props): React.ReactElement => {
  const [isCollapseContentMount, setIsCollapseContentMount] = React.useState<boolean>(false);
  const [isAnimationEnded, setIsAnimationEnded] = React.useState<boolean>(false);

  React.useLayoutEffect(() => {
    if (opened) {
      setIsCollapseContentMount(true);
    } else {
      setIsCollapseContentMount(false);
    }
  }, [opened]);

  const handleTransitionEnd = (): void => {
    console.log('Transition ended');
    setIsAnimationEnded(!isAnimationEnded);
  };

  const collapseBlockStyle = {
    width: opened ? '90%' : '0',
    transition: 'width 2s ease',
  };

  const collapseInliseStyle = {
    height: opened ? '100%' : '0',
    transition: 'height 2s ease',
  };

  return (
    <div
      style={collapseBlockStyle}
      className={clsx('margin-bottom-24', 'collapse', opened && 'collapse-opened')}
      onClick={onClick}
    >
      <div style={collapseInliseStyle} onTransitionEnd={handleTransitionEnd}>
        {isCollapseContentMount && <div className="collapse_wrapper">{isAnimationEnded && children}</div>}
      </div>
    </div>
  );
};
