import React from 'react';

import './theme-switch-btn.css';

interface LightModeBtnProps {
  isDark: boolean;
  onClick: () => void;
}

/**
 * Компонет ThemeSwitchBtn
 */
export const ThemeSwitchBtn = ({ isDark, onClick }: LightModeBtnProps): React.ReactElement => {
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
