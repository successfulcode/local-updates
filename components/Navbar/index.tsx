import Link from 'next-intl/link';
import ThemeButton from '@/components/shared/ThemeButton';
import Drawer from './Drawer';
import DrawerButton from './DrawerButton';
import ConnectButtons from '../shared/ConnectButtons';
import Logo from '../shared/Logo';

export default function Navbar() {

  return (
    <>
      <nav>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="lg:hidden ml-3">
              <DrawerButton />
            </div>
            <div className="ml-4">
              <Logo />
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 w-100">
              <li tabIndex={0}>
                <details>
                  <summary>News</summary>
                  <ul className="p-2">
                    <li>
                      <Link href="about">News1</Link>
                    </li>
                    <li>
                      <Link href="about">News2</Link>
                    </li>
                    <li>
                      <Link href="about">News3</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href="/">Ads</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end mr-5 flex">
            <div className="hidden lg:block">
              <ConnectButtons />
            </div>
            <ThemeButton />
          </div>
        </div>
        <div className="h-1 primary-background"></div>
      </nav>

      <Drawer />
    </>
  )
}