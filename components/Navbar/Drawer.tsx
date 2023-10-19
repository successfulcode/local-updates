'use client'
import { DrawerContext } from '@/providers/DrawerProvider';
import Link from 'next-intl/link';
import { useContext } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

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
            <ul>
              {/* <button onClick={getIsDrawerOpened}>test</button> */}
              {/* Sidebar content here */}
              <li><a>Sidebar Item 1</a></li>
              <li><a>Sidebar Item 2</a></li>

              <Link href='/about'>About</Link>
            </ul>
          </div>
        </div>
      </div>  
    </div>
  )
}