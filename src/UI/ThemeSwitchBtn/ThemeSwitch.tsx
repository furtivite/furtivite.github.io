import React from 'react';

import './theme-switch-btn.css';

interface ThemeSwitchBtnProps {
  isDark: boolean;
  onClick: () => void;
}

/**
 * Компонент "ThemeSwitchBtn"
 *
 * Служит для переключения светлой и темной темы в приложении
 */
export const ThemeSwitchBtn = ({ isDark, onClick }: ThemeSwitchBtnProps): React.ReactElement => {
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
