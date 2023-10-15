'use client'
import useDrawer from '@/hooks/useDrawer';
import { DrawerContext } from '@/providers/DrawerProvider';
import { useContext } from 'react';

export default function Drawer() {

  const { isOpen, toggleMenu } = useContext(DrawerContext)!;

  return (
    <div className={`drawer ${isOpen ? 'drawer-open lg:hidden' : ''}`}>
      <input id="my-drawer" type="checkbox" className="drawer-toggle"/>
      <div className="drawer-content">
        {/* Page content here */}
        {/* <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label> */}
      </div> 
      <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* <button onClick={getIsDrawerOpened}>test</button> */}
          {/* Sidebar content here */}
          <li><a>Sidebar Item 1</a></li>
          <li><a>Sidebar Item 2</a></li>
        </ul>
      </div>
    </div>
  )
}