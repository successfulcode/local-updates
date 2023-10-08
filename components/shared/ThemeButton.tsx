'use client';

import { ThemesTypes } from '@/types/enums/ThemesTypes';
import { useTheme } from 'next-themes';

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    return setTheme(
      theme === ThemesTypes.DARK ? ThemesTypes.LIGHT : ThemesTypes.DARK
    );
  };

  return (
    <input
      onChange={toggleTheme}
      type="checkbox"
      className="toggle toggle-error"
      checked={theme === 'dark'}
    />
  );
}
