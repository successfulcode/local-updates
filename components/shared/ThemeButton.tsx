'use client';

import { ThemesTypes } from '@/types/enums/ThemesTypes';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BsMoonStars, BsSun } from 'react-icons/bs';

import { IconType } from 'react-icons'

interface ITheme {
  type: string; 
  icon: IconType;
  name: string;
}

export default function ThemeButton() {
  const { theme, setTheme } = useTheme(),
    availableThemes: ITheme[] = [
      { type: ThemesTypes.LIGHT, icon: BsSun, name: 'Light' },
      { type: ThemesTypes.DARK, icon: BsMoonStars, name: 'Dark' }
    ],
    [activeTheme, setActiveTheme] = useState(availableThemes[0]),
    [isLoaded, setIsLoaded] = useState(false);

  const getIsTheSame = (theme: ITheme) => theme.type === String(theme) && activeTheme.type === String(theme);

  const onSetTheme = (theme: ITheme) => {
    if (getIsTheSame(theme)) {
      return;
    }
   
    setTheme(theme.type);
    setActiveTheme(theme);
  };

  const getCurrentTheme = () => {
    return availableThemes.find(themeItem => themeItem?.type === theme);
  };

  useEffect(() => {
    const currentTheme = getCurrentTheme();
    onSetTheme(currentTheme as ITheme);

    setIsLoaded(true);
  }, []);

  return (
    <details className={`dropdown mb-32 ${!isLoaded && 'invisible'}`}>
      <summary className="m-1 btn"><activeTheme.icon className="text-xl" /></summary>
      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
        {availableThemes.map((theme) => (
          <li key={theme.type} onClick={() => onSetTheme(theme)}>
            <a>
              <span className="mr-4"><theme.icon className="text-xl" /></span>
              <span>{theme.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
}
