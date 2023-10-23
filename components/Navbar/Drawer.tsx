'use client'
import { DrawerContext } from '@/providers/DrawerProvider';
import { useContext } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import DrawerLink from './DrawerLink';
import ConnectButtons from '../shared/ConnectButtons';
import Logo from '../shared/Logo';

export default function Drawer() {

  const { isOpen, closeMenu } = useContext(DrawerContext)!;

  return (
    <div className={`drawer ${isOpen ? 'drawer-open lg:hidden' : ''}`}>
      <input id="my-drawer" type="checkbox" className="drawer-toggle"/>
      <div className="drawer-side" style={{ width: '100%' }}>
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>

        <div className="menu p-4 min-h-full bg-base-200 text-base-content w-full">
          <div className="flex justify-end cursor-pointer">
            <div onClick={closeMenu}>
              <AiOutlineClose className="text-2xl" />
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <Logo />
            </div>
            <ConnectButtons />

            <ul>
              <li>
                <DrawerLink href='/'>News</DrawerLink>
              </li>
              <li>
                <DrawerLink href='/'>Ads</DrawerLink>
              </li>
              <li>
                <DrawerLink href='/about'>About</DrawerLink>
              </li>
            </ul>
          </div>
        </div>
      </div>  
    </div>
  )
}