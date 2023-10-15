'use client'

import React, { useState, createContext, ReactNode } from 'react';

interface IDrawerContext {
  isOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
  toggleMenu: () => void;
}

interface DrawerProviderProps {
  children: ReactNode
}

export const DrawerContext = createContext<IDrawerContext | undefined>(undefined);

 export const DrawerProvider = ({ children }: DrawerProviderProps) => {
  const [isOpen, setIsOpen] = useState(false),
    openMenu = () => {setIsOpen(true)},
    closeMenu = () => {setIsOpen(false) }, 
    toggleMenu = () => { setIsOpen((prev) => !prev)};

    const contextValue: IDrawerContext = { isOpen, openMenu, closeMenu, toggleMenu };

  return (
    <DrawerContext.Provider value={contextValue}>
      {children}
    </DrawerContext.Provider>
  );
};
