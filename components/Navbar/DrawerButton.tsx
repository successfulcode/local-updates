'use client';

import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import { useContext } from 'react';
import { DrawerContext } from '@/providers/DrawerProvider';

export default function DrawerButton() {

  const { isOpen, toggleMenu } = useContext(DrawerContext)!;

  return (
    <span tabIndex={0} onClick={toggleMenu} className="cursor-pointer">
      {isOpen ? (
        <AiOutlineClose className="text-2xl" />
      ) : (
        <FiMenu className="text-2xl" />
      )}
    </span>
  );
}
