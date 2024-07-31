import React from 'react';

import './light-mode-btn.css';

interface LightModeBtnProps {
  isDark: boolean;
  onClick: () => void;
}

/**
 * Компонет LightModeBtn
 */
export const LightModeBtn = ({ isDark, onClick }: LightModeBtnProps): React.ReactElement => {
  return (
    <button className="light-mode-btn" onClick={onClick}>
      <img
        width="20"
        height="20"
        src={
          isDark
            ? `https://img.icons8.com/ios-filled/100/FFFFFF/crescent-moon.png`
            : `https://img.icons8.com/ios-filled/100/sun--v1.png`
        }
        alt=""
      />
    </button>
  );
};
